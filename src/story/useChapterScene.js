import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Standard cinematic entrance for a chapter: masked headline lines rise,
// supporting elements fade up, and the giant numeral drifts in parallax.
// Under prefers-reduced-motion nothing is hidden and nothing moves.
export default function useChapterScene(ref) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const lines = el.querySelectorAll('.line-in');
      const reveals = el.querySelectorAll('[data-reveal]');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 72%',
          once: true,
        },
      });
      if (lines.length) {
        tl.fromTo(
          lines,
          { yPercent: 112 },
          { yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: 0.09 }
        );
      }
      if (reveals.length) {
        tl.fromTo(
          reveals,
          { y: 34, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 },
          lines.length ? '-=0.75' : 0
        );
      }

      const numeral = el.querySelector('[data-numeral]');
      if (numeral) {
        gsap.fromTo(
          numeral,
          { yPercent: 22 },
          {
            yPercent: -22,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, [ref]);
}
