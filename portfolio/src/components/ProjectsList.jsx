import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useProjects } from '../hooks/useProjects';
import './ProjectsList.css';

export const ProjectsList = () => {
    const { projects, loading } = useProjects();

    if (loading) {
        return <div className="loading">Cargando proyectos...</div>;
    }

    return (
        <section className="projects-section">
        <h1>Proyectos:</h1>
        <div className="projects-container">
            {projects.map((project) => (
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            />
        ))}
        </div>
    </section>
    );
};
