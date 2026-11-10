import React from 'react';

export default function TopNav() {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <a href="#active" className="active">ԱՆՀԱՏՆԵՐԻՆ</a>
        <a href="#business">ԲԻԶՆԵՍԻՆ</a>
        <a href="#investment">ՆԵՐԴՐՈՒՄԱՅԻՆ</a>
      </div>
      <div className="top-nav-right">
        <a href="#investor"><i className="icon-user"></i> Investor Relations</a>
        <a href="#about"><i className="icon-bank"></i> Բանկի մասին</a>
        <a href="#phone"><i className="icon-phone"></i> +374 10 56 11 11</a>
        <a href="#branches"><i className="icon-location"></i> Մասնաճյուղեր</a>
        <button className="search-btn"><i className="icon-search"></i></button>
        <select className="lang-select">
          <option value="hy">ՀԱՅ</option>
          <option value="en">ENG</option>
          <option value="ru">РУՍ</option>
        </select>
      </div>
    </div>
  );
}