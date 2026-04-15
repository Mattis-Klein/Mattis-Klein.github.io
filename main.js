
(function () {
  // Mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Active nav link (supports both /page and /page.html URLs)
  const rawPath = location.pathname.replace(/\/$/, '');
  const page = rawPath.split('/').pop() || 'index';
  const pageSlug = page.replace(/\.html$/i, '') || 'index';

  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hrefSlug = href === '/' ? 'index' : href.replace(/^\//, '').replace(/\.html$/i, '');

    if (hrefSlug === pageSlug) {
      a.classList.add('active');
    }
  });

  // Scroll-to-top button
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll fade-in animations
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => io.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('in-view'));
  }
})();
