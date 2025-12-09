import React from 'react';
import './Card.css';


function Card({ image, name, role, description, link }) {
  return (
    <a href={link} className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <h4 className="card-role">{role}</h4>
        <p className="card-description">{description}</p>
      </div>
    </a>
  );
}

export default Card;