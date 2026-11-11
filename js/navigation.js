// Felles, tilgjengelig navigasjon for mobil og nettbrett.
(() => {
  document.documentElement.classList.remove('no-js');
  const menu = document.querySelector('#primary-navigation');
  const toggle = document.querySelector('.nav-toggle');
  if (!menu || !toggle) return;

  function setOpen(isOpen) {
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Lukk meny' : 'Åpne meny');
  }

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  const desktop = window.matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', () => setOpen(false));
})();
