import { Code2, TrendingUp, Bot, Palette, GraduationCap, Medal } from 'lucide-react';
import Chapter from './Chapter';

const skillGroups = [
  {
    title: 'Development',
    icon: Code2,
    skills: [
      'Flutterflow',
      'Swift & SwiftUI',
      'Kotlin',
      'Next.js',
      'Firebase',
      'Supabase',
      'Shopify',
      'WordPress',
      'Google Cloud',
      'n8n',
    ],
  },
  {
    title: 'Marketing & Growth',
    icon: TrendingUp,
    skills: [
      'Google Ads',
      'Facebook Ads',
      'AdMob',
      'Influencer Marketing',
      'App Store Optimization',
      'Google Analytics',
      'Mailchimp',
    ],
  },
  {
    title: 'AI & Monetization',
    icon: Bot,
    skills: [
      'OpenAI Platform',
      'OpenAI Vision',
      'Gemini API',
      'Claude Code',
      'RevenueCat',
      'Superwall',
      'Dodo Payments',
    ],
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    skills: ['Figma', 'Canva', 'Xcode', 'Vercel', 'WhatsApp Business API'],
  },
];

const education = [
  { degree: 'M.A. Economics', place: 'Delhi School of Economics', note: 'Left in 2023 — to build' },
  { degree: 'B.Com (Hons)', place: 'Shaheed Bhagat Singh College, DU', note: '2022 · CGPA 8.02/10' },
];

const honors = [
  { title: 'School Topper · Award of Excellence', issuer: 'International Commerce Olympiad', year: '2019' },
  { title: '2nd Rank · Medal of Excellence', issuer: 'Ecovisionnaire Olympiad, Economics', year: '2018' },
  { title: 'Verified Reseller Award', issuer: 'Glowroad / Amazon', year: '2021' },
];

const ChapterCraft = () => (
  <Chapter
    id="craft"
    numeral="IV"
    kicker="Chapter IV · The toolkit"
    title={['Tools change.', 'Shipping doesn’t.']}
    lede="Self-taught across the whole stack a product needs — no-code when it's fastest,
      native Swift and Kotlin when it matters, AI in the loop everywhere. The toolkit
      grew with every chapter; the habit of shipping stayed the same."
  >
    <div className="craft-grid" data-reveal>
      {skillGroups.map((group) => (
        <div className="craft-card glass-card" key={group.title}>
          <div className="craft-card-head">
            <group.icon size={17} aria-hidden="true" />
            <h3>{group.title}</h3>
          </div>
          <div className="chip-row">
            {group.skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="craft-aside" data-reveal>
      <div className="aside-block">
        <h4 className="aside-title">
          <GraduationCap size={16} aria-hidden="true" /> Education
        </h4>
        {education.map((item) => (
          <div className="aside-row" key={item.degree}>
            <div>
              <p className="aside-main">{item.degree}</p>
              <p className="aside-sub">{item.place}</p>
            </div>
            <span className="aside-note">{item.note}</span>
          </div>
        ))}
      </div>
      <div className="aside-block">
        <h4 className="aside-title">
          <Medal size={16} aria-hidden="true" /> Honors
        </h4>
        {honors.map((item) => (
          <div className="aside-row" key={item.title}>
            <div>
              <p className="aside-main">{item.title}</p>
              <p className="aside-sub">{item.issuer}</p>
            </div>
            <span className="aside-note">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  </Chapter>
);

export default ChapterCraft;
