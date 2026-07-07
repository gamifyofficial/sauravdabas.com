import { chapters } from '../story/chapters';
import { scrollToEl } from '../story/smoothScroll';

// Fixed left-edge chapter index. The active dot follows scroll position.
const ProgressRail = ({ active }) => (
  <nav className="rail" aria-label="Chapters">
    {chapters.map((chapter, i) => (
      <a
        key={chapter.id}
        className={`rail-item${active === i ? ' is-active' : ''}`}
        href={`#${chapter.id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToEl(`#${chapter.id}`);
        }}
        aria-label={chapter.label}
        aria-current={active === i ? 'true' : undefined}
      >
        <span className="rail-dot" />
        <span className="rail-label">{chapter.label}</span>
      </a>
    ))}
  </nav>
);

export default ProgressRail;
