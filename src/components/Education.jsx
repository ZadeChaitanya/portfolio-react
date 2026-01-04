import React from 'react'
import './Education.css'

export default function Education () {
  return (
    <div className='container-fluid education-section'>
      <div className='container'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span className='btn edu-btn' style={{backgroundColor:"RGB(243, 1, 75)"}}>EDUCATION</span>
            <h1 className='mt-4'>My Academic Journey</h1>
          </div>
        </div>

        {/* Timeline */}
        <div className='row g-4'>
          {/* Degree */}
          <div className='col-md-6'>
            <div className='edu-card'>
              <div className='edu-year'>2023 – 2026</div>
              <h2>Bachelor of Science (Computer Science)</h2>
              <h5>
                New Arts Commerce and Science College (Autonomous),
                Ahilyanagar
              </h5>
              <p>Status: <span>Pursuing</span></p>
            </div>
          </div>
         

          {/* HSC */}
          <div className='col-md-6'>
            <div className='edu-card'>
              <div className='edu-year'>2021 – 2023</div>
              <h2>HSC</h2>
              <h5>
                Chhatrapati Shivaji Maharaj Highschool & Junior College, Miri
              </h5>
              <p>Percentage: <span>60.33%</span></p>
            </div>
          </div>
        
        {/* SSC */}
          <div className='col-md-6'>
            <div className='edu-card'>
              <div className='edu-year'>2020 – 2021</div>
              <h2>SSC</h2>
              <h5>Chhatrapati Shivaji Maharaj Highschool, Miri</h5>
              <p>Percentage: <span>80.60%</span></p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
