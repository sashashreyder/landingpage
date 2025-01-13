import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'


function App() {

  return (
    <>
    <Navbar />
    <HeroSection/>
    <AboutMe />
    </> 
  )
}

export default App
