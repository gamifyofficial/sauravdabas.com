import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Chapter from './Chapter';

const manifesto =
  'I architect, build, market, and scale — every product, end to end. No team. No safety net. Just shipping.';

// Chapter II — the decision. A scroll-scrubbed manifesto lights up word by
// word as the reader moves through the scene.
const ChapterLeap = () => {
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        el.querySelectorAll('.word'),
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 78%',
            end: 'top 32%',
            scrub: true,
          },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <Chapter
      id="leap"
      numeral="II"
      kicker="Chapter II · 2023"
      title={['Then I left the', 'lecture hall.']}
      lede="Halfway through an M.A. in Economics at the Delhi School of Economics, the
        pull of building became stronger than the pull of studying it. I walked away
        and incorporated Gamifytech Solutions Private Limited — a company of exactly
        one person."
    >
      <blockquote className="manifesto" data-reveal ref={quoteRef}>
        {manifesto.split(' ').map((word, i) => (
          <span className="word" key={`${word}-${i}`}>
            {word}{' '}
          </span>
        ))}
      </blockquote>
    </Chapter>
  );
};

export default ChapterLeap;
