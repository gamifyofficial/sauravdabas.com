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
          Saurav Dabas
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`}>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <a href="mailto:sauravdabas4085@gmail.com" className="btn btn-primary btn-sm nav-cta" onClick={closeMenu}>
            Hire Me
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
