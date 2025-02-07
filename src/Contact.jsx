import React from 'react';
import './Contact.css';

function Contact() {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };

    return (
        <div id="contact-section">
            <div className="contact-wrapper">
                <h1 className="contact-heading">Contact Me</h1>
                <div className="contact-list">
                    <div className="contact-item" onClick={() => handleCopy('sashashreiderbr@gmail.com')}>
                        <i className="contact-icon fas fa-envelope"></i>
                        <span className="contact-text">sashashreiderbr@gmail.com</span>
                    </div>
                    <div className="contact-item" onClick={() => handleCopy('+55 (11) 96965-2319')}>
                        <i className="contact-icon fas fa-phone"></i>
                        <span className="contact-text">+55 (11) 96965-2319</span>
                    </div>
                    <div className="contact-item">
                        <a
                            href="https://www.linkedin.com/in/sashashreider"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <i className="contact-icon fab fa-linkedin"></i>
                            <span className="contact-text">LinkedIn</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a
                            href="https://github.com/sashashreyder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <i className="contact-icon fab fa-github"></i>
                            <span className="contact-text">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
