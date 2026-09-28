import React, { useMemo, useState } from 'react';
import './About.css';

const EMAIL_CODEPOINTS = [
  97, 114, 118, 105, 110, 100, 54, 57, 48, 50, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
];

const shuffle = (values) => {
  const copy = values.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const About = () => {
  const email = useMemo(() => EMAIL_CODEPOINTS.map((code) => String.fromCharCode(code)).join(''), []);
  const [scrambledEmail] = useState(() =>
    shuffle(EMAIL_CODEPOINTS).map((code) => String.fromCharCode(code)).join('')
  );
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="about" className="section about">
      <div className="about-content">
        <div className="about-text">
          <p className="intro">
            I work on building long-horizon, self-improving agents at 🧱{' '}
            <a href="https://www.databricks.com/" target="_blank" rel="noopener noreferrer">
              Databricks
            </a>
            .
          </p>

          <p>
            Broadly, I'm interested in improving capabilities for agents on long-horizon tasks. At
            Databricks, I'm working on a declarative agent harness to enable recursive self-improvement
            and scaling/infra problems around fleets of long-running agents. Lastly, I work on data
            interfaces that make working with AI more natural and intuitive.
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
            My other interests include economics, languages, tea, and music!
          </p>
          <p className="email-row">
            <strong>Email:</strong> {showEmail ? email : scrambledEmail}
            {!showEmail && (
              <>
                {' '}
                <button
                  type="button"
                  className="email-reveal"
                  onClick={() => setShowEmail(true)}
                  aria-label="Unscramble email address"
                >
                  [unscramble]
                </button>
              </>
            )}
          </p>
        </div>
        
        <div className="about-image">
          <a
            href="/images/headshot.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/images/headshot.jpg"
              alt="Arvind Rajaraman" 
              className="profile-photo"
            />
          </a>
        </div>
      </div>
      
      <div className="links">
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
