import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div id="Portfolio">
            <div className="portfolio-container">
                <h1 className="portfolio-title">My Portfolio</h1>
                <div className="portfolio-grid">
                    <div className="portfolio-item">Project 1</div>
                    <div className="portfolio-item">Project 2</div>
                    <div className="portfolio-item">Project 3</div>
                    <div className="portfolio-item">Project 4</div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
