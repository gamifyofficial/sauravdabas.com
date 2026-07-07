import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Gamepad2,
  Smartphone,
  Search,
  ShoppingBag,
} from 'lucide-react';
import useChapterScene from '../story/useChapterScene';
import { getLenis } from '../story/smoothScroll';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: 'Alova',
    platform: 'iOS · Android · Web',
    icon: Heart,
    stat: '30,000+ users',
    description:
      'The flagship. Flutterflow and Firebase at the core, RevenueCat and AdMob for revenue, self-hosted n8n and the OpenAI API doing the heavy lifting behind the scenes.',
    link: 'https://alova.one',
  },
  {
    title: 'Shaadi AI',
    platform: 'iOS · Android · Web',
    icon: MessageCircle,
    stat: '2,000+ users',
    description:
      'AI-powered wedding platform. OpenAI Vision and Gemini Nano Banana generate the magic; RevenueCat, AdMob and Firebase keep it running.',
    link: 'https://myshaadiai.com',
  },
  {
    title: 'Gamify',
    platform: 'Android',
    icon: Gamepad2,
    stat: '3,000+ users',
    description:
      'The company namesake. Built on Flutterflow with a Firebase backend and AdMob monetization.',
    link: 'https://gamifytechsolutions.com',
  },
  {
    title: 'Qkap',
    platform: 'iOS',
    icon: Smartphone,
    stat: '2,000+ users',
    description:
      'An iOS-first product powered by Flutterflow, Firebase, RevenueCat and the OpenAI Vision API.',
    link: null,
  },
  {
    title: 'FastSEO',
    platform: 'Web app',
    icon: Search,
    stat: 'Live product',
    description:
      'An SEO tool built on Base44 with Dodo payments integrated for friction-free monetization.',
    link: 'https://FastSEO.app',
  },
  {
    title: 'Daily Sale',
    platform: 'E-commerce · Shopify',
    icon: ShoppingBag,
    stat: '10M+ reach',
    description:
      'A Shopify storefront from the reselling era — part of the multi-store operation that reached ten million people.',
    link: 'https://dailysale.in',
  },
];

// Chapter III — a pinned, horizontally-scrubbed gallery on desktop;
// a vertical stack on small screens and under reduced motion.
const ChapterProducts = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useChapterScene(sectionRef);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      const distance = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Tabbing to a clipped card makes the browser scroll the overflow-hidden
      // pin (scrollLeft), which ScrollTrigger never sees — undo it immediately
      // and instead drive the page scroll so the scrub reveals the card.
      const onPinScroll = () => {
        pin.scrollLeft = 0;
        pin.scrollTop = 0;
      };
      const onFocusIn = (e) => {
        pin.scrollLeft = 0;
        const st = tween.scrollTrigger;
        const card = e.target.closest('.product-card, .products-end');
        if (!card || !st) return;
        const progress = Math.min(
          1,
          Math.max(0, (card.offsetLeft - window.innerWidth * 0.15) / Math.max(distance(), 1))
        );
        const y = st.start + progress * (st.end - st.start);
        const lenis = getLenis();
        if (lenis) lenis.scrollTo(y, { duration: 0.5 });
        else window.scrollTo(0, y);
      };
      pin.addEventListener('scroll', onPinScroll);
      track.addEventListener('focusin', onFocusIn);
      return () => {
        pin.removeEventListener('scroll', onPinScroll);
        track.removeEventListener('focusin', onFocusIn);
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="chapter chapter-products" id="products" data-chapter ref={sectionRef}>
      <div className="products-pin" ref={pinRef}>
        <div className="ch-numeral" data-numeral aria-hidden="true">
          III
        </div>
        <div className="ch-inner products-head">
          <p className="ch-kicker" data-reveal>
            Chapter III · The portfolio
          </p>
          <h2 className="ch-title">
            <span className="line">
              <span className="line-in">Six products,</span>
            </span>
            <span className="line">
              <span className="line-in">shipped solo.</span>
            </span>
          </h2>
          <p className="products-hint" data-reveal aria-hidden="true">
            Keep scrolling — the shelf slides sideways.
          </p>
        </div>
        <div className="products-track" ref={trackRef}>
          {products.map((product) => (
            <article className="product-card glass-card" key={product.title}>
              <div className="product-top">
                <div className="product-icon">
                  <product.icon size={20} aria-hidden="true" />
                </div>
                <span className="product-platform">{product.platform}</span>
              </div>
              <h3 className="product-name">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-foot">
                <span className="product-stat">{product.stat}</span>
                {product.link && (
                  <a
                    className="product-link"
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
          <div className="products-end">
            <p className="products-end-stat">37,000+</p>
            <p className="products-end-label">users and counting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterProducts;
