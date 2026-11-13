import "./UsefulLinks.css";

const stroke = {
  width: 44,
  height: 44,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const links = [
  {
    id: 1,
    title: "Քարտեր",
    href: "#",
    icon: (
      <svg {...stroke}>
        <rect x="4" y="10" width="40" height="28" rx="2" />
        <path d="M4 19h40M28 30h10" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Փոխանցումներ",
    href: "#",
    icon: (
      <svg {...stroke}>
        <rect x="6" y="6" width="14" height="12" rx="1" />
        <rect x="28" y="30" width="14" height="12" rx="1" />
        <path d="M30 10h8v10M18 38h-8V28" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Օնլայն վարկեր",
    href: "#",
    icon: (
      <svg {...stroke}>
        <path d="M18 8h12l-3 7h-6zM21 15c-8 4-13 10-13 17 0 6 5 10 16 10s16-4 16-10c0-7-5-13-13-17" />
        <path d="M19 33l10-8" />
        <circle cx="20" cy="26" r="1.2" />
        <circle cx="28" cy="33" r="1.2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Հեռավար բանկինգ",
    href: "#",
    icon: (
      <svg {...stroke}>
        <rect x="14" y="4" width="20" height="40" rx="2" />
        <path d="M14 10h20M14 36h20" />
        <circle cx="24" cy="40" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Խնայողություններ",
    href: "#",
    icon: (
      <svg {...stroke}>
        <path d="M10 26c0-8 6-13 15-13 4 0 7 1 9 3l6-2-1 6c2 2 3 4 3 6 0 2-1 4-3 5v5h-5v-3c-2 1-4 1-6 1s-4 0-6-1v3h-5v-5c-4-1-7-3-7-6z" />
        <path d="M22 13c0-3 2-5 5-5" />
        <circle cx="35" cy="24" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

export default function UsefulLinks() {
  return (
    <section className="useful">
      <h2 className="useful__title">Օգտակար հղումներ</h2>

      <div className="useful__grid">
        {links.map((l) => (
          <a key={l.id} href={l.href} className="useful__card">
            <span className="useful__icon">{l.icon}</span>
            <span className="useful__name">{l.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}