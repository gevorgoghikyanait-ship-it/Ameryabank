import { useState } from "react";
import "./News.css";

const PER_PAGE = 4;

const news = [
  {
    id: 1,
    title: "Բարելավում ենք մեր համակարգերը՝ ձեզ ավելի լավ փորձառություն նվիրելու համար",
    date: "12.11.2026",
    text: "Մենք շարունակում ենք թարմացնել մեր ենթակառուցվածքները, որպեսզի մեր մատուցած ծառայությունները լինեն էլ ավելի արագ, հուսալի և անխափան։",
    href: "#",
  },
  {
    id: 2,
    title: "Բարելավում ենք մեր համակարգերը՝ ձեզ ավելի լավ փորձառություն նվիրելու համար",
    date: "12.11.2026",
    text: "Մենք շարունակում ենք թարմացնել մեր ենթակառուցվածքները, որպեսզի մեր մատուցած ծառայությունները լինեն էլ ավելի արագ, հուսալի և անխափան։",
    href: "#",
  },
  {
    id: 3,
    title: "imID-ն արդեն Ամերիաբանկում է. թվային անվտանգ նույնականացման նոր...",
    date: "07.11.2026",
    text: "Պատկերացրեք մի տարածք, որտեղ ձեր ինքնությունը հաստատվում է վայրկյանների ընթացքու...",
    href: "#",
  },
  {
    id: 4,
    title: "Amazon-ի 115 նվեր քարտ ամեն ամիս՝ Mastercard-ով գործարքների դիմաց",
    date: "03.11.2026",
    text: "«Շահում չէ, նվեր է» արշավի շրջանակում Ամերիաբանկի Mastercard քարտապանները (բացառությամբ...",
    href: "#",
  },
  {
    id: 5,
    title: "Նոր նորություն 5",
    date: "28.10.2026",
    text: "Այստեղ կարող եք գրել հաջորդ նորության կարճ նկարագրությունը։",
    href: "#",
  },
  {
    id: 6,
    title: "Նոր նորություն 6",
    date: "25.10.2026",
    text: "Այստեղ կարող եք գրել հաջորդ նորության կարճ նկարագրությունը։",
    href: "#",
  },
  {
    id: 7,
    title: "Նոր նորություն 7",
    date: "20.10.2026",
    text: "Այստեղ կարող եք գրել հաջորդ նորության կարճ նկարագրությունը։",
    href: "#",
  },
  {
    id: 8,
    title: "Նոր նորություն 8",
    date: "15.10.2026",
    text: "Այստեղ կարող եք գրել հաջորդ նորության կարճ նկարագրությունը։",
    href: "#",
  },
];

export default function News() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(news.length / PER_PAGE);
  const visible = news.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="news">
      <div className="news__inner">
        <h2 className="news__title">Նորություններ</h2>

        <div className="news__grid">
          {visible.map((n) => (
            <a key={n.id} href={n.href} className="news__card">
              <h3 className="news__name">{n.title}</h3>
              <span className="news__date">{n.date}</span>
              <p className="news__text">{n.text}</p>
            </a>
          ))}
        </div>

        <div className="news__dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={"news__dot" + (i === page ? " news__dot--active" : "")}
              onClick={() => setPage(i)}
              aria-label={`Էջ ${i + 1}`}
            />
          ))}
        </div>

        <p className="news__updated">
          Էջը թարմացվել է <b>29.10.2026 10:20</b>
        </p>
      </div>
    </section>
  );
}