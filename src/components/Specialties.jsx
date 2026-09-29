import React from 'react';
import { siteData } from '../data/siteData';

export default function Specialties() {
  return (
    <section className="specialties-bar" aria-label="Especialidades">
      <div className="specialties-container">
        <div className="specialties-divider"></div>
        <div className="specialties-items">
          {siteData.specialties.map((item, index) => (
            <React.Fragment key={item}>
              <span className="specialty-item">{item.toUpperCase()}</span>
              {index < siteData.specialties.length - 1 && (
                <span className="specialty-separator">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="specialties-divider"></div>
      </div>
    </section>
  );
}
