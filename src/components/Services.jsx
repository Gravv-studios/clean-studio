import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Services() {
  const { servicesSection, links } = siteData;

  return (
    <section id="servicos" className="services" aria-labelledby="services-title">
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="services-title" className="section-title">
            {servicesSection.title}
          </h2>
          <p className="section-subtitle">{servicesSection.subtitle}</p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="services-grid">
          {servicesSection.services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-image"
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-link-wrapper">
                  <span className="service-link-line"></span>
                  <a
                    href={links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    <span>{service.cta}</span>
                    <ArrowUpRight className="icon-arrow" size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
