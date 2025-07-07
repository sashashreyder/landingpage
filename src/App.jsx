// this is a cool new feature! wow
// pull request number 1
// I changed everything back

import React from "react"
import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"
import "aos/dist/aos.css"
import AOS from "aos"

function App() {
	useEffect(() => {
		AOS.init({
			duration: 600,
			once: true,
			easing: "ease-out",
			offset: 0,
		})
	}, [])

	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutMe />
			<Contact />
			<Footer />
		</>
	)
}

export default App
