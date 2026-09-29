import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const { hero, links } = siteData;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        {/* Left Column: Text & CTA */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="accent-line"></span>
            <span className="badge-text">{hero.tagline}</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            <span>{hero.titleLines[0]}</span>
            <span>{hero.titleLines[1]}</span>
            <span className="hero-title-highlight">{hero.titleLines[2]}</span>
          </h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-cta">
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-hero"
            >
              <span>{hero.ctaText}</span>
              <ArrowUpRight className="icon-arrow" size={18} />
            </a>
          </div>

          <div className="hero-bottom-tagline">
            <span className="accent-line"></span>
            <span className="tagline-text">{hero.bottomNote}</span>
          </div>
        </div>

        {/* Right Column: Two Stacked Photos with Side Captions */}
        <div className="hero-gallery">
          {hero.sidePhotos.map((item, idx) => (
            <div key={idx} className="hero-gallery-card">
              <div className="hero-gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="hero-gallery-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="hero-gallery-caption">
                <span className="caption-line"></span>
                <span className="caption-text">{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

