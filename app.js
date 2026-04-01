// app.js - 홈페이지 로직

const PER_PAGE = 6; // 한 페이지당 글 수
let currentPage = 1;
let filteredPosts = [...POSTS].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
let activeFilter = null;
let activeTag = null;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // URL 파라미터로 태그 필터 처리 (post.js에서 태그 클릭 시)
  const params = new URLSearchParams(window.location.search);
  const tagParam = params.get("tag");
  if (tagParam) {
    filterTag(tagParam);
  } else {
    renderHashtags();
    renderPosts();
  }
  setupSearch();
});

// ── 썸네일 경로 보정 ──────────────────────────────────────────
// path-resolver.js의 getThumbPath() 를 사용합니다 (로컬/GitHub 자동 감지)

// ── HASHTAGS ──────────────────────────────────────────────────
function renderHashtags() {
  const tagCount = {};
  POSTS.forEach((p) =>
    p.tags.forEach((t) => {
      tagCount[t] = (tagCount[t] || 0) + 1;
    }),
  );
  const sorted = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
  const container = document.getElementById("hashtagList");
  if (!container) return;
  container.innerHTML = sorted
    .map(
      ([tag, cnt]) =>
        `<span class="hashtag" onclick="filterTag('${tag}')">#${tag} <small style="opacity:.6">${cnt}</small></span>`,
    )
    .join("");
}

// ── FILTER ────────────────────────────────────────────────────
function filterCat(cat) {
  activeFilter = cat;
  activeTag = null;
  currentPage = 1;
  document
    .querySelectorAll(".hashtag")
    .forEach((h) => h.classList.remove("active"));
  document
    .querySelectorAll(".cat-list li a")
    .forEach((a) => a.classList.remove("active"));
  if (cat) {
    document.querySelectorAll(".cat-list li a").forEach((a) => {
      if (
        a.getAttribute("onclick") &&
        a.getAttribute("onclick").includes(`'${cat}'`)
      ) {
        a.classList.add("active");
      }
    });
  }

  filteredPosts = POSTS.filter(
    (p) =>
      !cat ||
      p.category === cat ||
      p.category.startsWith(cat + "/") ||
      p.tags.includes(cat),
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  const bar = document.getElementById("filterBar");
  if (cat) {
    bar.style.display = "flex";
    document.getElementById("filterLabel").textContent =
      `카테고리: ${cat} (${filteredPosts.length}개)`;
  } else {
    bar.style.display = "none";
  }
  renderHashtags();
  renderPosts();
}

function filterTag(tag) {
  activeTag = tag;
  activeFilter = null;
  currentPage = 1;

  filteredPosts = POSTS.filter((p) => p.tags.includes(tag)).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  renderHashtags();
  document.querySelectorAll(".hashtag").forEach((h) => {
    h.classList.toggle("active", h.textContent.startsWith("#" + tag));
  });
  document
    .querySelectorAll(".cat-list li a")
    .forEach((a) => a.classList.remove("active"));

  const bar = document.getElementById("filterBar");
  bar.style.display = "flex";
  document.getElementById("filterLabel").textContent =
    `태그: #${tag} (${filteredPosts.length}개)`;
  renderPosts();
}

// ── RENDER POSTS ──────────────────────────────────────────────
function renderPosts() {
  const container = document.getElementById("postList");
  const start = (currentPage - 1) * PER_PAGE;
  const page = filteredPosts.slice(start, start + PER_PAGE);

  if (filteredPosts.length === 0) {
    container.innerHTML = `<div class="no-results"><div class="nr-icon">🔍</div>검색 결과가 없습니다.</div>`;
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  container.innerHTML = page
    .map((p, i) => {
      const thumbPath = getThumbPath(p);
      return `
    <div class="post-card" style="animation-delay:${i * 0.05}s" onclick="goPost('${p.slug}')">
      <div class="post-card-thumb">
        ${
          thumbPath
            ? `<img src="${thumbPath}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\"thumb-placeholder\\">${getCatEmoji(p.category)}</span>'" />`
            : `<span class="thumb-placeholder">${getCatEmoji(p.category)}</span>`
        }
      </div>
      <div class="post-card-body">
        <div class="post-card-meta">
          <span class="post-cat-badge">${p.category}</span>
          <span class="post-date">${formatDate(p.date)}</span>
        </div>
        <div class="post-card-title">${p.title}</div>
        <div class="post-card-summary">${p.summary || ""}</div>
        <div class="post-card-tags">
          ${p.tags.map((t) => `<span class="post-tag">#${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
    })
    .join("");

  renderPagination();
}

function renderPagination() {
  const total = Math.ceil(filteredPosts.length / PER_PAGE);
  if (total <= 1) {
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  // 현재 페이지 그룹 (10개씩 묶음)
  const GROUP = 10;
  const groupStart = Math.floor((currentPage - 1) / GROUP) * GROUP + 1;
  const groupEnd = Math.min(groupStart + GROUP - 1, total);

  let html = "";
  // 처음/이전 그룹
  html += `<button class="page-btn" onclick="goPage(1)" ${currentPage === 1 ? "disabled" : ""} title="처음">«</button>`;
  html += `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>‹</button>`;

  for (let i = groupStart; i <= groupEnd; i++) {
    html += `<button class="page-btn ${i === currentPage ? "active" : ""}" onclick="goPage(${i})">${i}</button>`;
  }

  // 다음 그룹/마지막
  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === total ? "disabled" : ""}>›</button>`;
  html += `<button class="page-btn" onclick="goPage(${total})" ${currentPage === total ? "disabled" : ""} title="마지막">»</button>`;

  document.getElementById("pagination").innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  renderPosts();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goPost(slug) {
  window.location.href = `post.html?slug=${slug}`;
}

// ── CATEGORY TOGGLE ───────────────────────────────────────────
function toggleCat(btn) {
  const list = btn.nextElementSibling;
  btn.classList.toggle("collapsed");
  list.classList.toggle("closed");
}

// ── SEARCH ────────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.classList.remove("open");
      return;
    }

    const found = POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.summary || "").toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q),
    ).slice(0, 6);

    if (!found.length) {
      results.innerHTML = `<div class="search-result-item"><div class="sr-title">검색 결과 없음</div></div>`;
    } else {
      results.innerHTML = found
        .map(
          (p) => `
        <div class="search-result-item" onclick="goPost('${p.slug}')">
          <div class="sr-title">${highlight(p.title, q)}</div>
          <div class="sr-meta">${p.category} · ${formatDate(p.date)}</div>
        </div>
      `,
        )
        .join("");
    }
    results.classList.add("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) results.classList.remove("open");
  });
}

function doSearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!q) return;
  filteredPosts = POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      (p.summary || "").toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  ).sort((a, b) => new Date(b.date) - new Date(a.date));
  activeFilter = null;
  activeTag = null;
  currentPage = 1;
  const bar = document.getElementById("filterBar");
  bar.style.display = "flex";
  document.getElementById("filterLabel").textContent =
    `"${q}" 검색 결과 (${filteredPosts.length}개)`;
  document.getElementById("searchResults").classList.remove("open");
  renderPosts();
}

// ── HELPERS ───────────────────────────────────────────────────
function formatDate(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${y}.${m}.${day}`;
}

function highlight(text, q) {
  return text.replace(
    new RegExp(q, "gi"),
    (s) =>
      `<mark style="background:var(--accent-light);color:var(--accent)">${s}</mark>`,
  );
}

function getCatEmoji(cat) {
  const map = {
    "Backend/Java": "☕",
    "Backend/Spring Boot": "🌱",
    "Backend/Python": "🐍",
    "Backend/API & Architecture": "🔗",
    "Backend/Testing": "🧪",
    "Cloud/OpenStack": "🏗️",
    "Cloud/AWS": "☁️",
    "Cloud/Docker": "🐳",
    "Cloud/Kubernetes": "⚙️",
    "Search/Elasticsearch": "🔍",
    "Search/Kafka": "📨",
    "Linux/Administration": "🐧",
    "Linux/Troubleshooting": "🔧",
    "Security": "🔒",
    "IoT/RaspberryPi": "🍓",
    "DevTools": "🛠️",
    "DevOps/Ansible": "🤖",
    "Frontend/React": "⚛️",
    "Database": "🐬",
    "Network": "🌐",
    "AI": "🤖",
    "Life": "📖",
  };
  return map[cat] || "📝";
}
