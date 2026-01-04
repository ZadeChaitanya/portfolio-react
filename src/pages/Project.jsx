import React from 'react'
import './Project.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects () {
  // Later this can come from backend / API
  const projects = [
    {
      title: 'E-Commerce Web Application',
      description:
        'A full stack e-commerce application with user authentication, product management, cart functionality, and order processing.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/yourusername/ecommerce',
      live: '#'
    },
    {
      title: 'College Management System',
      description:
        'A system to manage students, courses, attendance, and admin operations with secure login and role-based access.',
      tech: ['React', 'Node.js', 'MySQL'],
      github: 'https://github.com/yourusername/college-system',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website showcasing skills, projects, education, and experience with modern UI and responsive design.',
      tech: ['React', 'Bootstrap', 'CSS'],
      github: 'https://github.com/yourusername/portfolio',
      live: '#'
    }
  ]

  return (
    <div className='container-fluid projects-section'>
      <div className='container'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span className='btn project-btn' style={{backgroundColor:"RGB(243, 1, 75)"}} >PROJECTS</span>
            <h1 className='mt-4'>Things I’ve Built</h1>
          </div>
        </div>

        {/* Project cards */}
        <div className='row g-4'>
          {projects.map((project, index) => (
            <div key={index} className='col-md-6 col-lg-4'>
              <div className='project-card'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech stack */}
                <div className='tech-stack'>
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className='project-links'>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target='_blank' rel='noreferrer'>
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
