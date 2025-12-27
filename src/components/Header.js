import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Arvind Rajaraman</h1>
      <nav className="nav">
        <a href="#about">About</a>
        <span className="separator">/</span>
        <a href="#experience">Experience</a>
        <span className="separator">/</span>
        <a href="#research">Research</a>
        <span className="separator">/</span>
        <a href="#teaching">Teaching</a>
        <span className="separator">/</span>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;

