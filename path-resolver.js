// path-resolver.js
// 로컬(file:// 또는 localhost)과 GitHub Pages 경로를 자동으로 감지합니다.
// GitHub Pages URL: https://minjipi.github.io/
// 로컬 URL: file:///... 또는 http://localhost:...

(function () {
  const GITHUB_REPO = "minjipi.github.io"; // GitHub Pages 레포 이름

  function detectBaseURL() {
    const { protocol, hostname, pathname } = window.location;

    // GitHub Pages
    if (hostname === GITHUB_REPO || hostname.endsWith(".github.io")) {
      // 레포 이름이 서브경로인 경우 (예: username.github.io/repo-name/)
      // 이 경우는 username.github.io 자체이므로 루트
      return "https://" + hostname + "/";
    }

    // 로컬 파일 또는 localhost
    // pathname 기준으로 프로젝트 루트 추정
    if (protocol === "file:") {
      // file:///Users/.../minjipi.github.io/index.html
      // → file:///Users/.../minjipi.github.io/
      const parts = pathname.split("/");
      const repoIdx = parts.findIndex((p) => p === GITHUB_REPO);
      if (repoIdx !== -1) {
        return "file:///" + parts.slice(1, repoIdx + 1).join("/") + "/";
      }
      // 찾지 못하면 현재 폴더 기준
      return pathname.substring(0, pathname.lastIndexOf("/") + 1);
    }

    // localhost / 127.0.0.1 등
    return protocol + "//" + hostname + (window.location.port ? ":" + window.location.port : "") + "/";
  }

  const BASE_URL = detectBaseURL();

  /**
   * 상대경로를 환경에 맞는 절대경로로 변환
   * @param {string} relativePath  예) "posts/slug/images/image_1.jpg"
   * @returns {string}
   */
  function resolvePath(relativePath) {
    if (!relativePath) return "";
    // 이미 절대경로면 그대로
    if (relativePath.startsWith("http://") || relativePath.startsWith("https://") || relativePath.startsWith("file:///")) {
      return relativePath;
    }
    // 앞의 ./ 제거
    const clean = relativePath.replace(/^\.\//, "");
    return BASE_URL + clean;
  }

  /**
   * slug로 게시글 본문 HTML 경로 반환
   * @param {string} slug
   * @returns {string}
   */
  function postContentPath(slug) {
    return resolvePath(`posts/${slug}/index.html`);
  }

  /**
   * 게시글 썸네일 경로 반환
   * @param {Object} post  POSTS 배열 아이템
   * @returns {string|null}
   */
  function getThumbPath(post) {
    if (!post.thumb) return null;
    if (post.thumb.startsWith("http") || post.thumb.startsWith("file:")) return post.thumb;
    // "posts/slug/images/image_1.jpg" 형태이거나 "images/image_1.jpg" 형태
    if (post.thumb.startsWith("posts/")) {
      return resolvePath(post.thumb);
    }
    // "images/image_1.jpg" → "posts/{slug}/images/image_1.jpg"
    return resolvePath(`posts/${post.slug}/${post.thumb}`);
  }

  // 전역 노출
  window.BASE_URL = BASE_URL;
  window.resolvePath = resolvePath;
  window.postContentPath = postContentPath;
  window.getThumbPath = getThumbPath;

  console.log("[PathResolver] BASE_URL:", BASE_URL);
})();
