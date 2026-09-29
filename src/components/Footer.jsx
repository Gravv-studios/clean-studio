import React from 'react';
import { MapPin, Instagram } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const { brand, links, images } = siteData;

  return (
    <footer id="localizacao" className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-col footer-col-logo">
          <img
            src={images.logo}
            alt="Studio Clean Barber e Beauty"
            className="footer-logo"
          />
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        {/* Address & City */}
        <div className="footer-col footer-col-address">
          <div className="footer-item">
            <MapPin className="footer-icon" size={20} aria-hidden="true" />
            <div className="footer-address-text">
              <span className="address-line">{brand.address}</span>
              <span className="city-line">{brand.city}</span>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        {/* Instagram */}
        <div className="footer-col footer-col-social">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Perfil do Instagram do Studio Clean"
          >
            <Instagram className="footer-icon" size={20} aria-hidden="true" />
            <span className="social-handle">{brand.instagramHandle}</span>
          </a>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        {/* Slogan */}
        <div className="footer-col footer-col-slogan">
          <div className="footer-slogan">
            {brand.sloganLines.map((word, idx) => (
              <span key={idx} className="slogan-word">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

