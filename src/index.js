import u from 'umbrellajs';

window.addEventListener('DOMContentLoaded', () => {
  const darkModeClass = 'dark';

  const initializeColorMode = () => {
    if (
      localStorage.theme === darkModeClass ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      u('html').addClass(darkModeClass);
    } else {
      u('html').removeClass(darkModeClass);
    }
  };

  const addColorModeListener = () => {
    u('#color-mode-button').first().onclick = () => {
      u('html').toggleClass('dark');
    };
  };

  initializeColorMode();
  addColorModeListener();
});
