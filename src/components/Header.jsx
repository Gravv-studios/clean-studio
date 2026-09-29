import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="header-container">
        {/* Logo à esquerda */}
        <a href="#" className="header-logo-link" aria-label="Studio Clean Barber e Beauty - Início">
          <img
            src={siteData.images.logoHorizontal || siteData.images.logo}
            alt="Studio Clean Barber e Beauty - Logotipo oficial"
            className="header-logo"
          />
        </a>

        {/* Grupo da direita: Navegação e Botão de Agendamento */}
        <div className="header-desktop-group">
          <nav className="header-nav" aria-label="Navegação principal">
            <ul className="nav-list">
              {siteData.navigation.map((item) => (
                <li key={item.label} className="nav-item">
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-action">
            <a
              href={siteData.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="header-btn-booking"
            >
              <span>Agendar horário</span>
              <ArrowUpRight className="header-btn-icon" size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Botão de menu mobile */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Drawer mobile */}
      {mobileMenuOpen && (
        <div className="mobile-nav" id="mobile-nav-drawer">
          <ul className="mobile-nav-list">
            {siteData.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-cta">
              <a
                href={siteData.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="header-btn-booking mobile-btn-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Agendar horário</span>
                <ArrowUpRight className="header-btn-icon" size={19} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
