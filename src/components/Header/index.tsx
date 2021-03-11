import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header__bounds">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
