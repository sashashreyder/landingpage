import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div id="Portfolio">
            <div className="portfolio-container" data-aos="fade-up">
                <h1 className="portfolio-title">My Portfolio</h1>
                <div className="portfolio-grid">
                    <a
                        href="https://made-by-human.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img src="https://i.postimg.cc/k5snZ3JJ/SCR-20250511-qnwr.png" alt="Made By Human Project" />
                        <span className="portfolio-item-title">Made By Human</span>
                    </a>
                    <a
                        href="https://expofp-brazil.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <img src="https://i.postimg.cc/J0Vdtg5y/Expo.png" alt="Expo FP Brazil Project" />
                        <span className="portfolio-item-title">Expo FP Brazil</span>
                    </a>
                    <a
                        href="https://made-by-human.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <img src="https://i.postimg.cc/k5snZ3JJ/SCR-20250511-qnwr.png" alt="Made By Human Project" />
                        <span className="portfolio-item-title">Made By Human</span>
                    </a>
                    <a
                        href="https://made-by-human.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <img src="https://i.postimg.cc/k5snZ3JJ/SCR-20250511-qnwr.png" alt="Made By Human Project" />
                        <span className="portfolio-item-title">Made By Human</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;





