const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');

if (menuButton && menu) {
  function setMenuOpen(open) {
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });
}
