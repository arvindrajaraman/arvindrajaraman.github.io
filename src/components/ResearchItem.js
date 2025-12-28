import React from 'react';
import './ResearchItem.css';

const ResearchItem = ({ title, authors, links, description, note, image }) => {
  return (
    <div className="research-item">
      <div className="research-image">
        <img src={image} alt={title} />
      </div>
      <div className="research-details">
        <h3 className="research-title">{title}</h3>
        <div className="research-authors">
          {authors.map((author, index) => (
            <span key={index}>
              {author.link ? (
                <a href={author.link} target="_blank" rel="noopener noreferrer">
                  {author.isMe ? <strong>{author.name}</strong> : author.name}
                </a>
              ) : (
                author.isMe ? <strong>{author.name}</strong> : author.name
              )}
              {index < authors.length - 1 && ', '}
            </span>
          ))}
        </div>
        <div className="research-links">
          {links.map((link, index) => (
            <span key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                [{link.label}]
              </a>
              {index < links.length - 1 && ' '}
            </span>
          ))}
        </div>
        <p className="research-description">{description}</p>
        {note && (
          <p className="research-note">
            <strong>Note</strong>: {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResearchItem;
