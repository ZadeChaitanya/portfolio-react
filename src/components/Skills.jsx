import React from 'react'
import './Skills.css'

export default function Skills () {
  // This array can later come from API / backend
  const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 75 }
  ]

  return (
    <div className='container skills-section'>
      {/* Heading */}
      <div className='row mt-5'>
        <div className='col-12 text-center'>
          <span className='btn skill-btn fs-3 px-5' style={{backgroundColor:"RGB(243, 1, 75)"}}>
            PROFESSIONAL SKILLS
          </span>

          <h1 className='mt-5'>
            I Have Strong Experience In These Skills
          </h1>
        </div>
      </div>

      {/* Skills list */}
      <div className='row mt-4 justify-content-center'>
        <div className='col-12 col-md-8'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-box'>
              <div className='skill-header'>
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>

              <div className='progress'>
                <div
                  className='progress-bar'
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div className='row'>
        <div className='col-12 text-center mt-5'>
          <a
            href='/Chaitanya_Zade_CV.pdf'
            download
            className='btn cv-btn'
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}
