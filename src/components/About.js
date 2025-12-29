import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-content">
        <div className="about-text">
          <p className="intro">
            I work on LLM infrastructure and agent systems at 🧱{' '}
            <a href="https://www.databricks.com/" target="_blank" rel="noopener noreferrer">
              Databricks
            </a>
            .
          </p>

          <p>
            I'm particularly interested in the engineering challenges around{' '}
            <span className="about-emphasis">scaling AI systems</span>. With these systems in place,
            I also spend time thinking about how we can imbue planning, reasoning, and{' '}
            <span className="about-emphasis">representation learning</span> capabilities into these
            systems.
          </p>

          <p>
            Previously, I worked on scalable ML systems at{' '}
            <a href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer">
              Atlassian
            </a>
            ,{' '}
            <a href="https://www.nuro.ai/" target="_blank" rel="noopener noreferrer">
              Nuro
            </a>
            , and{' '}
            <a href="https://www.nvidia.com/" target="_blank" rel="noopener noreferrer">
              NVIDIA
            </a>
            , and did research in representation learning and reinforcement learning at{' '}
            <a href="https://bair.berkeley.edu/" target="_blank" rel="noopener noreferrer">
              Berkeley Artificial Intelligence Research (BAIR)
            </a>
            .
          </p>

          <p>
            I did my undergrad at UC Berkeley, where I was involved in running large undergrad
            classes, leading{' '}
            <a href="https://ml.studentorg.berkeley.edu/" target="_blank" rel="noopener noreferrer">
              Machine Learning at Berkeley (ML@B)
            </a>
            , and some open-source work.
          </p>

          <p>
            My other interests include economics, languages, tea, and music (specificially Indian
            classical)!
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
        <a href="https://x.com/arvindr02" target="_blank" rel="noopener noreferrer">Twitter</a>
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
