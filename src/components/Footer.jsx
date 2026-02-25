import React from 'react';
import { ArrowUpRight, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-cta reveal">
          <p className="section-label">Get in Touch</p>
          <h2 className="footer-headline">
            Let's build<br />something great.
          </h2>
          <p className="footer-subtext">
            Available for full-time roles, consulting, and product collaborations.
            Based in New Delhi, India.
          </p>

          <div className="footer-contact-grid">
            <a href="mailto:sauravdabas4085@gmail.com" className="footer-contact-card">
              <div className="footer-contact-icon">
                <Mail size={20} />
              </div>
              <div className="footer-contact-info">
                <span className="footer-contact-label">Email</span>
                <span className="footer-contact-value">sauravdabas4085@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918368485477" className="footer-contact-card">
              <div className="footer-contact-icon">
                <Phone size={20} />
              </div>
              <div className="footer-contact-info">
                <span className="footer-contact-label">Phone</span>
                <span className="footer-contact-value">+91 8368485477</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sauravdabas/" target="_blank" rel="noopener noreferrer" className="footer-contact-card">
              <div className="footer-contact-icon">
                <Linkedin size={20} />
              </div>
              <div className="footer-contact-info">
                <span className="footer-contact-label">LinkedIn</span>
                <span className="footer-contact-value">in/sauravdabas</span>
              </div>
            </a>

            <a href="https://x.com/SauravDabas2" target="_blank" rel="noopener noreferrer" className="footer-contact-card">
              <div className="footer-contact-icon">
                <Twitter size={20} />
              </div>
              <div className="footer-contact-info">
                <span className="footer-contact-label">Twitter</span>
                <span className="footer-contact-value">@SauravDabas2</span>
              </div>
            </a>
          </div>

          <a href="mailto:sauravdabas4085@gmail.com" className="btn btn-primary footer-hire-btn">
            Hire Me
          </a>
        </div>

        <div className="footer-bottom">
          <span className="footer-logo">Saurav Dabas</span>
          <span className="footer-copy">&copy; {new Date().getFullYear()} Saurav Dabas. All rights reserved.</span>
          <span className="footer-location">Uttam Nagar, New Delhi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
