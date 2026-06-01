'use client';

const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-stagger';
const WATCHED_ATTR = 'data-reveal-watched';

const activateImmediately = () => {
  document.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
    el.classList.add('active');
    el.querySelectorAll<HTMLElement>('.reveal-child').forEach((child) => {
      child.classList.add('active');
    });
  });
};

const clearWatchedMarkers = () => {
  document.querySelectorAll<HTMLElement>(`[${WATCHED_ATTR}]`).forEach((el) => {
    el.removeAttribute(WATCHED_ATTR);
  });
};

export const initScrollReveal = () => {
  if (typeof window === 'undefined') return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    activateImmediately();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        el.classList.add('active');

        const children = el.querySelectorAll<HTMLElement>('.reveal-child');
        children.forEach((child, i) => {
          child.style.transitionDelay = `${0.06 + i * 0.09}s`;
          child.classList.add('active');
        });

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.07,
      rootMargin: '-24px 0px',
    },
  );

  document.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
    if (el.hasAttribute(WATCHED_ATTR)) return;
    el.setAttribute(WATCHED_ATTR, '');
    observer.observe(el);
  });

  return () => {
    observer.disconnect();
    clearWatchedMarkers();
  };
};
