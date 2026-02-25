import React from 'react';
import { Award, GraduationCap, Code2, TrendingUp, Bot, Palette, BadgeCheck, Medal } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Development',
    icon: Code2,
    skills: ['Flutterflow', 'WordPress', 'Shopify', 'Firebase', 'Firestore', 'Google Cloud', 'Google Auth', 'n8n'],
  },
  {
    title: 'Marketing & Growth',
    icon: TrendingUp,
    skills: ['Facebook Ads', 'Influencer Marketing', 'Google Ads', 'AdMob', 'Google Analytics', 'Mailchimp'],
  },
  {
    title: 'AI & APIs',
    icon: Bot,
    skills: ['ChatGPT', 'OpenAI Developer Platform', 'Gemini API', 'OpenAI Vision API', 'RevenueCat'],
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    skills: ['Figma', 'Canva', 'MS Office', 'Google Storage'],
  },
];

const educationData = [
  {
    degree: 'M.A. Economics',
    institution: 'Delhi School of Economics',
    year: '2023',
    note: 'Dropped',
  },
  {
    degree: 'B.Com (Hons)',
    institution: 'Shaheed Bhagat Singh College, Delhi University',
    year: '2022',
    note: 'CGPA: 8.02/10',
  },
  {
    degree: '12th (CBSE Commerce)',
    institution: 'Army Public School, Shankar Vihar',
    year: '2019',
    note: '85.20%',
  },
  {
    degree: '10th (CBSE)',
    institution: 'Army Public School, Shankar Vihar',
    year: '2017',
    note: 'CGPA: 8.80/10',
  },
];

const awardsData = [
  {
    title: 'Certificate of Merit - 387th Ranking',
    issuer: 'International Commerce Olympiad',
    year: '2019',
  },
  {
    title: 'Certificate, Medal & Award of Excellence - School Topper',
    issuer: 'International Commerce Olympiad',
    year: '2019',
  },
  {
    title: 'Certificate & Medal of Excellence - 2nd Rank',
    issuer: 'Ecovisionnaire Olympiad Economics',
    year: '2018',
  },
];

const certificationsData = [
  { title: 'Ultimate Google Ads Training 2021', issuer: 'Udemy', year: '2022' },
  { title: 'Facebook Ads & Facebook Marketing Mastery 2021', issuer: 'Udemy', year: '2021' },
  { title: 'The Complete Digital Marketing Course 12 in 1', issuer: 'Udemy', year: '2021' },
  { title: 'Verified Reseller Award', issuer: 'Glowroad / Amazon', year: '2021' },
  { title: 'Volunteer - Financial & Investment Society Event', issuer: 'SBSC', year: '2020' },
  { title: 'Volunteer - Delhi University Students Union Event', issuer: 'Ramjas College', year: '2019' },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Skills Categories */}
        <div className="skills-header reveal">
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Skills & Expertise.</h2>
          <p className="skills-subtitle">
            The tools, platforms, and technologies I use to build and scale products.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((category, index) => (
            <div className={`skill-category-card reveal reveal-delay-${index + 1}`} key={index}>
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <category.icon size={18} />
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-chips">
                {category.skills.map((skill, sIndex) => (
                  <span className="skill-chip" key={sIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="education-section" id="education">
          <div className="education-header reveal">
            <p className="section-label">Background</p>
            <h2 className="section-title">Education.</h2>
          </div>

          <div className="education-grid">
            {educationData.map((edu, index) => (
              <div className={`edu-card reveal reveal-delay-${index + 1}`} key={index}>
                <div className="edu-card-icon">
                  <GraduationCap size={18} />
                </div>
                <div className="edu-card-content">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-card-bottom">
                    <span className="edu-year">{edu.year}</span>
                    <span className="edu-note">{edu.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="accolades-section">
          <div className="accolades-grid">
            <div className="awards-block reveal reveal-delay-1">
              <div className="block-header">
                <div className="block-icon"><Medal size={20} /></div>
                <h3 className="block-title">Awards</h3>
              </div>
              <div className="awards-list">
                {awardsData.map((award, index) => (
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

            <div className="certs-block reveal reveal-delay-2">
              <div className="block-header">
                <div className="block-icon"><BadgeCheck size={20} /></div>
                <h3 className="block-title">Certifications</h3>
              </div>
              <div className="certs-list">
                {certificationsData.map((cert, index) => (
                  <div className="cert-row" key={index}>
                    <div className="cert-info">
                      <p className="cert-name">{cert.title}</p>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
