import React from 'react';
import { TechIcon } from './TechIcon';
import './AboutMe.css';

export const AboutMe = () => {
    const techStack = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Angularjsoldicon.png", alt: "Angular" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1280px-React.svg.png", alt: "React" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "NodeJS" },
        { src: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icono-del-lenguaje-de-programacion-java.png", alt: "Java" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png", alt: "Python" },
        { src: "https://developer.android.com/static/codelabs/basic-android-kotlin-compose-first-program/img/840cee8b164c10b.png?hl=es-419", alt: "Kotlin" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/900px-Sql_data_base_with_logo.png", alt: "SQL" }
    ];

    return (
        <section className="about-me">
            <h1>About me:</h1>
            <p>
                Soy un estudiante apasionado por la tecnología, a punto de dar el salto profesional 
                como Desarrollador Full Stack Junior. <br/>
                Estoy siempre buscando aprender nuevas herramientas para mejorar mis habilidades.
            </p>
            <p>
                En cuanto a las tecnologías que he usado, en términos de Front-end: Angular, React, NodeJS.
                Y en Back-end: Java, Python, Kotlin, SQL.
            </p>
        
            <div className="tech-stack" aria-label="Tech Stack">
                {techStack.map((tech) => (
                    <TechIcon key={tech.alt} src={tech.src} alt={tech.alt} />
                ))}
            </div>
        </section>
    );
};
