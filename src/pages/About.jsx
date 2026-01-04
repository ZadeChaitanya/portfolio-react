import React from 'react'
import './About.css'

export default function About () {
  return (
    <div className='container-fluid about-section'>
      <div className='container'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span className='btn about-btn' style={{backgroundColor:"RGB(243, 1, 75)"}} >ABOUT ME</span>
            <h1 className='mt-4'>Get to Know Me</h1>
          </div>
        </div>

        {/* Content */}
        <div className='row align-items-center'>
          {/* Left */}
          <div className='col-md-6'>
            <h2>Hello, I’m   <span style={{color:"RGB(243, 1, 75)"}}> Chaitanya Zade </span> .</h2>

            <p className='about-text'>
               <span style={{color:"RGB(243, 1, 75)"}}> ● </span>
              I am a passionate Full Stack Developer and Computer Science
              student, currently pursuing my degree while gaining real-world
              experience through internships and hands-on projects.
            </p>

            <p className='about-text'>
                <span style={{color:"RGB(243, 1, 75)"}}> ● </span>
              I enjoy building scalable web applications, designing clean user
              interfaces, and working on backend systems that solve real
              problems. I have experience working with modern frontend and
              backend technologies and I am always eager to learn more.
            </p>

            <p className='about-text'>
                <span style={{color:"RGB(243, 1, 75)"}}> ● </span>
              My goal is to grow as a professional developer, contribute to
              impactful projects, and continuously improve my technical and
              problem-solving skills.
            </p>
          </div>

          {/* Right */}
          <div className='col-md-6'>
            <div className='about-info'>
              <div className='info-row'>
                <span>Name:</span>
                <span>Chaitanya Zade</span>
              </div>

              <div className='info-row'>
                <span>Role:</span>
                <span>Full Stack Developer</span>
              </div>

              <div className='info-row'>
                <span>Education:</span>
                <span>B.Sc. Computer Science</span>
              </div>

              <div className='info-row'>
                <span>Experience:</span>
                <span>Internship & Projects</span>
              </div>

              <div className='info-row'>
                <span>Email:</span>
                <span>chaitanyazade042@gmail.com</span>
              </div>

              <div className='info-row'>
                <span>Location:</span>
                <span>Ahilyanagar , India - 414001 </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className='row mt-5'>
          <div className='col-12 text-center'>
            <a href='/Chaitanya_Zade_CV.pdf' download className='btn about-cv'>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
