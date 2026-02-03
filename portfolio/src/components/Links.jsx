import React from 'react';
import './Links.css';

export const Links = () => {
    // Puedes actualizar estos enlaces con tus URLs reales
    const links = [
        { 
            name: "GitHub", 
            url: "https://github.com/D-0BE", 
            icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
        },
        { 
            name: "LinkedIn", 
            url: "https://www.linkedin.com/in/daviddobeson/", 
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
        },
        
    ];

    return (
        <section className="links-section">
            <h1>Mis Enlaces:</h1>
            <div className="links-container">
                {links.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="link-card"
                    >
                        <img src={link.icon} alt={link.name} className="link-icon" />
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};
