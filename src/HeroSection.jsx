import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [showGif, setShowGif] = useState(false);
  const [showOtherGif, setShowOtherGif] = useState(false);

  return (
    <div className='HeroSection'>
      <div className="glass-container">
        <div className='text-container'>
          <h1
            className='greeting'
            onMouseEnter={() => setShowGif(true)}
            onMouseLeave={() => setShowGif(false)}
          >
            Hello
          </h1>
          <hr className="line" />
          <p className='description'>
            I’m Sasha, a junior frontend developer who loves coding and learning new things every day.
            I’m also into design, always looking for fresh ideas and keeping up with the latest trends.
            I work well with others and believe good communication is key to any great project.
          </p>
        </div>

        <div className="skills-icons">
          <img src="https://i.postimg.cc/Qt7DbbfK/HTML5-sh.jpg" alt="HTML" />
          <img src="https://i.postimg.cc/ZnFSkqtT/CSS3.jpg" alt="CSS" />
          <img src="https://i.postimg.cc/5yMVkCr7/JS.jpg" alt="JS" />
          <img src="https://i.postimg.cc/L62StjLh/react.jpg" alt="React" />
        </div>

        <div className="image-container">
          <img
            id='profilePic'
            src='https://i.pinimg.com/736x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg'
            alt="Profile"
            onMouseEnter={() => setShowOtherGif(true)}
            onMouseLeave={() => setShowOtherGif(false)}
          />
          <img id='codePic' src='https://i.postimg.cc/y6FB3LJw/code.png' alt="Code Background" />
        </div>

        {showGif && (
          <div className="gif-container">
            <img
              src="https://i.gifer.com/Ao.gif"
              alt="Greeting GIF"
              className="greeting-gif"
            />
          </div>
        )}

        {showOtherGif && (
          <div className="other-gif-container">
            <img
              src="https://i.gifer.com/Idaz.gif" 
              alt="Profile GIF"
              className="profile-gif"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;

