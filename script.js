const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const menuToggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.nav');

if (header && hero) {
  const updateHeader = () => {
    header.classList.toggle('header--past-hero', window.scrollY >= hero.offsetHeight);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
  updateHeader();
}

if (header && menuToggle && nav) {
  const closeMenu = () => {
    header.classList.remove('header--menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir men\u00fa');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    header.classList.add('header--menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Cerrar men\u00fa');
    document.body.style.overflow = 'hidden';
  };

  menuToggle.addEventListener('click', () => {
    if (header.classList.contains('header--menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
}
