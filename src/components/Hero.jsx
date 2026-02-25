import React, { useEffect, useRef } from 'react';
import { ArrowDown, Users, Package, Radio, Clock } from 'lucide-react';
import './Hero.css';

const stats = [
  { icon: Users, value: '37,000+', label: 'Users' },
  { icon: Package, value: '6+', label: 'Products' },
  { icon: Radio, value: '10M+', label: 'Reach' },
  { icon: Clock, value: '5+', label: 'Years' },
];

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
            Founder &amp; Product Builder
          </div>

          <h1 className="hero-title">
            I Build Products
            <span className="hero-title-outline"> That Scale</span>
            <br />and Drive Growth.
          </h1>

          <p className="hero-description">
            Saurav Dabas -- Founder of Gamifytech Solutions. I architect, build, and scale
            mobile and web products from zero to tens of thousands of users, combining
            product development with performance marketing.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View Experience
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div className="hero-stat" key={index}>
              <div className="hero-stat-icon">
                <stat.icon size={18} />
              </div>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#experience" className="scroll-indicator" aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>
    </section>
  );
};

export default Hero;
