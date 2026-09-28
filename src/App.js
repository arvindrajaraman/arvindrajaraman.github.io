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
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return window.localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
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
