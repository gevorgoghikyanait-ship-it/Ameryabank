import { useState } from "react";
import "./ProductShowcase.css";

const tabs = [
  {
    id: "home",
    label: "MyHome",
    title: "MyHome",
    subtitle: "Տուն գնելը երբեք այսքան հեշտ չի եղել",
    text: "Ընտրիր քո նոր բնակարանը, ստացիր վարկային հայտի պատասխանն օնլայն մի քանի րոպեում, այցելիր նոտարական գրասենյակ և ստորագրիր...",
    button: "Իմանալ ավելին",
    bg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRIEVI1dIfU4mvZu5Z-_kxj4bElFYvjLVZR7sxhuKgQ&s=10"
  },
  {
    id: "car",
    label: "MyCar",
    title: "MyCar",
    subtitle: "Ավտոմեքենա գնելը հիմա ավելի հարմար է",
    text: "Ընտրիր քո ավտոմեքենան և ստացիր վարկի պատասխանը օնլայն՝ առանց բանկ այցելելու։",
    button: "Իմանալ ավելին",
    bg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROezu7XwfJzcMMu1f3j_JkMPHeE9zl8gI6FS4tvSYkLQ&s=10'
  },
  {
    id: "invest",
    label: "MyInvest",
    title: "MyInvest",
    subtitle: "Ներդրումներ՝ քո ֆինանսական նպատակների համար",
    text: "Սկսիր ներդրումները հարմար հավելվածով և հետևիր քո պորտֆելին ամեն օր։",
    button: "Իմանալ ավելին",
    bg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHE1TIbfdBPPHJpQvlA6XHrQ5GEuavswqqxMjqm8C3Ag&s=10",
  },
  {
    id: "business",
    label: "MyBusiness",
    title: "MyBusiness",
    subtitle: "Լուծումներ քո բիզնեսի զարգացման համար",
    text: "Բացիր հաշիվ, կառավարիր վճարումները և ստացիր ֆինանսավորում օնլայն։",
    button: "Իմանալ ավելին",
    bg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KvL3p9CORk_sqOMGPFX1UQsLqc4yZTqBiBJNo2TDDg&s=10"
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);

  const t = tabs[active];

  return (
    <section
      className="showcase"
      style={{ backgroundImage: `url(${t.bg})` }}
    >
      <div className="showcase__content">
        <h2 className="showcase__title">{t.title}</h2>
        <p className="showcase__subtitle">{t.subtitle}</p>
        <p className="showcase__text">{t.text}</p>
        <a href="#" className="showcase__more">
          {t.button}
        </a>
      </div>

      <div className="showcase__phone">
        <div className="showcase__phone-dots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={
                "showcase__dot" + (i === step ? " showcase__dot--active" : "")
              }
              onClick={() => setStep(i)}
              aria-label={`Քայլ ${i + 1}`}
            >
              {i === 0 && "+"}
              {i === 1 && "→"}
              {i === 2 && "···"}
            </button>
          ))}
        </div>
      </div>

      <div className="showcase__tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            className={
              "showcase__tab" + (i === active ? " showcase__tab--active" : "")
            }
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}