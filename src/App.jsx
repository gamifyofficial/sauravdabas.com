import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import VideoBackground from './story/VideoBackground';
import { setLenis } from './story/smoothScroll';

import StoryHeader from './components/StoryHeader';
import ProgressRail from './components/ProgressRail';
import Prologue from './components/Prologue';
import ChapterHustle from './components/ChapterHustle';
import ChapterLeap from './components/ChapterLeap';
import ChapterProducts from './components/ChapterProducts';
import ChapterCraft from './components/ChapterCraft';
import Epilogue from './components/Epilogue';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    // The browser's async scroll restoration races ScrollTrigger's initial
    // measurements (and Lenis), corrupting every trigger's position. A
    // scroll-driven story starts at the top; restoration stays off.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Lenis drives the scroll; gsap's ticker drives Lenis ---
    let lenis = null;
    let tick = null;
    if (!reducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      setLenis(lenis);
      lenis.on('scroll', ScrollTrigger.update);
      tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // --- active-chapter tracking for the progress rail ---
    // Marker triggers only provide live geometry (correct across refreshes
    // and pinning); the active chapter is derived from scroll position, never
    // from toggle events, which proved unreliable across layout refreshes.
    const triggers = [];
    const bands = [];
    const sections = gsap.utils.toArray('[data-chapter]');
    sections.forEach((section, i) => {
      if (i > 0) {
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: 'top 85%',
          end: 'top 35%',
        });
        triggers.push(trigger);
        bands.push({ index: i, trigger });
      }
    });
    // Evaluated every frame (a handful of property reads) rather than on
    // scroll/refresh events — band geometry keeps moving while fonts, pins
    // and layout settle, and only continuous evaluation stays correct.
    const computeActive = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop || 0;
      let active = 0;
      for (const band of bands) {
        if (scroll >= (band.trigger.start + band.trigger.end) / 2) active = band.index;
        else break;
      }
      setActiveChapter(active);
    };
    gsap.ticker.add(computeActive);

    // layout settles once webfonts arrive, and again on full load
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      gsap.ticker.remove(computeActive);
      triggers.forEach((trigger) => trigger.kill());
      if (tick) gsap.ticker.remove(tick);
      if (lenis) {
        lenis.destroy();
        setLenis(null);
      }
    };
  }, []);

  return (
    <>
      <VideoBackground />
      <StoryHeader />
      <ProgressRail active={activeChapter} />
      <main className="story">
        <div className="story-scrim" aria-hidden="true" />
        <Prologue />
        <ChapterHustle />
        <ChapterLeap />
        <ChapterProducts />
        <ChapterCraft />
        <Epilogue />
      </main>
    </>
  );
}

export default App;
