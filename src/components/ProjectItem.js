import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ name, image, awards, links, description, descriptionLinks }) => {
  const renderDescription = () => {
    if (!descriptionLinks || descriptionLinks.length === 0) {
      return <p className="project-description">{description}</p>;
    }
    
    // Handle links at the end of description
    const link = descriptionLinks[0];
    if (link.position === 'end') {
      return (
        <p className="project-description">
          {description}
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
          .
        </p>
      );
    }
    return <p className="project-description">{description}</p>;
  };

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
                <span className="award-highlight">{award.text}</span>, {award.event}
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
        {renderDescription()}
      </div>
    </div>
  );
};

export default ProjectItem;

