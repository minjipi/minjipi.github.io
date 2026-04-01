// sidebar.js - 공통 사이드바 컴포넌트
// index.html: filterCat() 함수로 동작 / about.html: index.html?cat= 링크로 동작

(function () {
  const CATEGORIES = [
    {
      label: "Database",
      children: [{ cat: "Database" }],
    },
    {
      label: "Network",
      children: [{ label: "Network", cat: "Network" }],
    },
    {
      label: "Backend",
      children: [
        { label: "Java / Kotlin", cat: "Backend/Java" },
        { label: "Spring Boot", cat: "Backend/Spring Boot" },
        { label: "Python / Django", cat: "Backend/Python" },
        { label: "API &amp; Architecture", cat: "Backend/API & Architecture" },
        { label: "테스트", cat: "Backend/Testing" },
      ],
    },
    {
      label: "Cloud &amp; Infrastructure",
      children: [
        { label: "OpenStack", cat: "Cloud/OpenStack" },
        { label: "AWS", cat: "Cloud/AWS" },
        { label: "Docker", cat: "Cloud/Docker" },
        { label: "Kubernetes", cat: "Cloud/Kubernetes" },
        { label: "Elasticsearch", cat: "Search/Elasticsearch" },
        { label: "Kafka / Zookeeper", cat: "Search/Kafka" },
      ],
    },
    {
      label: "🐧 Linux &amp; Systems",
      children: [
        { label: "Linux Administration", cat: "Linux/Administration" },
        { label: "System Troubleshooting", cat: "Linux/Troubleshooting" },
      ],
    },
    {
      label: "🔒 Security",
      children: [{ label: "Web &amp; Network Security", cat: "Security" }],
    },
    {
      label: "DevTools &amp; Tips",
      children: [
        { label: "Environment &amp; Tools", cat: "DevTools" },
        { label: "Ansible", cat: "DevOps/Ansible" },
      ],
    },
    {
      label: "IoT &amp; Hardware",
      children: [{ label: "Raspberry Pi", cat: "IoT/RaspberryPi" }],
    },
    {
      label: "Frontend",
      children: [{ label: "React", cat: "Frontend/React" }],
    },
    {
      label: "AI",
      children: [{ label: "AI 활용 &amp; 팁", cat: "AI" }],
    },
    {
      label: "📖 Life &amp; Logs",
      children: [{ label: "Retrospective", cat: "Life" }],
    },
  ];

  function buildSidebar() {
    const isIndex = typeof filterCat === "function";
    const chevronSVG = `<svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;

    const groups = CATEGORIES.map(({ label, children }) => {
      // children이 1개면 label 자체를 클릭 가능한 링크로 렌더링
      if (children.length === 1) {
        const { cat } = children[0];
        const onclick = isIndex
          ? `filterCat('${cat}'); return false;`
          : null;
        const href = isIndex ? "#" : `index.html?cat=${encodeURIComponent(cat)}`;
        return `
        <div class="cat-group">
          <a href="${href}" class="cat-toggle cat-toggle-link" ${onclick ? `onclick="${onclick}"` : ""}>
            ${label}
          </a>
        </div>`;
      }

      const items = children
        .map(({ label: lbl, cat }) => {
          const link = isIndex
            ? `<a href="#" onclick="filterCat('${cat}'); return false;">${lbl}</a>`
            : `<a href="index.html?cat=${encodeURIComponent(cat)}">${lbl}</a>`;
          return `<li>${link}</li>`;
        })
        .join("");

      return `
        <div class="cat-group">
          <button class="cat-toggle" onclick="toggleCat(this)">
            ${chevronSVG}
            ${label}
          </button>
          <ul class="cat-list open">${items}</ul>
        </div>`;
    }).join("");

    const allLink = isIndex
      ? `<a href="#" class="cat-all" onclick="filterCat(null); return false;">전체 글 보기</a>`
      : `<a href="index.html" class="cat-all">전체 글 보기</a>`;

    return `
      <nav class="category-nav">
        <div class="sidebar-section-title">카테고리</div>
        <div class="cat-group cat-intro">
          <a href="about.html" class="cat-intro-link">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Intro
          </a>
        </div>
        ${groups}
        ${allLink}
      </nav>
      <div class="hashtag-section">
        <div class="sidebar-section-title">태그</div>
        <div class="hashtag-list" id="hashtagList"></div>
      </div>`;
  }

  function renderHashtags() {
    if (typeof POSTS === "undefined") return;
    const tagCount = {};
    POSTS.forEach((p) =>
      p.tags.forEach((t) => {
        tagCount[t] = (tagCount[t] || 0) + 1;
      }),
    );
    const sorted = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
    const container = document.getElementById("hashtagList");
    if (!container) return;

    const isIndex = typeof filterCat === "function";
    container.innerHTML = sorted
      .map(([tag, cnt]) =>
        isIndex
          ? `<span class="hashtag" onclick="filterTag('${tag}')">#${tag} <small style="opacity:.6">${cnt}</small></span>`
          : `<a href="index.html?tag=${tag}" class="hashtag" style="text-decoration:none;">#${tag} <small style="opacity:.6">${cnt}</small></a>`,
      )
      .join("");
  }

  function toggleCat(btn) {
    btn.classList.toggle("collapsed");
    btn.nextElementSibling.classList.toggle("closed");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.innerHTML = buildSidebar();
    if (typeof POSTS !== "undefined") renderHashtags();
  });

  // toggleCat을 전역으로 노출 (HTML의 onclick에서 호출)
  window.toggleCat = toggleCat;
})();
