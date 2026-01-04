import React from 'react'
import './Experience.css'

export default function Experience () {
  // Later this data can come from backend / API
  const experiences = [
   
   {
  role: 'Full Stack Developer Intern',
  company: 'A2Z IT HUB',
  duration: 'Jan 2025 – Present',
  description:
    'Working on real-world web applications as part of a virtual internship. Involved in designing user interfaces, developing frontend components using React, and building backend APIs with Node.js and Express. Gaining hands-on experience with database integration, authentication, and application optimization while collaborating in a remote development environment.'
}


  ]

  return (
    <div className='container-fluid experience-section'>
      <div className='container'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span className='btn exp-btn' style={{backgroundColor:"RGB(243, 1, 75)"}}>EXPERIENCE</span>
            <h1 className='mt-4'>My Work Experience</h1>
          </div>
        </div>

        {/* Experience Cards */}
        <div className='row g-4 justify-content-center'>
          {experiences.map((exp, index) => (
            <div key={index} className='col-md-10'>
              <div className='exp-card'>
                <div className='exp-header'>
                  <div>
                    <h2>{exp.role}</h2>
                    <h5>{exp.company}</h5>
                  </div>
                  <span className='exp-duration'>{exp.duration}</span>
                </div>

                <p className='exp-desc'>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
