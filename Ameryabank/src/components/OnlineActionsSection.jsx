import React, { useState } from 'react';
import './OnlineActionsSection.css';

const onlineSlides = [
  {
    id: 1,
    title: 'Ստեղծիր հաշիվ ու պատվիրիր քարտ` օնլայն',
    description:
      'Բացիր օնլայն հաշիվ և պատվիրիր անվճար քարտ րոպեների ընթացքում` առանց տնից դուրս գալու',
    link: '#open-account',
  },
  {
    id: 2,
    title: 'Օնլայն վարկեր',
    description:
      'Ստացիր 100,000 ՀՀ դրամից մինչև 20 մլն ՀՀ դրամի վարկ` մի քանի րոպեում',
    link: '#online-loans',
  },
  {
    id: 3,
    title: 'Օնլայն ապառիկ',
    description:
      'Կատարիր 50,000-ից մինչև 1,000,000 դրամի օնլայն գնումներ և ձևակերպիր օնլայն ապառիկ հաշված րոպեների ընթացքում:',
    link: '#online-installment',
  },
  {
    id: 4,
    title: 'Օնլայն ավանդներ',
    description:
      'Ներդրիր ավանդ օնլայն և ստացիր ավելի բարձր տոկոսադրույք քո խնայողությունների համար',
    link: '#online-deposits',
  },
];

const OnlineActionsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(onlineSlides.length - visibleCount, prev + 1)
    );
  };

  const visibleSlides = onlineSlides.slice(startIndex, startIndex + visibleCount);
  const isAtStart = startIndex === 0;
  const isAtEnd = startIndex + visibleCount >= onlineSlides.length;

  return (
    <section className="online-actions-section">
      <div className="container">
        <h2 className="online-section-heading">Էլ ի՞նչ կարող ես անել օնլայն</h2>

        <div className="green-banner-wrapper">
          {/* Կանաչ ֆոնային բլոկ */}
          <div className="green-banner-box">
            <h3 className="green-banner-title">Թվային բանկինգ ու շատ ավելին</h3>
          </div>

          {/* Սպիտակ քարտերի սլայդեր */}
          <div className="slider-container">
            <button
              type="button"
              className={`slider-arrow prev-arrow ${isAtStart ? 'disabled' : ''}`}
              onClick={handlePrev}
              disabled={isAtStart}
              aria-label="Նախորդը"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="online-cards-grid">
              {visibleSlides.map((slide) => (
                <div key={slide.id} className="online-card">
                  <div className="online-card-top">
                    <h4 className="online-card-title">{slide.title}</h4>
                    <p className="online-card-desc">{slide.description}</p>
                  </div>
                  <div className="online-card-footer">
                    <a href={slide.link} className="online-card-link">
                      Իմանալ ավելին
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`slider-arrow next-arrow ${isAtEnd ? 'disabled' : ''}`}
              onClick={handleNext}
              disabled={isAtEnd}
              aria-label="Հաջորդը"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Թարմացման ամսաթիվ */}
        <div className="last-updated-row">
          <span>
            Թարմացված է <strong>01.04.2026 10:31</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OnlineActionsSection;