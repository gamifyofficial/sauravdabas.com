import React from 'react';
import { Briefcase, Building2, ShoppingCart, TrendingUp, Rocket, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    role: 'Solo Founder',
    company: 'Gamifytech Solutions Private Limited',
    period: '2023 - Present',
    icon: Rocket,
    current: true,
    bullets: [
      'Built FastSEO.app using Base44 with Dodo payments integration for seamless monetization',
      'Launched Shaadi AI (iOS & Android) + myshaadiai.com with 2,000+ users -- built with Flutterflow, Firebase, RevenueCat, AdMob, Gemini Nano Banana, and OpenAI Vision API',
      'Scaled Alova (iOS & Android) + alova.one to 30,000+ users -- leveraging self-hosted n8n workflows, OpenAI API, Mailchimp, Google Ads, and WordPress+Elementor',
      'Shipped Qkap (iOS) to 2,000+ users with Flutterflow, Firebase, RevenueCat, and OpenAI Vision API integration',
      'Built and grew Gamify (Android) to 3,000+ users with Flutterflow, Firebase, and AdMob monetization',
    ],
    techHighlights: ['Flutterflow', 'Firebase', 'OpenAI API', 'Google Ads', 'RevenueCat', 'n8n'],
  },
  {
    role: 'Founder',
    company: 'Sole Proprietorship',
    period: '2020 - 2022',
    icon: ShoppingCart,
    current: false,
    bullets: [
      'Built and operated multiple e-commerce and reseller websites generating consistent revenue',
      'Achieved 10M+ social media reach through strategic paid conversion ads and organic influencer marketing campaigns',
      'Earned "Legends" status on Meesho -- the highest reseller tier on the platform',
      'Received Verified Reseller Certificate from Glowroad (later acquired by Amazon), validating top-tier performance',
    ],
    techHighlights: ['Shopify', 'Canva', 'Facebook Ads', 'Influencer Marketing'],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-header reveal">
          <p className="section-label">Professional Journey</p>
          <h2 className="section-title">Work Experience.</h2>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div className={`exp-card reveal reveal-delay-${index + 1}`} key={index}>
              <div className="exp-timeline-marker">
                <div className={`exp-marker-dot ${exp.current ? 'exp-marker-dot--active' : ''}`} />
                {index < experienceData.length - 1 && <div className="exp-timeline-line" />}
              </div>

              <div className="exp-card-content">
                <div className="exp-card-header">
                  <div className="exp-card-icon">
                    <exp.icon size={20} />
                  </div>
                  <div className="exp-card-meta">
                    <div className="exp-card-top">
                      <h3 className="exp-role">{exp.role}</h3>
                      {exp.current && <span className="exp-current-badge">Current</span>}
                    </div>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-period">{exp.period}</p>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li className="exp-bullet" key={bIndex}>
                      <CheckCircle2 size={14} className="exp-bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-tech-row">
                  {exp.techHighlights.map((tech, tIndex) => (
                    <span className="exp-tech-chip" key={tIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
