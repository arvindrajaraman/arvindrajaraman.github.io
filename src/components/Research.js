import React from 'react';
import './Research.css';
import ResearchItem from './ResearchItem';

const Research = () => {
  const researchItems = [
    {
      title: 'Discovering Skills with Language',
      authors: [
        { name: 'Arvind Rajaraman', isMe: true },
        { name: 'Vivek Myers', link: 'https://people.eecs.berkeley.edu/~vmyers/' },
        { name: 'Anca Dragan', link: 'http://people.eecs.berkeley.edu/~anca/' }
      ],
      links: [
        { label: 'Paper', url: '/data/dlsd.pdf' },
        { label: 'Code', url: 'https://github.com/arvindrajaraman/language-skills-diayn' }
      ],
      description: 'Using language to scale unsupervised reinforcement learning and learn skills more useful to humans.',
      image: '/images/language_skills.gif'
    },
    {
      title: 'Explicit vs. Implicit Modeling of Human Internal State for Robot Planning',
      authors: [
        { name: 'Arvind Rajaraman', isMe: true },
        { name: 'Ran (Thomas) Tian', link: 'https://thomasrantian.github.io/' },
        { name: 'Anca Dragan', link: 'http://people.eecs.berkeley.edu/~anca/' },
        { name: 'Andrea Bajcsy', link: 'https://www.cs.cmu.edu/~abajcsy/' }
      ],
      links: [
        { label: 'Presentation', url: '/data/explicit-vs-implicit-2023.pdf' },
        { label: 'Code', url: 'https://github.com/arvindrajaraman/closed-loop-influence' }
      ],
      description: 'Estimating a human\'s representation of the world to have embodied agents more effectively collaborate with humans.',
      image: '/images/closed_loop_influence.gif'
    }
  ];

  return (
    <section id="research" className="section research">
      <h2 className="section-title">Research Experience</h2>
      <p className="section-intro">
        I am interested in creating <strong>embodied agents that model human learning</strong>, effectively representing their goals, intent, and biases. Because language is inherently information-dense, abstractable, highly available, and human-usable, I am interested in building <strong>learning systems that use language</strong> to interact with humans, represent knowledge, and plan.
      </p>
      <p className="section-intro">
        Concretely, my research interests include deep reinforcement learning, unsupervised learning, representation learning, and language modeling. Below are projects I've worked on.
      </p>

      <div className="research-list">
        {researchItems.map((item, index) => (
          <ResearchItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Research;
