import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div id="Portfolio">
            <div className="portfolio-container">
                <h1 className="portfolio-title">My Portfolio</h1>
                <div className="portfolio-grid">
                    <a href="https://simple-to-do-list-4b5e9.web.app/" target="_blank" rel="noopener noreferrer" className="portfolio-item">
                        <img src="https://i.postimg.cc/V6DpZ4q5/Todolist.png" alt="To-Do List Project" />
                        <span className="portfolio-item-title">To-Do List</span>
                    </a>
                    <a href="https://expofp-brazil.web.app/" target="_blank" rel="noopener noreferrer" className="portfolio-item">
                        <img src="https://i.postimg.cc/J0Vdtg5y/Expo.png" alt="Expo FP Brazil Project" />
                        <span className="portfolio-item-title">Expo FP Brazil</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;


