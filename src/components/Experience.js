import React from 'react';
import './Experience.css';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      company: 'Databricks',
      role: 'Software Engineer',
      team: 'Applied AI Team',
      period: 'Current',
      description: 'Applied AI works on LLM {evaluation, post-training, & deployment} for {search, text-to-SQL, code correction, & code generation}. I am involved in technical efforts across the stack.',
      logo: '/images/databricks.png',
      isCurrent: true
    },
    {
      company: 'Atlassian',
      role: 'Machine Learning Scientist Intern',
      team: 'Core Machine Learning Team',
      period: null,
      description: 'Worked on a search relevance algorithm, RLAIF (reinforcement learning with AI feedback) infrastructure, text-to-SQL, and chatbots for question answering.',
      logo: '/images/atlassian.jpeg',
      isCurrent: false
    },
    {
      company: 'Nuro',
      role: 'Software Engineer Intern',
      team: 'Fleet Infrastructure Team',
      period: '2022',
      description: 'Worked on video streaming infrastructure, model uncertainty estimation, and auto-labeling for video classification tasks.',
      logo: '/images/nuro.jpeg',
      isCurrent: false
    },
    {
      company: 'NVIDIA',
      role: 'Software Engineer Intern',
      team: 'Autonomous Vehicles Division, DriveIX',
      period: '2021',
      description: 'Worked on AutoML for hyperparameter tuning of vision models, increasing data fidelity of vision data, and ML engineering infrastructure.',
      logo: '/images/nvidia.jpeg',
      isCurrent: false
    },
    {
      company: 'Segmed',
      role: 'Software Engineer Intern',
      team: null,
      period: null,
      description: 'Worked on authentication, authorization, and developer productivity tools.',
      logo: '/images/segmed.jpeg',
      isCurrent: false,
      note: 'YC W20'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Engineering Experience</h2>
      <p className="section-intro">
        My engineering experience is primarily in highly performant systems for machine learning, from autonomous vehicles to more recently LLMs (large language models).
      </p>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
