import { useRef } from 'react';
import useChapterScene from '../story/useChapterScene';

// Shared scaffold for a story chapter: giant parallax numeral, kicker,
// masked-line headline, optional lede, then chapter-specific children.
const Chapter = ({ id, numeral, kicker, title, lede, className = '', children }) => {
  const ref = useRef(null);
  useChapterScene(ref);

  return (
    <section className={`chapter ${className}`} id={id} data-chapter ref={ref}>
      <div className="ch-numeral" data-numeral aria-hidden="true">
        {numeral}
      </div>
      <div className="ch-inner">
        <p className="ch-kicker" data-reveal>
          {kicker}
        </p>
        <h2 className="ch-title">
          {title.map((line) => (
            <span className="line" key={line}>
              <span className="line-in">{line}</span>
            </span>
          ))}
        </h2>
        {lede && (
          <p className="ch-lede" data-reveal>
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Chapter;
