import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeSegment, setActiveSegment] = useState('ԱՆՀԱՏՆԵՐԻՆ');
  const [activeNav, setActiveNav] = useState('Թվային');

  const segments = ['ԱՆՀԱՏՆԵՐԻՆ', 'ԲԻԶՆԵՍԻՆ', 'ՆԵՐԴՐՈՒՄԱՅԻՆ'];
  const navLinks = [
    'Քարտեր',
    'Վարկեր',
    'Հաշիվներ',
    'Փոխանցումներ',
    'Խնայողություններ',
    'Թվային',
  ];

  return (
    <div className="ameria-page-top">
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="ameria-header">
        {/* Վերին բարակ գիծ (Top Bar) */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <nav className="segment-nav">
              {segments.map((seg) => (
                <button
                  key={seg}
                  type="button"
                  className={`segment-btn ${activeSegment === seg ? 'active' : ''}`}
                  onClick={() => setActiveSegment(seg)}
                >
                  {seg}
                </button>
              ))}
            </nav>

            <div className="top-utils">
              <a href="#ir" className="util-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                <span>IR</span>
              </a>

              <a href="#about" className="util-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="9" y1="6" x2="9" y2="6.01" />
                  <line x1="15" y1="6" x2="15" y2="6.01" />
                  <line x1="9" y1="10" x2="9" y2="10.01" />
                  <line x1="15" y1="10" x2="15" y2="10.01" />
                  <line x1="9" y1="14" x2="9" y2="14.01" />
                  <line x1="15" y1="14" x2="15" y2="14.01" />
                  <path d="M10 22v-4h4v4" />
                </svg>
                <span>Բանկի մասին</span>
              </a>

              <a href="tel:+37410561111" className="util-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+374 10 56 11 11</span>
              </a>

              <a href="#branches" className="util-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Մասնաճյուղեր</span>
              </a>

              <button type="button" className="search-btn" aria-label="Որոնում">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <button type="button" className="lang-btn">
                <span>ՀԱՅ</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Հիմնական նավիգացիոն գիծ (Main Navbar) */}
        <div className="main-nav">
          <div className="container main-nav-inner">
            <div className="nav-left">
              <a href="/" className="brand-logo">
                <img
                  src="https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427"
                  alt="Ameriabank"
                />
              </a>

              <nav className="primary-menu">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className={`menu-link ${activeNav === link ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(link);
                    }}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="nav-right">
              <button type="button" className="online-banking-btn">
                <span>Օնլայն բանկինգ</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <button className="feedback-tab" type="button">
          Ասա կարծիքդ
        </button>

        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Իմ թվային Ամերիան</h1>
            <p className="hero-subtitle">
              Ավելին, քան բանկինգ․ քո թվային էկոհամակարգը
            </p>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/digital-ameria-web.png"
              alt="Իմ թվային Ամերիան"
              className="hero-image"
            />
          </div>
        </div>

        <div className="chat-widget">
          <div className="chat-tooltip">Հարցեր ունե՞ս</div>
          <button className="chat-button" type="button" aria-label="Առցանց չաթ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="8" y1="9" x2="16" y2="9" />
              <line x1="8" y1="13" x2="13" y2="13" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;