import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-column">
            <a href="#about" className="nav-icon">
              <img src="https://i.postimg.cc/dVtH5w3g/cruelty-free-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48-1.png" alt="About" />
            </a>
            <a href="#projects" className="nav-icon">
                <img src="https://i.postimg.cc/rpWwpM5r/developer-mode-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="Projects" />
            </a>
            <a href="#contact" className="nav-icon">
                <img src="https://i.postimg.cc/RCP44N2Y/mail-60dp-FFFFFF-FILL0-wght400-GRAD0-opsz48.png" alt="Contact" />
            </a>
            <a href="#contact" className="nav-icon">
                <img src="https://i.postimg.cc/x1kqB3FV/icons8-github-100.png" alt="Git" />
            </a>
        </div>
    );
}

export default Navbar;
