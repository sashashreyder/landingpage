import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'


function App() {

  return (
    <>
    <Navbar />
    <HeroSection/>
    <AboutMe />
    <Contact />
    </> 
  )
}

export default App
  