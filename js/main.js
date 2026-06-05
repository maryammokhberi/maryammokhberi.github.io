const IS_SUBPAGE = window.location.pathname.includes('/pages/');
const ROOT = IS_SUBPAGE ? '../' : './';
const LANDING = ROOT + 'index.html';

// LOGO: Option A - wave sweep + stars
const LOGO_HTML = `
<a href="${LANDING}" class="nav-logo" aria-label="Maryam Mokhberi home">
  <svg width="118" height="38" viewBox="0 0 118 38" xmlns="http://www.w3.org/2000/svg">
    <path d="M4,28 C8,17 14,13 20,20 C24,26 28,13 32,17" stroke="#0e2040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M4,34 C9,25 16,21 22,27 C26,32 30,19 36,23" stroke="#0e2040" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.32"/>
    <circle cx="32" cy="11" r="1.4" fill="#0e2040"/>
    <circle cx="25" cy="7"  r="0.9" fill="#0e2040" opacity="0.52"/>
    <circle cx="38" cy="16" r="0.7" fill="#0e2040" opacity="0.38"/>
    <text x="48" y="16" font-family="'Cormorant Garamond',Georgia,serif" font-size="8" font-weight="400" letter-spacing="2.8" fill="#1C1C1E" dominant-baseline="middle">MARYAM</text>
    <text x="48" y="28" font-family="'Cormorant Garamond',Georgia,serif" font-size="8" font-weight="400" letter-spacing="2.8" fill="#1C1C1E" dominant-baseline="middle">MOKHBERI</text>
  </svg>
</a>`;

// WAVE NAV ACCENT: curvy separator replacing the straight border
const NAV_WAVE = `
<div class="nav-wave" aria-hidden="true">
  <svg viewBox="0 0 1440 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0,4 C180,1 360,8 540,4 C720,0 900,7 1080,4 C1260,1 1380,6 1440,4 L1440,10 L0,10 Z" fill="rgba(14,32,64,0.28)"/>
    <path d="M0,6 C240,2 480,9 720,5 C960,1 1200,8 1440,5 L1440,10 L0,10 Z" fill="rgba(14,32,64,0.20)"/>
    <path d="M0,8 C360,5 720,10 1080,7 C1260,5.5 1380,9 1440,7 L1440,10 L0,10 Z" fill="rgba(14,32,64,0.13)"/>
  </svg>
</div>`;

// ── WAVE FOOTER ──
const WAVE_SVG = `
<div class="wave-footer">
  <svg viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0,55 C180,20 360,85 540,55 C720,25 900,80 1080,52 C1260,24 1380,68 1440,52 L1440,110 L0,110 Z" fill="rgba(14,32,64,0.07)"/>
    <path d="M0,68 C200,38 380,90 600,62 C820,34 1000,82 1200,58 C1320,44 1390,72 1440,62 L1440,110 L0,110 Z" fill="rgba(14,32,64,0.12)"/>
    <path d="M0,80 C240,58 480,95 720,75 C960,55 1200,90 1440,75 L1440,110 L0,110 Z" fill="rgba(14,32,64,0.18)"/>
  </svg>
</div>`;

const NAV_HTML = `
<nav class="main-nav" id="main-nav">
  <div class="nav-inner">
    ${LOGO_HTML}
    <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="${ROOT}home.html" data-page="home">Home</a></li>
      <li><a href="${ROOT}pages/research.html" data-page="research">Projects</a></li>
      <li><a href="${ROOT}pages/publications.html" data-page="publications">Publications</a></li>
      <li><a href="${ROOT}pages/teaching.html" data-page="teaching">Experience</a></li>
      <li><a href="${ROOT}pages/blog.html" data-page="blog">Blog</a></li>
      <li><a href="${ROOT}pages/contact.html" data-page="contact">Contact</a></li>
    </ul>
  </div>
  ${NAV_WAVE}
</nav>`;

const FOOTER_HTML = `
${WAVE_SVG}
<footer>
  <div class="footer-inner">
    <span class="footer-copy">© 2026 Maryam Mokhberi &nbsp;·&nbsp; University of Toronto</span>
    <div class="footer-links">
      <a href="mailto:maryam@cs.toronto.edu">Email</a>
      <a href="https://www.linkedin.com/in/maryam-mokhberi-374abb60/" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/MaryamMokhberi_" target="_blank">X</a>
      <a href="https://github.com/maryammokhberi" target="_blank">GitHub</a>
    </div>
  </div>
</footer>`;

function injectChrome() {
  const ph = document.getElementById('nav-placeholder');
  if (ph) ph.outerHTML = NAV_HTML;
  const fp = document.getElementById('footer-placeholder');
  if (fp) fp.outerHTML = FOOTER_HTML;

  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  const hb = document.getElementById('hamburger');
  const nl = document.getElementById('nav-links');
  if (hb && nl) hb.addEventListener('click', () => nl.classList.toggle('open'));

  // Inject subtle wave divider below nav on inner pages (not home)
  const pageWrapEl = document.querySelector('.page-wrap');
  if (pageWrapEl) {
    const waveDiv = document.createElement('div');
    waveDiv.className = 'page-wave-divider';
    waveDiv.innerHTML = `<svg viewBox="0 0 1440 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,16 C360,32 720,0 1080,16 C1260,24 1380,10 1440,16 L1440,32 L0,32 Z" fill="rgba(14,32,64,0.07)"/>
      <path d="M0,22 C240,10 480,28 720,18 C960,8 1200,26 1440,20 L1440,32 L0,32 Z" fill="rgba(14,32,64,0.05)"/>
    </svg>`;
    const pageIntro = pageWrapEl.querySelector('.page-intro');
    if (pageIntro) pageIntro.after(waveDiv);
    else pageWrapEl.prepend(waveDiv);
  }
}

function initFadeIns() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

function renderBlogCards(id, limit = null) {
  const el = document.getElementById(id);
  if (!el || typeof BLOG_POSTS === 'undefined') return;
  const posts = getAllPosts();
  const shown = limit ? posts.slice(0, limit) : posts;
  el.innerHTML = shown.map(p => `
    <a class="post-list-item fade-in" href="${ROOT}pages/post.html?id=${p.id}">
      <div class="pli-meta">
        <span>${p.date}</span>
        <span class="pli-cat">${p.category}</span>
        <span>${p.readTime}</span>
      </div>
      <div class="pli-title">${p.title}</div>
      <div class="pli-excerpt">${p.excerpt}</div>
    </a>`).join('');
  initFadeIns();
}

function renderPost() {
  const id = new URLSearchParams(window.location.search).get('id');
  const el = document.getElementById('post-container');
  if (!el || typeof BLOG_POSTS === 'undefined') return;
  const post = getPostById(id);
  if (!post) { el.innerHTML = `<div class="post-page"><p>Post not found. <a href="${ROOT}pages/blog.html">Back to Blog</a></p></div>`; return; }
  document.title = `${post.title} | Maryam Mokhberi`;
  el.innerHTML = `
    <div class="post-page">
      <div class="post-page-meta">
        <span>${post.date}</span>
        <span class="post-page-cat">${post.category}</span>
        <span>${post.readTime}</span>
      </div>
      <h1>${post.title}</h1>
      <div class="post-body">${post.content}</div>
      <div class="post-back"><a href="${ROOT}pages/blog.html">← Back to Blog</a></div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  injectChrome();
  initFadeIns();
  if (document.getElementById('home-blog-container')) renderBlogCards('home-blog-container', 2);
  if (document.getElementById('blog-cards-container')) renderBlogCards('blog-cards-container');
  if (document.getElementById('post-container')) renderPost();
});
