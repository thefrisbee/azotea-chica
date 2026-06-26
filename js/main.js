document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Nav: transparent → dark on scroll
  const onScroll = () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });

  // Lote detail expand/collapse
  document.querySelectorAll('.lote-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const detail = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const nextState = !isOpen;

      btn.setAttribute('aria-expanded', nextState);
      detail.hidden = !nextState;

      const key = nextState ? btn.dataset.keyClose : btn.dataset.keyOpen;
      btn.textContent = translations[currentLang][key];
    });
  });

  // Contact form feedback (for non-Formspree fallback)
  const form = document.getElementById('contact-form');
  const notice = document.getElementById('form-notice');
  if (form) {
    form.addEventListener('submit', async (e) => {
      const action = form.getAttribute('action');
      if (action.includes('XXXXXXXX')) {
        // Formspree not yet configured — just show notice
        e.preventDefault();
        notice.hidden = false;
        form.reset();
      }
      // Otherwise let Formspree handle the POST
    });
  }

  // Smooth scroll — override for browsers that don't support CSS scroll-behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
