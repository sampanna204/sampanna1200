
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Calculator Application',
      description: 'A simple calculator built with C++ demonstrating basic programming concepts and user interface design.',
      category: 'Desktop',
      technologies: ['C++', 'Object-Oriented Programming'],
      status: 'Completed',
      image: '/assets/WhatsApp Image 2025-08-23 at 12.55.24_1755935229563.jpeg',
      codeUrl: '#',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Student Management System',
      description: 'A console-based application for managing student records using fundamental programming concepts.',
      category: 'Backend',
      technologies: ['C Programming', 'File Handling'],
      status: 'In Progress',
      image: '/assets/WhatsApp Image 2025-08-23 at 12.55.23_1755935229563.jpeg',
      codeUrl: '#',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'Personal Website',
      description: 'This portfolio website showcasing my skills and projects using modern web technologies.',
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      status: 'Completed',
      image: '/assets/WhatsApp Image 2025-08-23 at 12.55.22_1755935229563.jpeg',
      codeUrl: '#',
      demoUrl: '#'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Desktop'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section-simple">
      <div className="container">
        <div className="projects-header-simple">
          <h2 className="projects-title-simple">Projects</h2>
          <p className="projects-subtitle-simple">
            A showcase of my programming projects and learning journey
          </p>
        </div>

        <div className="projects-grid-simple">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-simple">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-actions">
                <a href={project.codeUrl} className="project-btn code-btn">
                  <span>🔗</span>
                  Code
                </a>
                <a href={project.demoUrl} className="project-btn demo-btn">
                  <span>🚀</span>
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="coming-soon">More projects coming soon...</p>
          <button className="view-all-btn">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
