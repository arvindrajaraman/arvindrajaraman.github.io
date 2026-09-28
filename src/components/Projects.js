import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const featuredProjects = [
    {
      name: 'Origin',
      image: '/images/origin.png',
      awards: ['Award winner at Stanford TreeHacks 2023'],
      links: [
        { label: 'Devpost', url: 'https://devpost.com/software/pathfinder-em2qjb' },
        { label: 'LangChain Blog Post', url: 'https://blog.langchain.dev/origin-web-browser/' }
      ],
      description: 'Proof of concept for an agentic browser in early 2023. Featured in the LangChain blog and won award at Stanford TreeHacks.'
    },
    {
      name: 'Ephemeral',
      image: '/images/ephemeral.png',
      awards: ['Award winner at Stanford TreeHacks 2024'],
      links: [
        { label: 'Devpost', url: 'https://devpost.com/software/invisible-me' },
        { label: 'Code', url: 'https://github.com/JasonDing9/ephemeral' }
      ],
      description: 'AI companion that sits in on meetings and proactively contributes to the conversation. Won award at Stanford TreeHacks.'
    }
  ];

  const otherProjects = [
    {
      name: 'Verbal Coding',
      link: 'https://devpost.com/software/verbal-coding',
      award: 'Award winner at HackNYU 2019',
      description: <>
        developed a verbal code editor that converts spoken pseudocode into well-formed Python
        code. Continued work with mentorship from MIT Professor{' '}
        <a href="http://www.kylekeane.com/" target="_blank" rel="noopener noreferrer">
          Kyle Keane
        </a>.
      </>
    },
    {
      name: 'BiteBuddy',
      link: 'https://devpost.com/software/bonapp',
      award: 'Award winner at CalHacks 2023',
      description: 'meal planner app with social networking integrations.'
    },
    {
      name: 'Unscrambit',
      link: 'https://devpost.com/software/sdf-9na5ox',
      award: 'Award winner at JumpStart Hackathon 2020',
      description: 'code analysis tool that uses NLP to identify common algorithms implemented in one\'s codebase.'
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
      description: 'grocery store search app that ranks places in order of least crowded to most crowded. Built during COVID-19 pandemic when social distancing was a necessity.'
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
      <h2 className="section-title">Projects</h2>
      <p className="section-intro">
        Below is a curated set of some side projects and open-source work. To see more, visit my{' '}
        <a href="https://github.com/arvindrajaraman" target="_blank" rel="noopener noreferrer">Github</a>{' '}
        and <a href="https://devpost.com/ArvindRajaraman" target="_blank" rel="noopener noreferrer">Devpost</a>.
      </p>
      
      <div className="featured-projects">
        <p className="projects-kicker">Notable Projects</p>
        {featuredProjects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
      
      <div className="other-projects">
        <p className="projects-kicker">Other Projects</p>
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
                <span className="project-award"> (<span className="award-highlight">{project.award}</span>)</span>
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
