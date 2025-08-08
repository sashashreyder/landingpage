import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [showGreetingGif, setShowGreetingGif] = useState(false);
  const [showProfileGif, setShowProfileGif] = useState(false);

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero-section">
      <div className="hero-container" data-aos="fade">
        <div className="hero-text">
          <h1
            className="hero-greeting"
            onMouseEnter={() => setShowGreetingGif(true)}
            onMouseLeave={() => setShowGreetingGif(false)}
          >
            Hi! My name is Sasha <br/>
            I am Frontend Developer
          </h1>

          <p className="hero-description">
            I build responsive, accessible interfaces using React, TypeScript, and modern CSS. 
            Passionate about clean code, component-based architecture, and creating meaningful user experiences.
            I work with Tailwind CSS, Flexbox, Grid, and modern build tools to create fast, scalable applications.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-cta-buttons">
            <button className="cta-button primary" onClick={handleScrollToPortfolio}>
              View My Work
            </button>
            <button className="cta-button secondary" onClick={handleScrollToContact}>
              Get In Touch
            </button>
          </div>

          {/* Social Media Links */}
          <div className="hero-social-links">
            <a href="https://github.com/sashashreyder" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sashashreider" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:sashashreiderbr@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Technology Icons Divider */}
        <div className="hero-icons-divider">
          <img src="https://i.postimg.cc/Qt7DbbfK/HTML5-sh.jpg" alt="HTML" />
          <img src="https://i.postimg.cc/ZnFSkqtT/CSS3.jpg" alt="CSS" />
          <img src="https://i.postimg.cc/dQ9vWK0L/typescript-icon-icon-2048x2048-2rhh1z66.png" alt="TypeScript" />
          <img src="https://i.postimg.cc/5yMVkCr7/JS.jpg" alt="JavaScript" />
          <img src="https://i.postimg.cc/L62StjLh/react.jpg" alt="React" />
        </div>

        <div className="hero-image" data-aos="fade">
         <img
         className="profile-picture"
         src={`${import.meta.env.BASE_URL}media/1.jpg`}
         alt="Profile"
         onMouseEnter={() => setShowProfileGif(true)}
         onMouseLeave={() => setShowProfileGif(false)}
        />
        </div>

        {showGreetingGif && (
          <div className="hero-gif greeting-gif">
            <img src="https://i.gifer.com/Ao.gif" alt="Greeting GIF" />
          </div>
        )}

        {showProfileGif && (
          <div className="hero-gif profile-gif">
            <img src="https://i.gifer.com/Idaz.gif" alt="Profile GIF" />
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleScrollToPortfolio}>
        <div className="scroll-arrow"></div>
        <span>Skip My Story 🥺</span>
      </div>
    </div>
  );
}

export default HeroSection;
