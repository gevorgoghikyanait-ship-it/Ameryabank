import { useState } from "react";

const segments = [
  { label: "ԱՆՀԱՏՆԵՐԻՆ", href: "#", active: true },
  { label: "ԲԻԶՆԵՍԻՆ", href: "#" },
  { label: "ՆԵՐԴՐՈՒՄԱՅԻՆ", href: "#" },
];

const languages = ["ՀԱՅ", "РУС", "ENG"];

export default function TopNav() {
  const [lang, setLang] = useState("ՀԱՅ");
  const [open, setOpen] = useState(false);

  return (
    <div className="top-nav">
      <ul className="top-nav__segments">
        {segments.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className={
                "top-nav__segment" + (s.active ? " top-nav__segment--active" : "")
              }
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="top-nav__links">
        <li>
          <a href="#" className="top-nav__link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="7" r="3.5" />
              <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
            </svg>
            IR
          </a>
        </li>
        <li>
          <a href="#" className="top-nav__link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="3" width="14" height="18" />
              <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
            </svg>
            Բանկի մասին
          </a>
        </li>
        <li>
          <a href="tel:+37410561111" className="top-nav__link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
            </svg>
            +374 10 56 11 11
          </a>
        </li>
        <li>
          <a href="#" className="top-nav__link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Մասնաճյուղեր
          </a>
        </li>
        <li>
          <button className="top-nav__icon-btn" aria-label="Որոնում">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
          </button>
        </li>
        <li className="top-nav__lang">
          <button
            className="top-nav__lang-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {lang}
            <span className="top-nav__caret" />
          </button>
          {open && (
            <ul className="top-nav__lang-menu">
              {languages.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => {
                      setLang(l);
                      setOpen(false);
                    }}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}