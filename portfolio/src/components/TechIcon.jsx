import React from 'react';
import './TechIcon.css';

export const TechIcon = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="tech-icon"
      loading="lazy"
    />
  );
};
