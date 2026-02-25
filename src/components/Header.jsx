import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo" onClick={closeMenu}>
          SD<span className="logo-dot">.</span>
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`}>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <a href="mailto:sauravdabas4085@gmail.com" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
