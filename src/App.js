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
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [themeOverride, setThemeOverride] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  });

  const theme = themeOverride || systemTheme;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeOverride(nextTheme);
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
