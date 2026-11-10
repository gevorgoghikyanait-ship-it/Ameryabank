import React from 'react';

export default function MainNav() {
  return (
    <div className="main-nav">
      <div className="logo">
        <img src="/assets/ameriabank-logo.svg" alt="Ameriabank" />
      </div>

      <nav className="nav-menu">
        <a href="#cards" className="active-link">Քարտեր</a>
        <a href="#loans">Վարկեր</a>
        <a href="#accounts">Հաշիվներ</a>
        <a href="#transfers">Փոխանցումներ</a>
        <a href="#savings">Խնայողություններ</a>
        <a href="#digital">Թվային</a>
      </nav>

      <div className="nav-action">
        <button className="online-banking-btn">
          Օնլայն բանկինգ <span>&rsaquo;</span>
        </button>
      </div>
    </div>
  );
}