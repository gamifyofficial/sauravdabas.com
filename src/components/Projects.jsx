import React from 'react';
import { ArrowUpRight, Globe, Smartphone, ShoppingBag, Search, Heart, MessageCircle, Gamepad2, Store } from 'lucide-react';
import './Projects.css';

const productsData = [
  {
    title: 'Alova',
    subtitle: 'iOS, Android & Web',
    icon: Heart,
    description: 'Scaled to 30,000+ users. Built with Flutterflow, Firebase, RevenueCat, AdMob, self-hosted n8n, OpenAI API, Mailchimp, and Google Ads.',
    link: 'https://alova.one',
    stats: '30,000+ Users',
  },
  {
    title: 'Shaadi AI',
    subtitle: 'iOS, Android & Web',
    icon: MessageCircle,
    description: 'AI-powered platform with 2,000+ users. Integrates OpenAI Vision API, Gemini Nano Banana, RevenueCat, AdMob, and Firebase.',
    link: 'https://myshaadiai.com',
    stats: '2,000+ Users',
  },
  {
    title: 'Gamify',
    subtitle: 'Android',
    icon: Gamepad2,
    description: 'Mobile app with 3,000+ users. Built on Flutterflow with Firebase backend and AdMob monetization.',
    link: 'https://gamifytechsolutions.com',
    stats: '3,000+ Users',
  },
  {
    title: 'Qkap',
    subtitle: 'iOS',
    icon: Smartphone,
    description: 'iOS app with 2,000+ users. Powered by Flutterflow, Firebase, RevenueCat, and OpenAI Vision API.',
    link: null,
    stats: '2,000+ Users',
  },
  {
    title: 'FastSEO',
    subtitle: 'Web App',
    icon: Search,
    description: 'SEO tool created using Base44 with integrated Dodo payments for streamlined monetization.',
    link: 'https://FastSEO.app',
    stats: 'Live Product',
  },
  {
    title: 'Daily Sale',
    subtitle: 'E-Commerce (Shopify)',
    icon: ShoppingBag,
    description: 'E-commerce storefront built on Shopify, part of a multi-store reselling operation with 10M+ social media reach.',
    link: 'https://dailysale.in',
    stats: '10M+ Reach',
  },
];

const Projects = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header reveal">
          <p className="section-label">Product Portfolio</p>
          <h2 className="section-title">Products I've Built.</h2>
          <p className="products-subtitle">
            Every product below was conceived, built, launched, and scaled by me as a solo founder.
          </p>
        </div>

        <div className="products-grid">
          {productsData.map((product, index) => (
            <div className={`product-card reveal reveal-delay-${Math.min(index + 1, 4)}`} key={index}>
              <div className="product-card-top">
                <div className="product-icon">
                  <product.icon size={20} />
                </div>
                <div className="product-meta">
                  <span className="product-subtitle">{product.subtitle}</span>
                </div>
              </div>

              <h3 className="product-name">{product.title}</h3>
              <p className="product-desc">{product.description}</p>

              <div className="product-footer">
                <span className="product-stats">{product.stats}</span>
                {product.link && (
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link">
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
