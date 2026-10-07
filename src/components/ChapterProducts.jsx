import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Newspaper,
  Heart,
  Gamepad2,
  MessageCircle,
  Flower2,
  Languages,
  HeartPulse,
  Mic,
  Laptop,
} from 'lucide-react';
import useChapterScene from '../story/useChapterScene';
import { getLenis } from '../story/smoothScroll';

gsap.registerPlugin(ScrollTrigger);

// Every app here is live on the App Store and/or Google Play under
// Gamifytech Solutions. Ordered by scale, then by recency.
const products = [
  {
    title: 'Alova',
    platform: 'iOS · Android · Web',
    icon: Newspaper,
    stat: '30,000+ users',
    description:
      'Tech & AI, summarized. The flagship — a daily digest built on Flutterflow and Firebase, with self-hosted n8n pipelines and the OpenAI API doing the summarizing.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/alova/id6575347612' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.gamifytech.alova' },
    ],
  },
  {
    title: 'Shaadi AI',
    platform: 'iOS · Android · Web',
    icon: Heart,
    stat: '2,000+ users',
    description:
      'One app for every shaadi need. AI-generated wedding visuals and planning, powered by OpenAI Vision and Gemini, monetized with RevenueCat and AdMob.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/shaadi-ai/id6752545086' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.gamifytech.myshaadiai' },
      { label: 'Website', href: 'https://myshaadiai.com' },
    ],
  },
  {
    title: 'Gamify',
    platform: 'Android',
    icon: Gamepad2,
    stat: '3,000+ users · 4.7★',
    description:
      'Esports and gaming community app — the company namesake. Built on Flutterflow with a Firebase backend and AdMob monetization.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mycompany.gamifyapp' },
    ],
  },
  {
    title: 'Qkap',
    platform: 'iOS · Web',
    icon: MessageCircle,
    stat: '2,000+ users',
    description:
      'An AI social assistant on iOS — captions, hashtags and replies on demand — and on the web, a shoppable link-in-bio storefront for creators.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/qkap-social-assistant/id6737744930' },
      { label: 'Website', href: 'https://qkap.app' },
    ],
  },
  {
    title: 'Naam Jap Life',
    platform: 'iOS · Android · Web',
    icon: Flower2,
    stat: '4.2★ on Google Play',
    description:
      'A digital mala for chanting. Haptic counting, daily goals, streaks and mindful reminders — fully private, nothing ever leaves the device.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/naam-jap-life-digital-mala/id6757205385' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.gamifytechsolutions.naamjap' },
      { label: 'Website', href: 'https://naamjap.life' },
    ],
  },
  {
    title: 'LKIN',
    platform: 'iOS',
    icon: Languages,
    stat: '22 languages',
    description:
      'Learn words, unlock apps. Distracting apps stay locked behind a micro-lesson — real Screen Time enforcement, spaced repetition, and 147 hand-drawn illustrations.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/lkin-learn-words-unlock-apps/id6791769564' },
      { label: 'Website', href: 'https://lkin-app.vercel.app' },
    ],
  },
  {
    title: 'Shravan Club',
    platform: 'iOS · WhatsApp',
    icon: HeartPulse,
    stat: 'AI personal care',
    description:
      'Medication reminders in Hindi, BP, glucose and GLP-1 tracking, Apple Health sync — and a 24/7 AI health companion that lives inside WhatsApp.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/shravan-club-ai-personal-care/id6761014076' },
      { label: 'Website', href: 'https://shravan.club' },
    ],
  },
  {
    title: 'A2Z Speech Therapy',
    platform: 'iOS',
    icon: Mic,
    stat: 'Free · Education',
    description:
      'Pronunciation practice across 22 languages — flashcards with speech recognition, ten categories, hundreds of items. For therapists, parents and learners.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/a2z-speech-therapy/id6760371121' },
    ],
  },
  {
    title: 'Ultimate Notch',
    platform: 'macOS',
    icon: Laptop,
    stat: 'Native Swift · 1.3 MB',
    description:
      'Turns the MacBook notch into a toolbox: camera preview, screenshots, clipboard history, timer, shortcuts and AirDrop. Hidden until you hover.',
    links: [
      { label: 'Mac App Store', href: 'https://apps.apple.com/in/app/ultimate-notch/id6778586782?mt=12' },
    ],
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
            Chapter III · The apps
          </p>
          <h2 className="ch-title">
            <span className="line">
              <span className="line-in">Nine apps,</span>
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
                <div className="product-links">
                  {product.links.map((link) => (
                    <a
                      className="product-link"
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  ))}
                </div>
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
