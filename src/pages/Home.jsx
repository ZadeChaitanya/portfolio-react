import React from 'react'
import { GiCrownedSkull } from 'react-icons/gi'
import './Home.css'

import Skills from '../components/Skills'
import WhatiDo from '../components/WhatIDo'
import Education from '../components/Education'
import Experience from '../components/Experience'

export default function Home () {
  return (
    <>
      {/* Floating corner image */}
      <img
        id='image'
        src='chaitanya.png'
        alt='Chaitanya Zade logo'
      />

      {/* HERO SECTION */}
      <div className='container home-container'>
        <div className='row align-items-center min-vh-100'>
          {/* Left */}
          <div className='col-12 col-md-6'>
            <h1 className='display-1 fw-bold hero-title'>
              <span className='text-danger'>H!</span>!!......
            </h1>

            <h1>
              <span className='text-warning'>Welcome</span> to My Profile
            </h1>

            <h1 className='mt-4'>
              I am{' '}
              <span className='text-info'>
                Chaitanya Zade
                <GiCrownedSkull className='text-danger skull-icon' />
              </span>
            </h1>
          </div>

          {/* Right */}
          <div className='col-12 col-md-6 text-center'>
            <img
              src='mypicture.png'
              alt='Chaitanya Zade'
              className='profile-img'
            />
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <Skills />

      <WhatiDo />

      <Education />

      <Experience />
    </>
  )
}
