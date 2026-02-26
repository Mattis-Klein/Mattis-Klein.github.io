
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
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
