document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const body = document.body;

  if (!hamburger || !nav) return;
   const closeMenu = () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  };


  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    body.classList.toggle('menu-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  // close when clicking/touching outside nav or hamburger
  ['click', 'touchstart', 'pointerdown'].forEach(evt => {
    document.addEventListener(evt, (e) => {
      // ignore events that originate from the nav or hamburger
      if (nav.contains(e.target) || hamburger.contains(e.target)) return;
      closeMenu();
    }, { passive: true });



  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('active');
      body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    };
  });


 
});