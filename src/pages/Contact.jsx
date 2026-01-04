import React from 'react'
import './Contact.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact () {
  return (
    <div className='container-fluid contact-section'>
      <div className='container'>
        {/* Heading */}
        <div className='row mb-5'>
          <div className='col-12 text-center'>
            <span className='btn contact-btn' style={{backgroundColor:"RGB(243, 1, 75)"}}>CONTACT</span>
            <h1 className='mt-4'>Let’s Work Together</h1>
            <p className='contact-sub'>
              Feel free to reach out for projects, internships, or
              collaboration.
            </p>
          </div>
        </div>

        <div className='row g-4'>
          {/* Contact Info */}
          <div className='col-md-5'>
            <div className='contact-info'>
              <div className='info-item'>
                <FaEnvelope className='info-icon' />
                <div>
                  <h5>Email</h5>
                  <p>chaitanyazade042@gmail.com</p>
                </div>
              </div>

              <div className='info-item'>
                <FaPhoneAlt className='info-icon' />
                <div>
                  <h5>Phone</h5>
                  <p> Available on request </p>
                </div>
              </div>

              <div className='info-item'>
                <FaMapMarkerAlt className='info-icon' />
                <div>
                  <h5>Location</h5>
                  <p>Ahilyanagar  , India - 414001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='col-md-7'>
            <form className='contact-form'>
              <div className='row g-3'>
                <div className='col-md-6'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Name'
                    required
                  />
                </div>

                <div className='col-md-6'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Your Email'
                    required
                  />
                </div>

                <div className='col-12'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Subject'
                    required
                  />
                </div>

                <div className='col-12'>
                  <textarea
                    className='form-control'
                    rows='5'
                    placeholder='Your Message'
                    required
                  ></textarea>
                </div>

                <div className='col-12 text-end'>
                  <button type='submit' className='btn submit-btn'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
