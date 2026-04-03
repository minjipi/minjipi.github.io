// search-nav.js
// 모든 페이지의 topbar에 검색창을 동적으로 주입합니다.
// posts.js, path-resolver.js 이후에 로드해야 합니다.

(function () {
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function wordMatch(text, q) {
    try {
      return new RegExp('\\b' + escRe(q) + '\\b', 'i').test(text);
    } catch(e) {
      return text.toLowerCase().includes(q);
    }
  }

  function highlight(text, q) {
    return text.replace(new RegExp(escRe(q), 'gi'), function (s) {
      return '<mark style="background:var(--accent-light);color:var(--accent)">' + s + '</mark>';
    });
  }

  function formatDate(d) {
    if (!d) return '';
    var p = d.split('-');
    return p[0] + '.' + p[1] + '.' + p[2];
  }

  function postUrl(slug) {
    return window.IS_LOCAL
      ? (window.BASE_URL || '') + 'post.html?slug=' + slug
      : '/posts/' + slug;
  }

  function postsUrl(qs) {
    var base = window.IS_LOCAL
      ? (window.BASE_URL || '') + 'posts/index.html'
      : '/posts';
    return base + (qs ? '?' + qs : '');
  }

  // ── topbar-right 에 검색창 DOM 삽입 ──────────────────────────
  function injectSearchBar() {
    var topbarRight = document.querySelector('.topbar-right');
    if (!topbarRight) return;

    // 이미 주입된 경우 건너뜀
    if (document.getElementById('searchInput')) return;

    var wrap = document.createElement('div');
    wrap.className = 'search-wrap';
    wrap.innerHTML =
      '<input type="text" id="searchInput" placeholder="검색..." autocomplete="off" />' +
      '<button class="search-btn" id="searchBtn" aria-label="검색">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
        ' stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' +
        '</svg>' +
      '</button>' +
      '<div class="search-results" id="searchResults"></div>';

    // topbar-right 의 첫 자식으로 삽입 (버튼 왼쪽)
    topbarRight.insertBefore(wrap, topbarRight.firstChild);
  }

  // ── 검색 실행 ─────────────────────────────────────────────────
  function doSearch() {
    var input = document.getElementById('searchInput');
    var q = input ? input.value.trim() : '';
    if (!q) return;

    // posts 목록 페이지라면 인페이지 검색 (app.js의 doSearch 호출)
    if (typeof window.appDoSearch === 'function') {
      window.appDoSearch(q);
      return;
    }

    // 다른 페이지라면 posts 페이지로 이동
    window.location.href = postsUrl('q=' + encodeURIComponent(q));
  }

  // ── 이벤트 바인딩 ─────────────────────────────────────────────
  function bindEvents() {
    var input   = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    var btn     = document.getElementById('searchBtn');
    if (!input) return;

    // 돋보기 버튼
    if (btn) btn.addEventListener('click', doSearch);

    // Enter 키
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        results.classList.remove('open');
        doSearch();
      }
    });

    // 실시간 드롭다운
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      if (!q || typeof POSTS === 'undefined') {
        results.classList.remove('open');
        return;
      }

      var found = POSTS.filter(function (p) {
        return wordMatch(p.title, q)
          || wordMatch(p.summary || '', q)
          || p.tags.some(function (t) { return wordMatch(t, q); })
          || wordMatch(p.category, q);
      }).slice(0, 6);

      results.innerHTML = found.length
        ? found.map(function (p) {
            return '<div class="search-result-item" onclick="location.href=\'' + postUrl(p.slug) + '\'">'
              + '<div class="sr-title">' + highlight(p.title, q) + '</div>'
              + '<div class="sr-meta">' + p.category + ' · ' + formatDate(p.date) + '</div>'
              + '</div>';
          }).join('')
        : '<div class="search-result-item"><div class="sr-title">검색 결과 없음</div></div>';

      results.classList.add('open');
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrap')) results.classList.remove('open');
    });
  }

  // ── 초기화 ───────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    injectSearchBar();
    bindEvents();

    // URL ?q= 파라미터로 진입한 경우 검색창에 복원
    var q = new URLSearchParams(window.location.search).get('q');
    if (q) {
      var input = document.getElementById('searchInput');
      if (input) input.value = q;
    }
  });

  // app.js(posts 목록)에서 등록할 수 있도록 전역 노출
  window.navDoSearch = doSearch;
})();
