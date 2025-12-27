import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const featuredProjects = [
    {
      name: 'Origin',
      image: '/images/origin.png',
      awards: [
        { text: 'Best Frontier Tech Hack', event: 'Stanford TreeHacks 2023' }
      ],
      links: [
        { label: 'Blog Post', url: 'https://blog.langchain.dev/origin-web-browser/' },
        { label: 'Devpost', url: 'https://devpost.com/software/pathfinder-em2qjb' },
        { label: 'Code', url: 'https://github.com/pgasawa/origin' },
        { label: 'Tweet', url: 'https://x.com/Arvind_ML/status/1627559733262688256' }
      ],
      description: 'Built an LLM-based browser extension that cleans up your tabs and builds context-aware workspaces. Won Best Frontier Tech Hack from Pear VC and received an investment offer at a $2.5 million valuation. Also received interest from Sequoia and shout-out from Harrison Chase (creator of LangChain). 70+ stars on GitHub.'
    },
    {
      name: 'Ephemeral',
      image: '/images/ephemeral.png',
      awards: [
        { text: 'Best Use of Together.ai', event: 'TreeHacks 2024' }
      ],
      links: [
        { label: 'Devpost', url: 'https://devpost.com/software/invisible-me' },
        { label: 'Code', url: 'https://github.com/JasonDing9/ephemeral' }
      ],
      description: 'An autonomous AI agent that interacts through voice, can sit in on meetings, draft emails, schedule calendar events, search for answers, and more. Won Best Use of Together.ai at TreeHacks 2024.'
    },
    {
      name: 'Verbal Coding',
      image: '/images/verbal_coding.png',
      awards: [
        { text: 'Winner of Education Track', event: 'HackNYU 2019' },
        { text: 'Best Use of Google Cloud', event: 'HackNYU 2019' }
      ],
      links: [
        { label: 'Devpost', url: 'https://devpost.com/software/verbal-coding' }
      ],
      description: 'Developed a verbal code editor that uses NLP to convert spoken pseudocode into well-formed Python code. Continued work and received mentorship from MIT Professor ',
      descriptionLinks: [
        { text: 'Kyle Keane', url: 'http://www.kylekeane.com/', position: 'end' }
      ]
    }
  ];

  const otherProjects = [
    {
      name: 'BiteBuddy',
      link: 'https://devpost.com/software/bonapp',
      award: 'Best Use of Reflex, CalHacks 2023',
      description: 'meal planner app with social networking integrations.'
    },
    {
      name: 'Unscrambit',
      link: 'https://devpost.com/software/sdf-9na5ox',
      award: 'First Place, JumpStart Hackathon 2020',
      description: 'code analysis app that uses NLP to identify common algorithms implemented in one\'s codebase.'
    },
    {
      name: 'Autodeploy',
      link: null,
      award: null,
      description: 'developer tool that automatically creates Terraform files using natural language descriptions and analyzing one\'s codebase.'
    },
    {
      name: 'Crib',
      link: null,
      award: null,
      description: 'smart lock that uses real-time crime data to automatically lock your front door.'
    },
    {
      name: 'Disperse',
      link: null,
      award: null,
      description: 'grocery store search app that ranks places in order of least crowded to most crowded. Built during COVID-19 pandemic to decrease infection rates.'
    },
    {
      name: 'NextEniac',
      link: null,
      award: null,
      description: 'grade calculation and insights tool used by 1,000 students at my high school.'
    },
    {
      name: 'Buzz',
      link: null,
      award: null,
      description: 'social networking app that makes the shopping experience social.'
    },
    {
      name: 'Formulate',
      link: null,
      award: null,
      description: 'first substantial coding project, which would solve my Pre-Algebra homework.'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Selected Side Projects and Open-Source Contributions</h2>
      <p className="section-intro">
        Below are a set of selected side projects. To see more, visit my{' '}
        <a href="https://github.com/arvindrajaraman" target="_blank" rel="noopener noreferrer">Github</a>{' '}
        and <a href="https://devpost.com/ArvindRajaraman" target="_blank" rel="noopener noreferrer">Devpost</a>.
      </p>
      <p className="section-intro">
        * Indicates equal contribution and co-authorship.
      </p>
      
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
      
      <div className="other-projects">
        <p className="other-projects-intro">Some other projects I pursued are below. Any awards won are noted in parentheses.</p>
        <ul className="projects-list">
          {otherProjects.map((project, index) => (
            <li key={index} className="project-list-item">
              {project.link ? (
                <strong>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
                </strong>
              ) : (
                <strong>{project.name}</strong>
              )}
              {project.award && (
                <span className="project-award"> (<span style={{ color: '#b8860b' }}>{project.award}</span>)</span>
              )}
              {' — '}
              {project.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

