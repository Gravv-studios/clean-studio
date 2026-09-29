import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Cta() {
  const { ctaSection, links } = siteData;

  return (
    <section className="cta-section" aria-labelledby="cta-title">
      {/* Decorative Brand Rings Motif (SVG) */}
      <div className="cta-backdrop" aria-hidden="true">
        <svg
          className="cta-rings-svg"
          viewBox="0 0 1200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle gold and silver overlapping ring outlines */}
          <circle cx="120" cy="180" r="140" stroke="url(#goldGradient)" strokeWidth="6" opacity="0.35" />
          <circle cx="230" cy="180" r="140" stroke="url(#silverGradient)" strokeWidth="6" opacity="0.25" />

          <circle cx="1070" cy="180" r="140" stroke="url(#silverGradient)" strokeWidth="6" opacity="0.25" />
          <circle cx="1180" cy="180" r="140" stroke="url(#goldGradient)" strokeWidth="6" opacity="0.35" />

          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFC386" />
              <stop offset="50%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#96702B" />
            </linearGradient>
            <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E6E9" />
              <stop offset="50%" stopColor="#B3B8BD" />
              <stop offset="100%" stopColor="#7E848A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="cta-container">
        <h2 id="cta-title" className="cta-title">
          {ctaSection.title}
        </h2>
        <div className="cta-action">
          <a
            href={links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <span>{ctaSection.buttonText}</span>
            <ArrowUpRight className="icon-arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

