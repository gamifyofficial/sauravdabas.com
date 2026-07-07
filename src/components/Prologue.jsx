import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { scrollToEl } from '../story/smoothScroll';

const stats = [
  { value: 37000, label: 'Users reached', format: (n) => `${Math.round(n).toLocaleString('en-US')}+` },
  { value: 6, label: 'Products shipped', format: (n) => `${Math.round(n)}` },
  { value: 10, label: 'Social reach', format: (n) => `${Math.round(n)}M+` },
  { value: 5, label: 'Years building', format: (n) => `${Math.round(n)}+` },
];

// Opening scene — the cinematic video hero. Entrances are the CSS fade-rise
// stagger; GSAP only handles the odometer count-up on the stats.
const Prologue = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      el.querySelectorAll('[data-count]').forEach((node, i) => {
        const stat = stats[i];
        const counter = { v: 0 };
        gsap.to(counter, {
          v: stat.value,
          duration: 1.8,
          delay: 0.6 + i * 0.12,
          ease: 'power2.out',
          onUpdate: () => {
            node.textContent = stat.format(counter.v);
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="chapter prologue" id="prologue" data-chapter ref={ref}>
      <div className="ch-inner prologue-inner">
        <p className="hero-eyebrow animate-fade-rise">A story in five chapters</p>

        <h1 className="hero-title animate-fade-rise">
          Every <em>product</em> is
          <br />a <em>chapter.</em>
        </h1>

        <p className="hero-sub animate-fade-rise-delay">
          I&apos;m Saurav Dabas — solo founder of Gamifytech Solutions. For five years
          I&apos;ve been writing the same story in different inks: imagine a product,
          build it alone, ship it, and scale it. This site is that story.
        </p>

        <a
          className="hero-cta liquid-glass animate-fade-rise-delay-2"
          href="#hustle"
          onClick={(e) => {
            e.preventDefault();
            scrollToEl('#hustle');
          }}
        >
          Begin the Story
        </a>

        <div className="prologue-stats animate-fade-rise-delay-2">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value" data-count>
                {stat.format(stat.value)}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="scroll-cue"
        onClick={() => scrollToEl('#hustle')}
        aria-label="Scroll to chapter one"
      >
        <span>Begin</span>
        <ArrowDown size={16} aria-hidden="true" />
      </button>
    </section>
  );
};

export default Prologue;
