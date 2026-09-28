import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ name, image, awards, links, description }) => {
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="project-details">
        <h3 className="project-name">{name}</h3>
        {awards && awards.length > 0 && (
          <div className="project-awards">
            {awards.map((award, index) => (
              <div key={index} className="project-award">
                <span className="award-highlight">{award}</span>
              </div>
            ))}
          </div>
        )}
        <div className="project-links">
          {links.map((link, index) => (
            <span key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                [{link.label}]
              </a>
              {index < links.length - 1 && ' '}
            </span>
          ))}
        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
