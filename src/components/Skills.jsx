import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import './Skills.css';

const skillsList = [
  'Flutterflow',
  'WordPress',
  'Shopify',
  'Canva',
  'Facebook Ads',
  'Influencer Marketing',
  'Google Ads',
  'AdMob',
  'Google Analytics',
  'Firebase',
  'Firestore',
  'Gemini API',
  'ChatGPT API',
  'RevenueCat',
  'Figma',
  'n8n',
  'MS Office',
];

const awardsList = [
  {
    title: 'Certificate of Merit - 387th Ranking',
    issuer: 'International Commerce Olympiad',
    year: '2019',
  },
  {
    title: 'Award of Excellence - School Topper',
    issuer: 'International Commerce Olympiad',
    year: '2019',
  },
  {
    title: 'Medal of Excellence - 2nd Rank',
    issuer: 'Ecovisionnaire Olympiad (Economics)',
    year: '2018',
  },
  {
    title: 'Google Ads Certification',
    issuer: 'Udemy',
    year: '2022',
  },
  {
    title: 'Facebook Marketing Mastery',
    issuer: 'Udemy',
    year: '2021',
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Skills */}
        <div className="skills-block reveal">
          <div className="skills-heading">
            <p className="skills-label">Toolkit</p>
            <h2 className="skills-title">Core Arsenal.</h2>
            <p className="skills-subtitle">The tools and technologies I use to build and scale products.</p>
          </div>

          <div className="skills-list">
            {skillsList.map((skill, index) => (
              <span className="skill-chip" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Awards & Education */}
        <div className="bottom-grid">
          <div className="awards-block reveal reveal-delay-1">
            <div className="block-icon"><Award size={20} /></div>
            <h3 className="block-title">Awards & Certs</h3>
            <div className="awards-list">
              {awardsList.map((award, index) => (
                <div className="award-row" key={index}>
                  <div className="award-info">
                    <p className="award-name">{award.title}</p>
                    <p className="award-issuer">{award.issuer}</p>
                  </div>
                  <span className="award-year">{award.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="edu-block reveal reveal-delay-2">
            <div className="block-icon"><GraduationCap size={20} /></div>
            <h3 className="block-title">Education</h3>
            <div className="edu-list">
              <div className="edu-row">
                <p className="edu-degree">M.A. Economics</p>
                <p className="edu-school">Delhi School of Economics</p>
              </div>
              <div className="edu-row">
                <p className="edu-degree">B.Com (Hons)</p>
                <p className="edu-school">Shaheed Bhagat Singh College, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
