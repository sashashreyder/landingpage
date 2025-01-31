import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'


function App() {

  return (
    <>
    <Navbar />
    <HeroSection/>
    <AboutMe />
    <Contact />
    <Footer />
    </> 
  )
}

export default App
  