import React from 'react';
import './Header.css';

const Header = ({ theme, onToggleTheme }) => {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="name">Arvind Rajaraman</h1>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
              <line x1="4.2" y1="4.2" x2="6.4" y2="6.4" />
              <line x1="17.6" y1="17.6" x2="19.8" y2="19.8" />
              <line x1="4.2" y1="19.8" x2="6.4" y2="17.6" />
              <line x1="17.6" y1="6.4" x2="19.8" y2="4.2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </div>
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
