import { useEffect } from 'react';

/**
 * Custom hook to trigger performant, GPU-accelerated reveal animations
 * as sections and cards enter the viewport, with full respect for prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-card');

      if (prefersReducedMotion) {
        elements.forEach((el) => el.classList.add('is-revealed'));
        return () => {};
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      elements.forEach((el) => {
        // If element is already in viewport on load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    };

    const cleanup = revealElements();

    // Re-check when user interacts or content changes
    const timer = setTimeout(revealElements, 400);

    return () => {
      clearTimeout(timer);
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);
}

export default useScrollReveal;
