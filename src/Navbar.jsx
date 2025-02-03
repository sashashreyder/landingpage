import React from 'react';
import './Navbar.css';

function Navbar() {
    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar-column">
            <a href="#HeroSection" className="nav-icon" onClick={(e) => handleSmoothScroll(e, '#HeroSection')}>
                <img src="https://i.postimg.cc/bvTPQzrs/cruelty-free-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="About" />
            </a>
            <a href="#Portfolio" className="nav-icon" onClick={(e) => handleSmoothScroll(e, '#Portfolio')}>
                <img src="https://i.postimg.cc/rpWwpM5r/developer-mode-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="Projects" />
            </a>
            <a href="#Contact" className="nav-icon" onClick={(e) => handleSmoothScroll(e, '#Contact')}>
                <img src="https://i.postimg.cc/RCP44N2Y/mail-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="Contact" />
            </a>
        </div>
    );
}

export default Navbar;





