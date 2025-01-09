import React from 'react'
import { useState, useEffect } from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='HeroSection'>
            <div className='text-container'>
                <h1 className='greeting'>Hello</h1>
                <hr className="line"></hr>
                <p className='description'>
                    I’m Sasha, a junior frontend developer who loves coding and learning new things every day.  
                    I’m also into design, always looking for fresh ideas and keeping up with the latest trends.  
                    I work well with others and believe good communication is key to any great project.
                </p>  
            </div>
            <div className="skills-icons">
                   <img src="src/media/HTML5_sh.jpg" alt="HTML" />
                   <img src="src/media/CSS3.jpg" alt="CSS" />
                   <img src="src/media/JS.jpg" alt="JS" />
                   <img src="src/media/react.jpg" alt="Reaact" />
             </div>
            <div className="image-container">
                <img id='profilePic' src='https://i.pinimg.com/736x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg' />
                <img id='codePic' src='/src/media/code.png' />
            </div>
        </div>
    );
}

export default HeroSection;


