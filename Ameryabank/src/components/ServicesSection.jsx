import React, { useState, useEffect } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const words = ['AmeriaStar', 'Home', 'Car', 'Invest', 'Business'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2200); // Փոխվում է յուրաքանչյուր 2.2 վայրկյանը մեկ

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="services-section">
      <div className="container services-grid">
        {/* Առաջին քարտ՝ Վիդեո */}
        <a href="#mypay" className="service-card card-video">
          <video
            className="card-bg-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/video-mycampaigns.mp4"
              type="video/mp4"
            />
          </video>
        </a>

        {/* Երկրորդ քարտ՝ My + Փոփոխվող տեքստ */}
        <a href="#myecosystem" className="service-card card-ameriastar">
          <h2 className="ameriastar-logo">
            <span className="text-black">My</span>{' '}
            <span key={currentIndex} className="text-green word-animate">
              {words[currentIndex]}
            </span>
          </h2>
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;