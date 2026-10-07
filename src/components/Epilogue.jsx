import { Linkedin, Twitter } from 'lucide-react';
import Chapter from './Chapter';

const contacts = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/sauravdabas',
    href: 'https://www.linkedin.com/in/sauravdabas/',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    value: '@SauravDabas2',
    href: 'https://x.com/SauravDabas2',
  },
];

const Epilogue = () => (
  <Chapter
    id="epilogue"
    numeral="V"
    kicker="Epilogue"
    title={['The next chapter', 'starts with you.']}
    lede="Available for full-time roles, consulting, and product collaborations.
      Based in New Delhi, India — building for everywhere."
    className="epilogue"
  >
    <div className="contact-grid" data-reveal>
      {contacts.map((contact) => (
        <a
          className="contact-card glass-card"
          key={contact.label}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-icon">
            <contact.icon size={18} aria-hidden="true" />
          </div>
          <div className="contact-info">
            <span className="contact-label">{contact.label}</span>
            <span className="contact-value">{contact.value}</span>
          </div>
        </a>
      ))}
    </div>

    <a
      className="hire-btn"
      data-reveal
      href="https://www.linkedin.com/in/sauravdabas/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Write the first line — say hello on LinkedIn
    </a>

    <div className="story-footer" data-reveal>
      <span>Saurav Dabas</span>
      <span>© {new Date().getFullYear()} · All rights reserved</span>
      <span>New Delhi, India</span>
    </div>
  </Chapter>
);

export default Epilogue;
