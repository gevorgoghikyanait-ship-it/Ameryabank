import { useState } from "react";
import "./BannerSlider.css";

const slides = [
  {
    id: 1,
    title: "Ամերիան առաջինն է",
    text: "Միացի՛ր Ամերիա Սերունդ ծրագրին, ստացի՛ր եռամսյա վճարովի ուսուցում և հնարավորություն՝ սկսելու քո կարիերան Ամերիայում։",
    primary: "Դիմել հիմա",
    secondary: "Իմանալ ավելին",
    image: "https://ameriabank.am/Portals/0/Images/generation/gen-a-23/special.jpg",
  },
  // Նոր սլայդ ավելացնելու համար պարզապես ավելացրեք նոր օբյեկտ այստեղ
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const s = slides[current];

  return (
    <section className="banner">
      <button className="banner__arrow banner__arrow--left" onClick={prev} aria-label="Նախորդ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </button>

      <div className="banner__card">
        <div className="banner__content">
          <h2 className="banner__title">{s.title}</h2>
          <p className="banner__text">{s.text}</p>
          <div className="banner__buttons">
            <a href="#" className="btn btn--primary">{s.primary}</a>
            <a href="#" className="btn btn--outline">{s.secondary}</a>
          </div>
        </div>

        <img className="banner__image" src={s.image} alt={s.title} />
      </div>

      <button className="banner__arrow banner__arrow--right" onClick={next} aria-label="Հաջորդ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </section>
  );
}