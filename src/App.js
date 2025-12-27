import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Projects from './components/Projects';
import Miscellaneous from './components/Miscellaneous';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
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

