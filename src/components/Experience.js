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
      description: 'Sampling of things I\'ve worked on: distributed inference, traffic prediction, load balancing, reliability, cost optimization, and observability over LLMs across multiple cloud providers, datacenters, and accelerators. Most code contributions across all Databricks engineers at my level (~375).',
      logo: '/images/databricks.png',
      isCurrent: true
    },
    {
      company: 'Atlassian',
      role: 'Machine Learning Scientist Intern',
      team: 'Core Machine Learning Team',
      period: null,
      description: 'ML infra, search, retrieval, text-to-SQL',
      logo: '/images/atlassian.jpeg',
      isCurrent: false
    },
    {
      company: 'Nuro',
      role: 'Software Engineer Intern',
      team: 'Fleet Infrastructure Team',
      period: '2022',
      description: 'Low-latency video processing, video model pre-training, inter-annotator disagreement',
      logo: '/images/nuro.jpeg',
      isCurrent: false
    },
    {
      company: 'NVIDIA',
      role: 'Software Engineer Intern',
      team: 'Autonomous Vehicles Division, DriveIX',
      period: '2021',
      description: 'ML infra, image processing, computer vision',
      logo: '/images/nvidia.jpeg',
      isCurrent: false
    },
    {
      company: 'Segmed',
      role: 'Software Engineer Intern',
      team: null,
      period: null,
      description: 'Security, developer acceleration',
      logo: '/images/segmed.jpeg',
      isCurrent: false,
      note: 'YC W20'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Engineering Experience</h2>
      <p className="section-intro">
        My engineering experience is primarily in highly performant AI systems for LLMs and previously autonomous vehicles.
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
