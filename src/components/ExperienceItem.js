import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ company, role, team, period, description, logo, note }) => {
  return (
    <div className="experience-item">
      <div className="experience-logo">
        <img src={logo} alt={company} />
      </div>
      <div className="experience-details">
        <div className="experience-header">
          <span className="company-name">{company}</span>
          {note && <span className="company-note">({note})</span>}
        </div>
        <div className="role">{role}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
