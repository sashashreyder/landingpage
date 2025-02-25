import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [showGreetingGif, setShowGreetingGif] = useState(false);
  const [showProfileGif, setShowProfileGif] = useState(false);

  return (
    <div id="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1
            className="hero-greeting"
            onMouseEnter={() => setShowGreetingGif(true)}
            onMouseLeave={() => setShowGreetingGif(false)}
          >
            Hello
          </h1>
          <hr className="hero-line" />
          <p className="hero-description">
            I’m Sasha, a frontend developer who loves coding and learning new things every day.
            I’m also into design, always looking for fresh ideas and keeping up with the latest trends.
            I work well with others and believe good communication is key to any great project.
          </p>
        </div>

        <div className="hero-skills">
          <img src="https://i.postimg.cc/Qt7DbbfK/HTML5-sh.jpg" alt="HTML" />
          <img src="https://i.postimg.cc/ZnFSkqtT/CSS3.jpg" alt="CSS" />
          <img src="https://i.postimg.cc/5yMVkCr7/JS.jpg" alt="JavaScript" />
          <img src="https://i.postimg.cc/L62StjLh/react.jpg" alt="React" />
        </div>

        <div className="hero-image">
          <img
            className="profile-picture"
            src="https://i.pinimg.com/736x/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg"
            alt="Profile"
            onMouseEnter={() => setShowProfileGif(true)}
            onMouseLeave={() => setShowProfileGif(false)}
          />
        </div>

        {showGreetingGif && (
          <div className="hero-gif greeting-gif">
            <img
              src="https://i.gifer.com/Ao.gif"
              alt="Greeting GIF"
            />
          </div>
        )}

        {showProfileGif && (
          <div className="hero-gif profile-gif">
            <img
              src="https://i.gifer.com/Idaz.gif"
              alt="Profile GIF"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;





