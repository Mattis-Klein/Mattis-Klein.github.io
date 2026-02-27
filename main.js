
(function(){
  // Mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === page){
      a.classList.add('active');
    }
  });

  // Scroll-to-top button
  const scrollBtn = document.querySelector('.scroll-top');
  if(scrollBtn){
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll fade-in animations
  const fadeEls = document.querySelectorAll('.fade-up');
  if(fadeEls.length && 'IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => io.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('in-view'));
  }
})();

function fakeSubmit(e){
  e.preventDefault();
  const form = e.target;
  const occasion = form.querySelector('#occasion')?.value || '';
  const format = form.querySelector('#format')?.value || 'word';
  const msg = document.createElement('div');
  msg.className = 'note';
  msg.innerHTML = `<h3>Order received (demo)</h3>
    <p>Occasion: <strong>${escapeHtml(occasion)}</strong></p>
    <p>Format: <strong>${format === 'pdf' ? 'Designed PDF (+$25)' : 'Word document'}</strong></p>
    <p class="fineprint">This is a static demo site. Next step is wiring this form to email / Google Forms / a backend.</p>`;
  form.parentNode.insertBefore(msg, form);
  form.scrollIntoView({behavior:'smooth', block:'start'});
  form.reset();
  return false;
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[m]));
}
