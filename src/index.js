import u from 'umbrellajs';

window.addEventListener('DOMContentLoaded', () => {
  const initializeColorMode = () => {
    const darkModeClass = 'dark';
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
      if (u('html').hasClass(darkModeClass)) {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', 'dark');
      }
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
    setTimeout(() => {
      u('#intro').remove();
    }, 2000);
  };

  const fadeInOnScroll = () => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !u(entry.target).hasClass('fade-in')) {
          u(entry.target).addClass('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    const workCards = u('#work-item');
    workCards.addClass('opacity-0');
    workCards.each((workCard) => observer.observe(workCard));
  };

  const init = () => {
    initializeColorMode();
    markActiveLink();
    removeIntro();
    fadeInOnScroll();
  };

  init();
});
