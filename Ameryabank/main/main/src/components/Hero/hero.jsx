import { useEffect, useState } from "react";
import slides from "./slides";
import "./hero.css";

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={"hero__slide" + (i === current ? " hero__slide--active" : "")}
          aria-hidden={i !== current}
        >
          <div className="hero__content">
            <h1 className="hero__title">{s.title}</h1>

            <div className="hero__text">
              {s.lines.map((l, idx) => (
                <p key={idx} className={l.bold ? "hero__bold" : ""}>
                  {l.text}
                </p>
              ))}
            </div>

            <div className="hero__buttons">
              <a href="#" className="btn btn--primary">
                {s.primary}
              </a>
              <a href="#" className="btn btn--outline">
                {s.secondary}
              </a>
            </div>
          </div>

          <img className="hero__image" src={s.image} alt={s.title} />
        </div>
      ))}

      <div className="hero__dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={"hero__dot" + (i === current ? " hero__dot--active" : "")}
            onClick={() => setCurrent(i)}
            aria-label={`Սլայդ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}