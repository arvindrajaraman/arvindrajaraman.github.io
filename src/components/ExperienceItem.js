import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ company, role, team, period, description, logo, isCurrent, note }) => {
  return (
    <div className="experience-item">
      <div className="experience-logo">
        <img src={logo} alt={company} />
      </div>
      <div className="experience-details">
        <div className="experience-header">
          <span className="company-name">{company}</span>
          {note && <span className="company-note">({note})</span>}
          {isCurrent && <span className="current-badge">(Current)</span>}
        </div>
        <div className="role">{role}</div>
        {team && <div className="team">{team}</div>}
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;

