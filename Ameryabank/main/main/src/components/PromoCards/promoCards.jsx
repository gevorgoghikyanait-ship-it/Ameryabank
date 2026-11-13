import "./promoCards.css";

const cards = [
  {
    id: 1,
    title: "Օնլայն վարկեր",
    text: "Նոր հնարավորություններ քո նոր գաղափարների համար",
    button: "Իմանալ ավելին",
    image:"https://ameriabank.am/Portals/0/Images/calculators/computer.png",
    href: "#",
    variant: "green",
  },
  {
    id: 2,
    title: "Stop գործիքներ",
    text: "Քո ֆինանսների անվտանգության համար",
    button: "Իմանալ ավելին",
    image:"https://ameriabank.am/Portals/0/Images/contact-us/stop.png",
    href: "#",
    variant: "blue",
  },
];

export default function PromoCards() {
  return (
    <section className="promo">
      {cards.map((c) => (
        <article key={c.id} className={`promo__card promo__card--${c.variant}`}>
          <div className="promo__content">
            <h3 className="promo__title">{c.title}</h3>
            <p className="promo__text">{c.text}</p>
            <a href={c.href} className="promo__btn">
              {c.button}
            </a>
          </div>
          <img className="promo__image" src={c.image} alt={c.title} />
        </article>
      ))}
    </section>
  );
}