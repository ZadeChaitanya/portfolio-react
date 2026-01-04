import React from 'react'
import {
  MdOutlineScreenshotMonitor,
  MdCode,
} from 'react-icons/md'
import { FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa6'
import { SiMongodb, SiMysql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
import './WhatiDo.css'

export default function WhatiDo () {
  return (
    <div className='container-fluid whatido-section'>
      <div className='container p-4'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span className='btn whatido-btn' style={{backgroundColor:"RGB(243, 1, 75)"}}>WHAT I DO</span>
            <h1 className='mt-4'>
              I Offer Full Stack <br /> Experience & Expertise
            </h1>
          </div>
        </div>

        {/* Services */}
        <div className='row g-4'>
          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <MdOutlineScreenshotMonitor className='service-icon' />
              <h5>Frontend Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <FaDatabase className='service-icon' />
              <h5>Backend Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <SiHtml5 className='service-icon' />
              <h5>HTML Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <SiCss3 className='service-icon' />
              <h5>CSS Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <SiJavascript className='service-icon' />
              <h5>JavaScript Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <FaReact className='service-icon' />
              <h5>React Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <FaNodeJs className='service-icon' />
              <h5>Node.js Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <MdCode className='service-icon' />
              <h5>Express.js Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <SiMongodb className='service-icon' />
              <h5>MongoDB Development</h5>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <div className='service-card'>
              <SiMysql className='service-icon' />
              <h5>MySQL Development</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
