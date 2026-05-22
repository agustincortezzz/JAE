const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

if (header && hero) {
  const updateHeader = () => {
    header.classList.toggle('header--past-hero', window.scrollY >= hero.offsetHeight);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
  updateHeader();
}
