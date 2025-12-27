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
      note: 'This is an unfinished project so the codebase is a work in a progress. For code samples, see diayn.py in the repo.',
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
        { label: 'Presentation', url: '/data/explicit-vs-implicit-2023.pdf' }
      ],
      description: 'A new method for robots to collaborate with humans by co-evolving a sequence model that estimates a human\'s internal state (with a model-based prior) and a robotic influence policy.',
      image: '/images/closed_loop_influence.gif'
    }
  ];

  return (
    <section id="research" className="section research">
      <h2 className="section-title">Research Experience</h2>
      <p className="section-intro">
        I am excited by the prospect of embodied robots that can generalize easily to unseen tasks and environments, in order to become widely useful to humans. My research interests include deep reinforcement learning, unsupervised learning, language modeling, and human-robot interaction.
      </p>
      <p className="section-intro">
        More specifically, I am interested in creating <strong>embodied agents that model human learning</strong>, effectively representing their goals, intent, and biases. Because language is inherently information-dense, abstractable, highly available from a data standpoint, and contains knowledge about usefulness to humans, I am interested in building <strong>learning systems that use language</strong> to interact with humans, represent knowledge, and plan.
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

