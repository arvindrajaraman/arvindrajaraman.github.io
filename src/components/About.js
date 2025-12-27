import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-content">
        <div className="about-text">
          <p className="intro">
            I'm an engineer on Databricks' Applied AI team, working on LLM infrastructure.
          </p>
          
          <p>
            Before this, I was a Research Assistant at{' '}
            <a href="https://bair.berkeley.edu/" target="_blank" rel="noopener noreferrer">
              Berkeley Artificial Intelligence Research
            </a>{' '}
            with Professor{' '}
            <a href="http://people.eecs.berkeley.edu/~anca/" target="_blank" rel="noopener noreferrer">
              Anca Dragan
            </a>
            . I was a Machine Learning Scientist Intern at Atlassian, where I worked on large language model (LLM) infrastructure. In 2022, I interned at Nuro, where I worked on low-latency video streaming and model uncertainty estimation. In 2021, I was at NVIDIA working on vision models for autonomous driving.
          </p>
          
          <p>
            I completed my undergrad at UC Berkeley, where I was the Head TA for Berkeley's CS 188 (Artificial Intelligence) and CS 189 (Machine Learning), and on the executive board of{' '}
            <a href="https://ml.berkeley.edu/" target="_blank" rel="noopener noreferrer">
              Machine Learning at Berkeley (ML@B)
            </a>
            . I am an{' '}
            <a href="https://eecs.berkeley.edu/resources/undergrads/accel" target="_blank" rel="noopener noreferrer">
              Accel Scholar
            </a>
            ,{' '}
            <a href="https://www.conviction.com/" target="_blank" rel="noopener noreferrer">
              Conviction
            </a>{' '}
            Fellow, and part of Berkeley's{' '}
            <a href="https://met.berkeley.edu/" target="_blank" rel="noopener noreferrer">
              Management, Entrepreneurship, and Technology (M.E.T.) Program.
            </a>
          </p>
        </div>
        
        <div className="about-image">
          <img 
            src="/images/ArvindRajaraman.jpeg" 
            alt="Arvind Rajaraman" 
            className="profile-photo"
          />
        </div>
      </div>
      
      <div className="links">
        <a href="mailto:arvind6902@gmail.com">Email</a>
        <span className="separator">/</span>
        <a href="https://twitter.com/Arvind_ML" target="_blank" rel="noopener noreferrer">Twitter</a>
        <span className="separator">/</span>
        <a href="https://github.com/arvindrajaraman" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="separator">/</span>
        <a href="https://www.linkedin.com/in/arvind-rajaraman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="separator">/</span>
        <a href="https://devpost.com/ArvindRajaraman" target="_blank" rel="noopener noreferrer">Devpost</a>
      </div>
    </section>
  );
};

export default About;

