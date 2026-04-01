// post.js - 글 상세 페이지 로직
// 포스트 구조: posts/{slug}/content.html + posts/{slug}/meta.json

document.addEventListener("DOMContentLoaded", function() {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug");

  if (!slug) { showError("잘못된 접근입니다."); return; }

  var idx = POSTS.findIndex(function(p) { return p.slug === slug; });
  if (idx === -1) { showError("글을 찾을 수 없습니다."); return; }

  var post = POSTS[idx];
  var prev = idx + 1 < POSTS.length ? POSTS[idx + 1] : null;
  var next = idx - 1 >= 0           ? POSTS[idx - 1] : null;

  document.title = post.title + " - minj.devlog";

  renderPost(post);
  renderPostNav(prev, next);
});

// ── 글 본문 렌더링 ──────────────────────────────────────────
function renderPost(post) {
  var container = document.getElementById("postDetail");
  if (!container) return;

  var thumbPath = window.getThumbPath ? window.getThumbPath(post) : null;

  container.innerHTML =
    '<div class="post-detail-header">' +
      '<div class="post-detail-meta">' +
        '<span class="post-cat-badge" onclick="window.location.href=\'index.html?cat=' + encodeURIComponent(post.category) + '\'" style="cursor:pointer;">' + escHtml(post.category) + '</span>' +
        '<span class="post-date">' + formatDate(post.date) + '</span>' +
      '</div>' +
      '<h1 class="post-detail-title">' + escHtml(post.title) + '</h1>' +
      (post.tags && post.tags.length
        ? '<div class="post-detail-tags">' +
            post.tags.map(function(t) {
              return '<span class="post-tag" onclick="window.location.href=\'index.html?tag=' + encodeURIComponent(t) + '\'" style="cursor:pointer;">#' + escHtml(t) + '</span>';
            }).join('') +
          '</div>'
        : '') +
    '</div>' +
    (thumbPath
      ? '<div class="post-detail-thumb"><img src="' + thumbPath + '" alt="' + escHtml(post.title) + '" onerror="this.parentElement.style.display=\'none\'" /></div>'
      : '') +
    '<div class="post-detail-body" id="postBody">' +
      '<div class="post-content-placeholder"><div style="font-size:2rem;">⏳</div><p>본문 불러오는 중...</p></div>' +
    '</div>';

  loadContent(post);
}

// ── 본문 로딩: content.html 우선, 없으면 index.html fallback ──
function loadContent(post) {
  var slug = post.slug;
  var isFile = window.location.protocol === "file:";

  // 시도할 경로 순서: content.html → index.html
  var candidates = [
    "posts/" + slug + "/content.html",
    "posts/" + slug + "/index.html"
  ];

  if (isFile) {
    tryIframeChain(candidates, 0, post);
  } else {
    var base = window.BASE_URL || "";
    tryFetchChain(candidates.map(function(p) { return base + p; }), 0, post);
  }
}

// ── fetch 체인 (http/https) ──────────────────────────────────
function tryFetchChain(urls, idx, post) {
  if (idx >= urls.length) { showSummaryFallback(post); return; }
  fetch(urls[idx])
    .then(function(r) {
      if (!r.ok) throw new Error("404");
      return r.text();
    })
    .then(function(html) { injectContent(html, post); })
    .catch(function() { tryFetchChain(urls, idx + 1, post); });
}

// ── iframe 체인 (file://) ────────────────────────────────────
function tryIframeChain(paths, idx, post) {
  if (idx >= paths.length) { showSummaryFallback(post); return; }

  var base = window.location.href.replace(/\/[^\/]*(\?.*)?$/, "/");
  var src = base + paths[idx];

  var iframe = document.createElement("iframe");
  iframe.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;border:none;";
  iframe.src = src;

  iframe.onload = function() {
    try {
      var html = iframe.contentDocument.body.innerHTML.trim();
      if (html) {
        injectContent(html, post);
      } else {
        tryIframeChain(paths, idx + 1, post);
      }
    } catch(e) {
      tryIframeChain(paths, idx + 1, post);
    }
    if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
  };
  iframe.onerror = function() {
    if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    tryIframeChain(paths, idx + 1, post);
  };

  document.body.appendChild(iframe);
}

// ── HTML 주입 + 네이버 블로그 마크업 클린업 ────────────────────
function injectContent(rawHtml, post) {
  var body = document.getElementById("postBody");
  if (!body) return;

  // DOMParser로 파싱
  var parser = new DOMParser();
  var doc = parser.parseFromString('<div>' + rawHtml + '</div>', "text/html");
  var root = doc.body.firstChild;

  // 네이버 블로그 구조인지 감지 (.se-main-container 또는 .se-component)
  var isNaver = root && (
    root.classList.contains("se-main-container") ||
    root.querySelector(".se-component") ||
    root.querySelector(".se-module-text")
  );

  var cleaned;
  if (isNaver) {
    cleaned = cleanNaverHtml(root, post.slug);
  } else {
    cleaned = root ? root.innerHTML : rawHtml;
  }

  body.innerHTML = '<div class="post-body naver-post">' + cleaned + '</div>';

  // 이미지 경로 보정 (상대경로 images/xxx → posts/{slug}/images/xxx)
  fixImagePaths(body, post.slug);
}

// ── 네이버 HTML 클린업 ─────────────────────────────────────────
function cleanNaverHtml(root, slug) {
  // 불필요한 스크립트/데이터 태그 제거
  var scripts = root.querySelectorAll("script, style[type='text/data'], .__se_module_data");
  scripts.forEach(function(el) { el.remove(); });

  // 텍스트 단락 추출
  var paragraphs = root.querySelectorAll(".se-text-paragraph");
  paragraphs.forEach(function(p) {
    // 공백만 있는 span 내용을 <br>로 치환
    var spans = p.querySelectorAll("span");
    spans.forEach(function(s) {
      if (s.textContent.trim() === "​" || s.textContent.trim() === "") {
        // 네이버 공백문자 제거
        if (s.textContent === "​") s.textContent = "";
      }
    });
  });

  // 이미지: se-module-image 안의 img 또는 video 처리
  var imgModules = root.querySelectorAll(".se-module-image");
  imgModules.forEach(function(mod) {
    // video (GIF용) → img poster로 교체
    var video = mod.querySelector("video");
    if (video) {
      var poster = video.getAttribute("poster") || "";
      var gifUrl = video.getAttribute("data-gif-url") || poster;
      if (gifUrl) {
        var img = document.createElement("img");
        img.src = gifUrl.replace(/\?type=.*$/, ""); // 쿼리 파라미터 제거
        img.className = "se-img";
        img.style.maxWidth = "100%";
        video.parentNode.replaceChild(img, video);
      }
    }
    // 일반 img의 data-lazy-src 처리
    var imgs = mod.querySelectorAll("img[data-lazy-src]");
    imgs.forEach(function(img) {
      img.src = img.getAttribute("data-lazy-src");
    });
  });

  // 코드 블록: se-code
  var codeBlocks = root.querySelectorAll(".se-module-code");
  codeBlocks.forEach(function(block) {
    var pre = document.createElement("pre");
    var code = document.createElement("code");
    code.textContent = block.textContent;
    pre.appendChild(code);
    block.parentNode.replaceChild(pre, block);
  });

  // 인용구: se-quotation
  var quotes = root.querySelectorAll(".se-quotation-container");
  quotes.forEach(function(q) {
    q.className = ""; // 네이버 클래스 제거, blockquote 태그는 유지
  });

  return root.innerHTML;
}

// ── 이미지 경로 보정 ─────────────────────────────────────────
function fixImagePaths(container, slug) {
  var base = window.BASE_URL || "";
  var imgs = container.querySelectorAll("img");
  imgs.forEach(function(img) {
    var src = img.getAttribute("src") || "";
    // 이미 절대 URL이면 건드리지 않음
    if (src.startsWith("http") || src.startsWith("//") || src.startsWith("file:")) return;
    // "images/xxx" 형태면 slug 기반 경로로 보정
    if (src.startsWith("images/")) {
      img.src = base + "posts/" + slug + "/" + src;
    } else if (src.startsWith("./images/")) {
      img.src = base + "posts/" + slug + "/images/" + src.replace("./images/", "");
    }
  });
}

// ── 요약문 fallback ─────────────────────────────────────────
function showSummaryFallback(post) {
  var body = document.getElementById("postBody");
  if (!body) return;
  body.innerHTML = post.summary
    ? '<p class="post-detail-summary">' + escHtml(post.summary) + '</p>' +
      '<div class="post-content-placeholder"><div class="placeholder-icon">📄</div>' +
      '<p>본문 파일을 찾을 수 없습니다.</p>' +
      '<p style="font-size:0.82rem;color:var(--text-muted);margin-top:6px;">경로: <code>posts/' + post.slug + '/content.html</code></p></div>'
    : '<div class="post-content-placeholder"><div class="placeholder-icon">📄</div><p>본문 내용이 없습니다.</p></div>';
}

// ── 이전/다음 글 네비게이션 ─────────────────────────────────
function renderPostNav(prev, next) {
  var container = document.getElementById("postNav");
  if (!container) return;
  container.innerHTML =
    '<div class="post-nav-inner">' +
      '<div class="post-nav-item post-nav-prev">' +
        (prev
          ? '<a href="post.html?slug=' + prev.slug + '"><span class="nav-label">← 이전 글</span><span class="nav-title">' + escHtml(prev.title) + '</span></a>'
          : '<span class="nav-empty">이전 글 없음</span>') +
      '</div>' +
      '<div class="post-nav-item post-nav-next">' +
        (next
          ? '<a href="post.html?slug=' + next.slug + '"><span class="nav-label">다음 글 →</span><span class="nav-title">' + escHtml(next.title) + '</span></a>'
          : '<span class="nav-empty">다음 글 없음</span>') +
      '</div>' +
    '</div>' +
    '<div class="post-nav-back"><a href="index.html">← 목록으로</a></div>';
}

// ── 에러 표시 ───────────────────────────────────────────────
function showError(msg) {
  var container = document.getElementById("postDetail");
  if (container) {
    container.innerHTML =
      '<div class="no-results"><div class="nr-icon">⚠️</div><p>' + msg + '</p>' +
      '<a href="index.html" style="margin-top:16px;display:inline-block;color:var(--accent);">← 목록으로</a></div>';
  }
}

// ── 헬퍼 ────────────────────────────────────────────────────
function formatDate(d) {
  if (!d) return "";
  var p = d.split("-");
  return p[0] + "." + p[1] + "." + p[2];
}

function escHtml(str) {
  return (str || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

if (typeof window.toggleCat === "undefined") {
  window.toggleCat = function(btn) {
    btn.classList.toggle("collapsed");
    btn.nextElementSibling.classList.toggle("closed");
  };
}
