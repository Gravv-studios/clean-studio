import React from 'react';
import { siteData } from '../data/siteData';

export default function Experience() {
  const { experience } = siteData;

  return (
    <section id="studio" className="experience" aria-labelledby="experience-title">
      <div className="experience-container">
        {/* Left Column: Studio Photo */}
        <div className="experience-image-wrapper">
          <img
            src={experience.image}
            alt={experience.alt}
            className="experience-image"
            loading="lazy"
          />
        </div>

        {/* Right Column: Experience Details */}
        <div className="experience-content">
          <div className="experience-badge">
            <span className="accent-line"></span>
            <span className="badge-text">{experience.tagline}</span>
          </div>

          <h2 id="experience-title" className="experience-title">
            <span>Mais que um cuidado.</span>
            <span>Uma boa pausa.</span>
          </h2>

          <p className="experience-lead">{experience.subtitle}</p>

          <p className="experience-description">{experience.description}</p>

          <p className="experience-complement">{experience.complement}</p>

          <div className="experience-bottom-line">
            <span className="accent-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

