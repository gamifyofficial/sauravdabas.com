import { scrollToEl } from '../story/smoothScroll';

const links = [
  { label: 'Story', target: '#hustle' },
  { label: 'Apps', target: '#products' },
  { label: 'Toolkit', target: '#craft' },
  { label: 'Contact', target: '#epilogue' },
];

const go = (e, target) => {
  e.preventDefault();
  scrollToEl(target);
};

// Glassmorphic top bar in the hero's design language.
const StoryHeader = () => (
  <header className="story-header">
    <a className="header-name" href="#prologue" onClick={(e) => go(e, '#prologue')}>
      Saurav Dabas
    </a>

    <nav className="header-links" aria-label="Sections">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.target}
          className="header-link"
          onClick={(e) => go(e, link.target)}
        >
          {link.label}
        </a>
      ))}
    </nav>

    <a
      className="header-cta liquid-glass"
      href="#epilogue"
      onClick={(e) => go(e, '#epilogue')}
    >
      Get in Touch
    </a>
  </header>
);

export default StoryHeader;
