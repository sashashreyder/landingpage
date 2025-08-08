import React from 'react';
import './Contact.css';

function Contact() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div id="contact-section">
      <div className="contact-wrapper" data-aos="fade-up">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="contact-list">

          {/* Email */}
          <div
            className="contact-item"
            onClick={() => handleCopy('sashashreiderbr@gmail.com')}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <i className="contact-icon fas fa-envelope"></i>
            <span className="contact-text">sashashreiderbr@gmail.com</span>
          </div>

          {/* Phone */}
          <div
            className="contact-item"
            onClick={() => handleCopy('+55 (11) 96965-2319')}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="contact-icon fas fa-phone"></i>
            <span className="contact-text">+55 (11) 96965-2319</span>
          </div>

          {/* Download CV */}
          <div
            className="contact-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href={`${import.meta.env.BASE_URL}media/Aleksandra Shreider CV 08:2025.pdf`}
              download="Aleksandra-Shreider-CV.pdf"
              className="contact-link"
            >
              <i className="contact-icon fas fa-file-download"></i>
              <span className="contact-text">Download CV</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;


