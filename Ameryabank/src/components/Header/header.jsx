import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';
import './header.css';

export default function Header() {
  return (
    <header className="site-header">
      <TopNav />
      <MainNav />
    </header>
  );
}