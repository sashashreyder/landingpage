import React from 'react';
import './Contact.css';

function Contact() {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };

    return (
        <div id="Contact">
            <div className="contact-container">
                <h1 className="contact-title">Contact Me</h1>
                <div className="contact-items">
                    <div className="contact-item" onClick={() => handleCopy('your-email@example.com')}>
                        <i className="contact-icon fas fa-envelope"></i>
                        <span>Email: your-email@example.com</span>
                    </div>
                    <div className="contact-item" onClick={() => handleCopy('+123456789')}>
                        <i className="contact-icon fas fa-phone"></i>
                        <span>Phone: +123456789</span>
                    </div>
                    <div className="contact-item">
                        <a
                            href="https://www.linkedin.com/in/your-profile/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="contact-icon fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="contact-icon fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
