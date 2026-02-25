import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-cta reveal">
          <p className="footer-label">Get in Touch</p>
          <h2 className="footer-headline">
            Let's build<br />something great.
          </h2>
          <a href="mailto:sauravdabas4085@gmail.com" className="btn btn-primary footer-email-btn">
            <Mail size={18} />
            sauravdabas4085@gmail.com
          </a>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/sauravdabas/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://x.com/SauravDabas2" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-logo">SD<span className="footer-logo-dot">.</span></span>
          <span className="footer-copy">&copy; {new Date().getFullYear()} Saurav Dabas</span>
          <span className="footer-location">New Delhi, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
