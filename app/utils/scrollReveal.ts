'use client';

const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-stagger';

export const initScrollReveal = () => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        el.classList.add('active');

        // Auto-stagger direct .reveal-child descendants
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
    }
  );

  document.querySelectorAll<HTMLElement>(SELECTORS).forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
};
