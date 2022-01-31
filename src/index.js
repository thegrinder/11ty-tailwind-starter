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

    u('#color-mode-button').first().onclick = () => {
      localStorage.setItem(
        'theme',
        u('#color-mode-button').hasClass(darkModeClass)
          ? undefined
          : darkModeClass
      );
      u('html').toggleClass(darkModeClass);
    };
  };

  const markActiveLink = () => {
    const navLinks = [
      {
        id: '#home',
        href: '/',
      },
      {
        id: '#blog',
        href: '/blog/',
      },
    ];
    const activeLink = navLinks.find(({ href }) => href === location.pathname);
    u(activeLink.id).addClass('text-sky-500 dark:text-sky-300');
  };

  const removeIntro = () => {
    const min = 1000 * 60;
    if (
      !localStorage.introTimestamp ||
      Date.now() - localStorage.introTimestamp > 10 * min
    ) {
      localStorage.setItem('introTimestamp', Date.now());
      setTimeout(() => {
        u('#intro').remove();
      }, 2000);
    } else {
      u('#intro').remove();
    }
  };

  initializeColorMode();
  markActiveLink();
  removeIntro();
});
