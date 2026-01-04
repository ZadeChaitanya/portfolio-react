import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg custom-navbar fixed-top'>
      <div className='container-fluid px-4'>
        {/* Brand */}
        <NavLink className='navbar-brand brand-name' to='/'>
          <h1 className='display-6 fw-bolder'>CHAITANYA</h1>
        </NavLink>

        {/* Toggle button */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggle'
          aria-controls='navbarToggle'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Links */}
        <div className='collapse navbar-collapse' id='navbarToggle'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4'>
            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/projects'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
              >
                Projects
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
