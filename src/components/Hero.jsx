import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.classList.add('hero--visible');
      });
    }
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Web Developer & Entrepreneur
          </div>

          <h1 className="hero-title">
            Building
            <span className="hero-title-outline"> High-Performance</span>
            <br />Digital Products.
          </h1>

          <p className="hero-description">
            I'm Saurav Dabas — I build responsive, scalable, and beautifully designed
            mobile & web applications that drive real business results.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <a href="#projects" className="scroll-indicator" aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>
    </section>
  );
};

export default Hero;
