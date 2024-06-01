import React from 'react';
import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="card-actions">
          <a href="www.google.com">SHARE</a>
          <a href="www.google.com">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default Card;