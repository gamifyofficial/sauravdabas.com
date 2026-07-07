import { Trophy, Radio, BadgeCheck } from 'lucide-react';
import Chapter from './Chapter';

const milestones = [
  {
    icon: Radio,
    stat: '10M+',
    title: 'Social media reach',
    detail: 'Paid conversion ads and organic influencer campaigns, run end to end.',
  },
  {
    icon: Trophy,
    stat: 'Legends',
    title: 'Top tier on Meesho',
    detail: 'The highest reseller status the platform awards.',
  },
  {
    icon: BadgeCheck,
    stat: 'Verified',
    title: 'Glowroad reseller',
    detail: 'Certified top-tier performance — Glowroad was later acquired by Amazon.',
  },
];

const tools = ['Shopify', 'Canva', 'Facebook Ads', 'Influencer Marketing'];

const ChapterHustle = () => (
  <Chapter
    id="hustle"
    numeral="I"
    kicker="Chapter I · 2020 – 2022"
    title={['It began with', 'a storefront.']}
    lede="A college student in Delhi, building e-commerce and reseller websites between
      lectures. No funding, no team — just storefronts that had to earn their keep.
      They did: consistent revenue, ten million people reached, and the highest seller
      tiers two platforms could offer."
  >
    <div className="milestone-grid" data-reveal>
      {milestones.map((m) => (
        <div className="milestone-card glass-card" key={m.title}>
          <div className="milestone-icon">
            <m.icon size={18} aria-hidden="true" />
          </div>
          <span className="milestone-stat">{m.stat}</span>
          <h3 className="milestone-title">{m.title}</h3>
          <p className="milestone-detail">{m.detail}</p>
        </div>
      ))}
    </div>
    <div className="chip-row" data-reveal>
      {tools.map((tool) => (
        <span className="chip" key={tool}>
          {tool}
        </span>
      ))}
    </div>
  </Chapter>
);

export default ChapterHustle;
