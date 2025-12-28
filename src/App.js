import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Projects from './components/Projects';
import Miscellaneous from './components/Miscellaneous';

function App() {
  const getSystemTheme = () => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [useSystemTheme, setUseSystemTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    return !window.localStorage.getItem('theme');
  });

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!useSystemTheme || typeof window === 'undefined') {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [useSystemTheme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    setUseSystemTheme(false);
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <div className="App">
      <div className="container">
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
        <About />
        <Experience />
        <Research />
        <Teaching />
        <Projects />
        <Miscellaneous />
      </div>
    </div>
  );
}

export default App;
