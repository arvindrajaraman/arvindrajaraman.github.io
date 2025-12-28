import React from 'react';
import './TeachingItem.css';

const TeachingItem = ({ course, image, positions }) => {
  return (
    <div className="teaching-item">
      <div className="teaching-image">
        <img src={image} alt={course} />
      </div>
      <div className="teaching-details">
        <h3 className="course-name">{course}</h3>
        {positions.map((position, index) => (
          <div key={index} className="teaching-position">
            <div className="position-header">
              <span className="position-role">{position.role}</span>
              {', '}
              <a
                href={position.link}
                target="_blank"
                rel="noopener noreferrer"
                className="position-term"

              >
                {position.term}
              </a>
              {' ('}
              {position.instructors.map((instructor, idx) => (
                <span key={idx}>
                  {instructor.link ? (
                    <a
                      href={instructor.link}
                      target="_blank"
                      rel="noopener noreferrer"

                    >
                      {instructor.name}
                    </a>
                  ) : (
                    instructor.name
                  )}
                  {idx < position.instructors.length - 1 && ', '}
                </span>
              ))}
              {')'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingItem;
