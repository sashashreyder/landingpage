import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-column">
            <a href="#HeroSection" className="nav-icon">
                <img src="https://i.postimg.cc/bvTPQzrs/cruelty-free-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="About" />
            </a>
            <a href="#Portfolio" className="nav-icon">
                <img src="https://i.postimg.cc/rpWwpM5r/developer-mode-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="Projects" />
            </a>
            <a href="#Contact" className="nav-icon">
                <img src="https://i.postimg.cc/RCP44N2Y/mail-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="Contact" />
            </a>
        </div>
    );
}

export default Navbar;




