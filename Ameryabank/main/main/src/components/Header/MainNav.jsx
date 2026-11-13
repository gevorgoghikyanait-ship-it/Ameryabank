// const links = [
//   { label: "Քարտեր", href: "#" },
//   { label: "Վարկեր", href: "#" },
//   { label: "Հաշիվներ", href: "#" },
//   { label: "Փոխանցումներ", href: "#" },
//   { label: "Խնայողություններ", href: "#" },
//   { label: "Թվային", href: "#" },
// ];

// export default function MainNav() {
//   return (
//     <nav className="main-nav">
//       <a href="/" className="logo" aria-label="Ameriabank">
//         <span className="logo__mark">Λ</span>
//         <span className="logo__text">
//           <span className="logo__thin">AMERIA</span>BANK
//         </span>
//       </a>

//       <ul className="main-nav__links">
//         {links.map((l) => (
//           <li key={l.label}>
//             <a href={l.href} className="main-nav__link">
//               {l.label}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <a href="#" className="main-nav__cta">
//         Օնլայն բանկինգ
//         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//           <path d="M9 5l7 7-7 7" />
//         </svg>
//       </a>
//     </nav>
//   );
// }