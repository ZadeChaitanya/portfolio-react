import React from 'react'
<<<<<<< HEAD
=======
import './App.css'
>>>>>>> f0df78611700f2c702af030632efd1915854aefe
import { HashRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App () {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
