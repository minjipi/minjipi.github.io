#!/usr/bin/env python3
"""
글 페이지 미리 만들기 (검색엔진용)

posts.js 의 글 목록과 posts/<slug>/content.html 을 읽어서
  - posts/<slug>/index.html  : 본문이 HTML 안에 처음부터 들어 있는 글 페이지 (200 응답)
  - sitemap.xml, robots.txt
를 만든다. 글을 추가하거나 고친 뒤에는 저장소 루트에서 다시 실행한다.

    python3 tools/build_pages.py

필요한 것: python3 + beautifulsoup4, node (posts.js 를 읽는 데 사용)
"""
import datetime
import html
import json
import os
import re
import subprocess
import sys
import urllib.parse

from bs4 import BeautifulSoup, Comment

SITE = "https://minjipi.github.io"
SITE_NAME = "minj.devlog"
AUTHOR = "minj"
NAVER_BLOG = "https://blog.naver.com/ghdalswl77/"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TODAY = datetime.date.today().isoformat()


def load_posts():
    code = (
        "const fs=require('fs');"
        "eval(fs.readFileSync('posts.js','utf8').replace('const POSTS','global.POSTS'));"
        "process.stdout.write(JSON.stringify(POSTS.filter(Boolean)));"
    )
    out = subprocess.run(["node", "-e", code], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def esc(s):
    return html.escape(s or "", quote=True)


def plain(s):
    s = (s or "").replace("​", " ").replace("존재하지 않는 이미지입니다.", " ")
    return re.sub(r"\s+", " ", s).strip()


def describe(post, text):
    """검색 결과에 보일 설명(80~155자)"""
    summary = plain(post.get("summary"))
    # 가져올 때 만든 요약은 중간에서 잘려 있는 경우가 많아서, 문장으로 끝나지 않으면 본문에서 다시 뽑음
    base = summary if re.search(r"[.!?다요)」』]$", summary or "") else (plain(text) or summary)
    if len(base) <= 155:
        return base
    cut = base[:155]
    for sep in (". ", "다. ", "요. ", " "):
        i = cut.rfind(sep)
        if i > 80:
            return cut[: i + len(sep)].strip()
    return cut


def is_naver(soup):
    return bool(soup.select_one(".se-main-container, .se-component, .se-module-text"))


def clean_naver(soup, log_no):
    """post.js 의 cleanNaverHtml 과 같은 정리를 빌드 때 한 번에 한다."""
    for el in soup.select("script, style[type='text/data'], .__se_module_data"):
        el.decompose()
    # 네이버 광고 자리, 스티커
    for el in soup.select(".ssp-adcontent, [id^='ssp-adcontent'], iframe[title='AD'], .se-component.se-sticker"):
        el.decompose()
    # 네이버 서버 밖에서 열리지 않는 링크 미리보기 썸네일
    for el in soup.select(".se-oglink-thumbnail"):
        img = el.find("img")
        if img and "pstatic.net" in (img.get("src") or ""):
            el.decompose()
    # 네이버 동영상 → 원문 안내
    for el in soup.select(".se-component.se-video"):
        p = soup.new_tag("p", attrs={"class": "naver-video-note"})
        a = soup.new_tag("a", href=NAVER_BLOG + log_no if log_no else NAVER_BLOG, target="_blank", rel="noopener")
        a.string = "🎬 동영상은 네이버 블로그 원문에서 볼 수 있어요."
        p.append(a)
        el.replace_with(p)
    # 움직이는 이미지(GIF가 video 로 들어간 경우) → img
    for mod in soup.select(".se-module-image"):
        v = mod.find("video")
        if v:
            src = v.get("data-gif-url") or v.get("poster") or ""
            if src:
                img = soup.new_tag("img", src=re.sub(r"\?type=.*$", "", src), attrs={"class": "se-img"})
                v.replace_with(img)
        for img in mod.select("img[data-lazy-src]"):
            img["src"] = img["data-lazy-src"]
    # 코드 블록
    for block in soup.select(".se-module-code"):
        pre = soup.new_tag("pre")
        code = soup.new_tag("code")
        code.string = block.get_text()
        pre.append(code)
        block.replace_with(pre)
    for q in soup.select(".se-quotation-container"):
        del q["class"]
    # 네이버 '소제목' → 진짜 제목 태그 (모양은 그대로, 페이지 안 스타일로 맞춤)
    for sec in soup.select(".se-section-sectionTitle"):
        for p in sec.select("p.se-text-paragraph"):
            p.name = "h2"
    # 폭이 없는 공백만 있는 span 정리
    for span in soup.select(".se-text-paragraph span"):
        if span.string and span.string.strip("​") == "" and "​" in span.string:
            span.string = ""


def tidy(soup):
    """id, 빈 style, 주석, data-* 같은 군더더기 속성 제거"""
    for c in soup.find_all(string=lambda t: isinstance(t, Comment)):
        if "source:" not in c:
            c.extract()
    for el in soup.find_all(True):
        for attr in list(el.attrs):
            if attr == "id" or attr.startswith("data-"):
                del el[attr]
            elif attr == "style" and not (el.get("style") or "").strip():
                del el[attr]


def fix_images(soup, slug, title):
    first = True
    for img in soup.find_all("img"):
        src = img.get("src") or ""
        if src.startswith("./"):
            src = src[2:]
        if src.startswith("images/"):
            img["src"] = f"/posts/{slug}/{src}"
        if not img.get("alt"):
            img["alt"] = ""
        if first:
            first = False
        else:
            img["loading"] = "lazy"
        img["decoding"] = "async"


def body_html(post):
    path = os.path.join(ROOT, "posts", post["slug"], "content.html")
    raw = open(path, encoding="utf-8").read()
    soup = BeautifulSoup(raw, "html.parser")
    log_no = (re.search(r"blog\.naver\.com/ghdalswl77/(\d+)", raw) or re.search(r"(\d{9,})", raw) or [None, None])[1]
    if is_naver(soup):
        clean_naver(soup, log_no)
    tidy(soup)
    fix_images(soup, post["slug"], post["title"])
    text = soup.get_text(" ")
    return str(soup).strip(), text, log_no


def thumb_url(post):
    t = post.get("thumb")
    if not t:
        return None
    if t.startswith("http"):
        return t
    if not t.startswith("posts/"):
        t = f"posts/{post['slug']}/{t}"
    return "/" + t


def page(post, content, text, log_no):
    slug, title = post["slug"], plain(post["title"])
    url = f"{SITE}/posts/{slug}/"
    desc = describe(post, text)
    thumb = thumb_url(post)
    image_abs = SITE + thumb if thumb and thumb.startswith("/") else (thumb or f"{SITE}/apple-touch-icon.png")
    date = post.get("date") or TODAY
    # 대표 이미지가 본문에도 있으면 위에서 한 번 더 보여 주지 않음
    hero = ""
    if thumb and os.path.basename(thumb) not in content:
        hero = f'<div class="post-detail-thumb"><img src="{esc(thumb)}" alt="{esc(title)}" onerror="this.parentElement.style.display=\'none\'" /></div>'
    source = (
        f'<a id="postSourceBtn" class="post-source-btn" href="{NAVER_BLOG}{log_no}" target="_blank" rel="noopener noreferrer">'
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
        "원본 글 보기</a>"
        if log_no else ""
    )
    cat = post.get("category") or ""
    ld = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title[:110],
        "description": desc,
        "datePublished": date,
        "dateModified": date,
        "inLanguage": "ko-KR",
        "author": {"@type": "Person", "name": AUTHOR, "url": SITE + "/"},
        "publisher": {"@type": "Person", "name": AUTHOR, "url": SITE + "/"},
        "mainEntityOfPage": url,
        "image": image_abs,
        "articleSection": cat,
    }
    return f"""<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{esc(title)} | {SITE_NAME}</title>
  <meta name="description" content="{esc(desc)}" />
  <link rel="canonical" href="{esc(url)}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="{SITE_NAME}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:title" content="{esc(title)}" />
  <meta property="og:description" content="{esc(desc)}" />
  <meta property="og:url" content="{esc(url)}" />
  <meta property="og:image" content="{esc(image_abs)}" />
  <meta property="article:published_time" content="{date}" />
  <meta property="article:section" content="{esc(cat)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />
  <style>
    /* 네이버 '소제목'을 h2 로 바꿨지만 모양은 원래대로 */
    .naver-post .se-section-sectionTitle h2 {{ font: inherit; margin: 0; padding: 0; border: 0; color: inherit; }}
  </style>
</head>

<body>
  <header class="topbar" style="position:relative;">
    <a href="/" class="logo">minj<span class="logo-dot">.</span></a>
    <nav class="topbar-nav">
      <a href="/posts/" class="topnav-link">posts</a>
      <a href="/" class="topnav-link">about</a>
    </nav>
    <div class="topbar-right">
      <!-- 검색창은 search-nav.js 가 자동 주입 -->
    </div>
  </header>

  <div class="layout">
    <aside class="sidebar" id="sidebar"></aside>

    <main class="main post-detail-wrap">
      <article class="post-detail" id="postDetail" data-prerendered="1" data-slug="{esc(slug)}">
        <div class="post-detail-header">
          <div class="post-detail-header-top">
            <div class="post-detail-meta">
              <a class="post-cat-badge" href="/posts/?cat={urllib.parse.quote(cat, safe='')}">{esc(cat)}</a>
              <time class="post-date" datetime="{date}">{date.replace('-', '.')}</time>
            </div>
            {source}
          </div>
          <h1 class="post-detail-title">{esc(title)}</h1>
        </div>
        {hero}
        <div class="post-detail-body" id="postBody">
          <div class="post-body naver-post">
{content}
          </div>
        </div>
      </article>

      <nav class="post-nav" id="postNav" aria-label="같은 카테고리 글"></nav>
    </main>
  </div>

  <script src="/posts.js"></script>
  <script src="/path-resolver.js"></script>
  <script src="/sidebar.js"></script>
  <script src="/post.js"></script>
  <script src="/search-nav.js"></script>
</body>

</html>
"""


def write_sitemap(posts):
    urls = [(f"{SITE}/", TODAY, "1.0"), (f"{SITE}/posts/", TODAY, "0.8")]
    for p in sorted(posts, key=lambda p: p.get("date") or "", reverse=True):
        urls.append((f"{SITE}/posts/{p['slug']}/", p.get("date") or TODAY, "0.6"))
    body = "\n".join(
        f"  <url><loc>{esc(u)}</loc><lastmod>{d}</lastmod><priority>{pr}</priority></url>" for u, d, pr in urls
    )
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "\n</urlset>\n"
    )
    open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(
        "User-agent: *\n"
        "Allow: /\n"
        "# 같은 글을 다른 주소로 보여 주는 페이지와 로컬 편집용 페이지는 제외\n"
        "Disallow: /post.html\n"
        "Disallow: /editor.html\n"
        "\n"
        f"Sitemap: {SITE}/sitemap.xml\n"
    )
    return len(urls)


def main():
    posts = load_posts()
    made = 0
    for post in posts:
        content, text, log_no = body_html(post)
        out = os.path.join(ROOT, "posts", post["slug"], "index.html")
        open(out, "w", encoding="utf-8").write(page(post, content, text, log_no))
        made += 1
    n = write_sitemap(posts)
    print(f"글 페이지 {made}개, sitemap 주소 {n}개를 만들었어요.")


if __name__ == "__main__":
    sys.exit(main())
