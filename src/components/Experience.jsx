import React from 'react'
import './Experience.css'

export default function Experience () {
  return (
    <div className='container-fluid experience-section'>
      <div className='container'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span
              className='btn exp-btn'
              style={{ backgroundColor: 'RGB(243, 1, 75)' }}
            >
              EXPERIENCE
            </span>
            <h1 className='mt-4'>Learning & Practice</h1>
          </div>
        </div>

        {/* Content */}
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='exp-card text-center'>
              <p className='exp-desc'>
                I am a fresher currently focusing on learning and practicing web
                development by building websites and small applications. I work
                with HTML, CSS, Bootstrap, JavaScript, and React to create
                responsive user interfaces. I am also learning backend
                development using Node.js and Express and practicing database
                concepts with MongoDB and MySQL. Through regular practice, I am
                improving my understanding of full stack development and real
                world application flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
