import { useEffect } from 'react';

/**
 * Hook to apply smooth scroll-reveal animations to elements with `.reveal-on-scroll`
 * Uses pure DOM IntersectionObserver to prevent any React state re-renders during scroll.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    // Immediately reveal elements already in viewport on mount
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Reveal once and stay revealed
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
