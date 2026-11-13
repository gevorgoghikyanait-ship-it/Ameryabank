import { useEffect, useRef, useState } from "react";
import "./Offers.css";

const offers = [
  {
    id: 1,
    title: "11.11-ը կանչում է",
    text: "Գնիր կահույք, տեխնիկա և շինանյութ մեր գործընկերներից՝ Ամերիայի 0% ապառիկով",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/11-11-is-calling-arm.png",
    href: "#",
  },
  {
    id: 2,
    title: "Amazon-ի 115 նվեր քարտ",
    text: "Միջազգային օնլայն ու օֆլայն գործարքներդ կատարիր քո Mastercard քարտով",
    image: "https://ameriabank.am/Portals/0/Images/campaigns/amazon-gift-card/amazon-special-offer-arm.png",
    href: "#",
  },
  {
    id: 3,
    title: "Բեր վարկերդ Ամերիա",
    text: "Ունեցիր 1 անգրավ վարկ՝ մինչև 20,000,000 դրամ սահմանաչափով։ Տեղափոխիր վարկերդ Ամերիա և ունեցիր ցածր տոկոսադրույք՝ 15% ...",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/refinancing-loan-offer-arm.png",
    href: "#",
  },
  {
    id: 4,
    title: "Անվճար Arca Classic",
    text: "2% քեշբեք քո վճարումներից։ Պատվիրիր Ամերիայի անվճար քարտ և ամեն ամիս ստացիր մինչև 60 000 դրամ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/arca-offer.png",
    href: "#",
  },
  {
    id: 5,
    title: "Բեր գույքի գրավով վարկ...",
    text: "Նվազեցրու գույքի գրավով վարկիդ տոկոսը 2%-ով",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/percent-offer.png",
    href: "#",
  },
];

export default function Offers() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scroll = (dir) => {
    const el = trackRef.current;
    const card = el.querySelector(".offers__card");
    const step = card.offsetWidth + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="offers">
      <div className="offers__inner">
        <div className="offers__head">
          <h2 className="offers__title">Գործող հատուկ առաջարկներ</h2>
          <div className="offers__arrows">
            <button
              className="offers__arrow"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Նախորդ"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              className="offers__arrow"
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Հաջորդ"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="offers__track" ref={trackRef} onScroll={update}>
          {offers.map((o) => (
            <article key={o.id} className="offers__card">
              <img className="offers__img" src={o.image} alt={o.title} />
              <h3 className="offers__name">
                {o.title}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#76c043" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </h3>
              <p className="offers__text">{o.text}</p>
              <a href={o.href} className="offers__btn">
                Իմանալ ավելին
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}