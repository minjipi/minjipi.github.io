// post.js - 글 상세 페이지 로직
// 포스트 구조: posts/{slug}/content.html + posts/{slug}/meta.json

document.addEventListener("DOMContentLoaded", function() {
  var params = new URLSearchParams(window.location.search);
  // Support both ?slug=... query param and /posts/{slug} clean URL path
  var slug = params.get("slug") || (function() {
    var m = window.location.pathname.match(/\/posts\/([^\/]+)\/?$/);
    return m ? decodeURIComponent(m[1]) : null;
  })();

  if (!slug) { showError("잘못된 접근입니다."); return; }

  var idx = POSTS.findIndex(function(p) { return p.slug === slug; });
  if (idx === -1) { showError("글을 찾을 수 없습니다."); return; }

  var post = POSTS[idx];

  document.title = post.title + " - minj.devlog";

  renderPost(post);
  renderCategoryPostList(post, idx);
});

// ── 글 본문 렌더링 ──────────────────────────────────────────
function renderPost(post) {
  var container = document.getElementById("postDetail");
  if (!container) return;

  var thumbPath = window.getThumbPath ? window.getThumbPath(post) : null;

  var BASE = (window.BASE_URL || '/').replace(/\/$/, '') + '/';
  var isFile = window.IS_LOCAL;
  var indexUrl = isFile ? BASE + 'posts/index.html' : '/posts';

  container.innerHTML =
    '<div class="post-detail-header">' +
      '<div class="post-detail-header-top">' +
        '<div class="post-detail-meta">' +
          '<span class="post-cat-badge" onclick="window.location.href=\'' + indexUrl + '?cat=' + encodeURIComponent(post.category) + '\'" style="cursor:pointer;">' + escHtml(post.category) + '</span>' +
          '<span class="post-date">' + formatDate(post.date) + '</span>' +
        '</div>' +
        '<a id="postSourceBtn" class="post-source-btn" style="display:none;" target="_blank" rel="noopener noreferrer">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
          '원본 글 보기' +
        '</a>' +
      '</div>' +
      '<h1 class="post-detail-title">' + escHtml(post.title) + '</h1>' +
      (post.tags && post.tags.length
        ? '<div class="post-detail-tags">' +
            post.tags.map(function(t) {
              return '<span class="post-tag" onclick="window.location.href=\'' + indexUrl + '?tag=' + encodeURIComponent(t) + '\'" style="cursor:pointer;">#' + escHtml(t) + '</span>';
            }).join('') +
          '</div>'
        : '') +
    '</div>' +
    (thumbPath
      ? '<div class="post-detail-thumb"><img src="' + thumbPath + '" alt="' + escHtml(post.title) + '" onerror="this.parentElement.style.display=\'none\'" /></div>'
      : '') +
    '<div class="post-detail-body" id="postBody">' +
      '<div class="post-content-placeholder"><div style="font-size:2rem;">⏳</div><p>본문 불러오는 중...</p></div>' +
    '</div>' +
    '';

  loadContent(post);
  loadSourceUrl(post);
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

// ── 원본 게시글 링크 (meta.json에서 source_url 로드) ──────────
function loadSourceUrl(post) {
  if (window.location.protocol === 'file:') return;
  var base = window.BASE_URL || '';
  fetch(base + 'posts/' + post.slug + '/meta.json')
    .then(function(r) { return r.ok ? r.json() : null; })
    .then(function(meta) {
      if (!meta || !meta.source_url) return;
      var btn = document.getElementById('postSourceBtn');
      if (!btn) return;
      btn.href = meta.source_url;
      btn.style.display = 'inline-flex';
    })
    .catch(function() {});
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

// ── 같은 카테고리 글 목록 ────────────────────────────────────
var CPL_PAGE_SIZE = 5;

function renderCategoryPostList(post) {
  var container = document.getElementById("postNav");
  if (!container) return;

  var catPosts = POSTS.filter(function(p) { return p.category === post.category; })
    .sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

  var currentCatIdx = catPosts.findIndex(function(p) { return p.slug === post.slug; });

  function postLink(slug) {
    return window.IS_LOCAL
      ? (window.BASE_URL || '') + 'post.html?slug=' + slug
      : '/posts/' + slug;
  }

  var BASE = (window.BASE_URL || '/').replace(/\/$/, '') + '/';
  var isFile = window.IS_LOCAL;
  var catUrl = isFile
    ? BASE + 'posts/index.html?cat=' + encodeURIComponent(post.category)
    : '/posts?cat=' + encodeURIComponent(post.category);
  var listUrl = isFile ? BASE + 'posts/index.html' : '/posts';

  var total = catPosts.length;
  var totalPages = Math.ceil(total / CPL_PAGE_SIZE);
  var currentPage = Math.floor(currentCatIdx / CPL_PAGE_SIZE) + 1;

  function renderPage(page) {
    var start = (page - 1) * CPL_PAGE_SIZE;
    var pageItems = catPosts.slice(start, start + CPL_PAGE_SIZE);

    var itemsHtml = pageItems.map(function(p, i) {
      var num = start + i + 1;
      var isCurrent = p.slug === post.slug;
      return '<div class="cpl-item' + (isCurrent ? ' cpl-item-current' : '') + '">' +
        '<span class="cpl-num">' + num + '</span>' +
        '<a href="' + postLink(p.slug) + '" class="cpl-post-title">' + escHtml(p.title) + '</a>' +
        '<span class="cpl-date">' + formatDate(p.date) + '</span>' +
      '</div>';
    }).join('');

    var paginationHtml = totalPages > 1
      ? '<div class="cpl-pagination">' +
          '<button class="cpl-page-btn" onclick="window._cplGoPage(' + (page - 1) + ')" ' + (page <= 1 ? 'disabled' : '') + '>이전</button>' +
          '<span class="cpl-page-info">' + page + ' / ' + totalPages + '</span>' +
          '<button class="cpl-page-btn" onclick="window._cplGoPage(' + (page + 1) + ')" ' + (page >= totalPages ? 'disabled' : '') + '>다음</button>' +
        '</div>'
      : '';

    container.innerHTML =
      '<div class="category-post-list">' +
        '<div class="cpl-header">' +
          '<span class="cpl-title">이 블로그 <strong>' + escHtml(post.category) + '</strong> 카테고리 글</span>' +
          '<a href="' + catUrl + '" class="cpl-view-all">전체글 보기 (' + total + ')</a>' +
        '</div>' +
        '<div class="cpl-list">' + itemsHtml + '</div>' +
        paginationHtml +
        '<div class="cpl-back"><a href="' + listUrl + '">← 목록으로</a></div>' +
      '</div>';
  }

  window._cplGoPage = function(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderPage(page);
  };

  renderPage(currentPage);
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
