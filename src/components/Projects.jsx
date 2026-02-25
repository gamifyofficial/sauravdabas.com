import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'Gamifytech Solutions',
    type: 'Solo Founder',
    year: '2023 - Present',
    description: 'Developed and scaled multiple web and mobile applications including FastSEO, Shaadi AI, and Alova.',
    link: 'https://gamifytechsolutions.com',
    stats: '30,000+ Users',
  },
  {
    title: 'Alova App',
    type: 'iOS, Android & Web',
    year: '2024',
    description: 'Flutterflow app with Firebase backend and RevenueCat subscriptions. Scaled user acquisition via Google Ads.',
    link: 'https://alova.one',
    stats: '30,000+ Users',
  },
  {
    title: 'Shaadi AI',
    type: 'iOS, Android & Web',
    year: '2023',
    description: 'AI-driven matchmaking platform integrating OpenAI Vision API and Gemini for intelligent image analysis.',
    link: 'https://myshaadiai.com',
    stats: '2,000+ Users',
  },
  {
    title: 'E-commerce Ventures',
    type: 'Founder',
    year: '2020 - 2022',
    description: 'Launched multiple e-commerce websites on Shopify. Scaled to 10M+ reach through Facebook Ads & influencer marketing.',
    link: null,
    stats: 'Legends Status on Meesho',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <p className="projects-label">Selected Work</p>
          <h2 className="projects-title">Things I've Built.</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className={`project-card reveal reveal-delay-${index + 1}`} key={index}>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-footer">
                <span className="project-stats">{project.stats}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Visit <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
