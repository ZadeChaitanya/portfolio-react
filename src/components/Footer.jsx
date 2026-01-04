import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row gy-4'>
          {/* Brand */}
          <div className='col-12 col-md-4'>
            <h2 className='footer-brand'>Chaitanya Zade</h2>
            <p className='footer-text'>
              Full Stack Developer passionate about building real-world
              applications with clean UI and scalable backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className='col-12 col-md-4'>
            <h5 className='footer-title'>Quick Links</h5>
            <ul className='footer-links'>
              <li><a href='/'>Home</a></li>
              <li><a href='/projects'>Projects</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className='col-12 col-md-4'>
            <h5 className='footer-title'>Connect</h5>
            <div className='footer-social'>
              <a href='https://github.com/' target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>
              <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
                <FaLinkedin />
              </a>
              <a href='mailto:chaitanyazade042@gmail.com'>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <hr />

        {/* Bottom */}
        <div className='footer-bottom'>
          <p>© {year} Chaitanya Zade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
