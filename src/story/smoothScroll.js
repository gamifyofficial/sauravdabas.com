// Shared handle to the Lenis instance so any component can smooth-scroll
// to an anchor without prop-drilling. Falls back to native scrolling when
// Lenis is disabled (reduced motion).

let lenis = null;

export const setLenis = (instance) => {
  lenis = instance;
};

export const getLenis = () => lenis;

export const scrollToEl = (target) => {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.6 });
  } else {
    el.scrollIntoView({ behavior: 'auto' });
  }
};
