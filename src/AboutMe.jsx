import React, { useState, useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
    const [expandedBoxes, setExpandedBoxes] = useState([false, false, false, false]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 750);
        };

        // Initial check for screen size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleBox = (index) => {
        const updatedBoxes = [...expandedBoxes];
        updatedBoxes[index] = !updatedBoxes[index];
        setExpandedBoxes(updatedBoxes);
    };

    const contentData = [
        {
            title: "How it started?",
            content: `When I was a child, my dad worked as a programmer, and his love for tech rubbed off on me. 
            By the time I was 7 (or something like that), I could assemble a computer from scratch and was experimenting with Macromedia Flash to create simple animations, explored Photoshop, 
            designing little projects just for fun. Back then, I dreamed of becoming a programmer. 
            But because I struggled with math in school, everyone told me it wasn’t realistic. 
            So, I chose more humanities-focused paths in education.`,
            imageClass: "image-left"
        },
        {
            title: "Education & Early Work",
            content: `I first studied to become an English teacher in college but later earned my bachelor's degree in journalism. During my studies, 
            I worked mostly in creative fields, often helping out at various exhibitions. After college, I landed a job at a real estate agency. 
            I was responsible for client communication, document management (CRM, Excel etc), and even became the go-to tech support for my team! Though this wasn’t my dream job, 
            I excelled at it, staying for almost five years and building strong relationships with clients and colleagues alike.`,
            imageClass: "image-right"
        },
        {
            title: "The Bar That Rocked Moscow",
            content: `Following my corporate career, I took a bold step and opened Moscow's first bar specifically for metalheads. It was a dream come true—a unique space for the heavy music community, blending my passion for metal and business. I even played drums for several years, so this project was personal to me. However, the pandemic changed everything. 
            I managed to keep the bar running for two more years, but the challenges became too overwhelming. 
            In the end, I had to close it and made the difficult decision to move to Brazil.`,
            imageClass: "image-left"
        },
        {
            title: "A New Chapter",
            content: `Moving to Brazil marked a turning point in my life. After taking time to heal and reflect, I realized it was never too late to chase my childhood dream. I dove into programming with a passion I hadn’t felt in years. For the first time, I truly feel aligned with what I want in life. 
            I always want to learn more. 
            This journey—from building computers at age 7 to navigating life’s twists and turns—has 
            led me back to the dream I’ve had all along. And I couldn’t be happier.`,
            imageClass: "image-right"
        }
    ];

    return (
        <div className="AboutMe">
            <div className="background-container"></div>
            <div className="text-container-aboutme">
                <div className="handwriting-container">
                    <span className="handwriting-text">Let's get acquainted!</span>
                </div>
            </div>

            <div className="content-boxes">
                {contentData.map((data, index) => (
                    <div
                        className={`content-box ${data.imageClass.includes("right") ? "reverse" : ""} ${
                            expandedBoxes[index] ? "expanded" : ""
                        }`}
                        key={index}
                    >
                        <div className={`content-image ${data.imageClass}`}></div>
                        <div className="content-text">
                            <h3>{data.title}</h3>
                            {/* Conditionally render the content */}
                            {(!isSmallScreen || expandedBoxes[index]) && <p>{data.content}</p>}
                        </div>
                        {isSmallScreen && (
                            <button
                                className="toggle-btn"
                                onClick={() => toggleBox(index)}
                            >
                                {expandedBoxes[index] ? "▲" : "▼"}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;





