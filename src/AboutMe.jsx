import React, { useState, useEffect, useRef } from 'react';
import './AboutMe.css';
import Portfolio from './Portfolio';

function AboutMe() {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false]);
    const [isMobileView, setIsMobileView] = useState(false);
    const nextSectionRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 750);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSection = (index) => {
        setExpandedSections((prev) =>
            prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
        );
    };

    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const aboutMeData = [
        {
            id: "section-start",
            title: "How it started?",
            content: `When I was a child, my dad worked as a programmer, and his love for tech rubbed off on me. 
            By the time I was 7 (or something like that), I could assemble a computer from scratch and was experimenting with Macromedia Flash to create simple animations, explored Photoshop, 
            designing little projects just for fun. Back then, I dreamed of becoming a programmer. 
            But because I struggled with math in school, everyone told me it wasn’t realistic. 
            So, I chose more humanities-focused paths in education.`,
            imageClass: "image-left",
            imageSrc: "/images/how-it-started.jpg", 
        },
        {
            id: "section-education",
            title: "Education & Early Work",
            content: `I first studied to become an English teacher in college but later earned my bachelor's degree in journalism. During my studies, 
            I worked mostly in creative fields, often helping out at various exhibitions. After college, I landed a job at a real estate agency. 
            I was responsible for client communication, document management (CRM, Excel etc), and even became the go-to tech support for my team! Though this wasn’t my dream job, 
            I excelled at it, staying for almost five years and building strong relationships with clients and colleagues alike.`,
            imageClass: "image-right",
            imageSrc: "/images/education-early-work.jpg", 
        },
        {
            id: "section-bar",
            title: "The Bar That Rocked Moscow",
            content: `Following my corporate career, I took a bold step and opened Moscow's first bar specifically for metalheads. It was a dream come true—a unique space for the heavy music community, blending my passion for metal and business. I even played drums for several years, so this project was personal to me. However, the pandemic changed everything. 
            I managed to keep the bar running for two more years, but the challenges became too overwhelming. 
            In the end, I had to close it and made the difficult decision to move to Brazil.`,
            imageClass: "image-left",
            imageSrc: "/images/bar-that-rocked.jpg", 
        },
        {
            id: "section-new-chapter",
            title: "A New Chapter",
            content: `Moving to Brazil marked a turning point in my life. After taking time to heal and reflect, I realized it was never too late to chase my childhood dream. I dove into programming with a passion I hadn’t felt in years. For the first time, I truly feel aligned with what I want in life. 
            I always want to learn more. 
            This journey—from building computers at age 7 to navigating life’s twists and turns—has 
            led me back to the dream I’ve had all along. And I couldn’t be happier.`,
            imageClass: "image-right",
            imageSrc: "/images/new-chapter.jpg", 
        }
    ];

    return (
        <>
            <div className="about-me-section">
                <div className="background-overlay"></div>

                <div className="intro-text-container" data-aos="fade-up">
                    <div className="handwriting-wrapper">
                        <span className="handwriting-message">Let's get acquainted!</span>
                    </div>
                </div>

                <div className="skip-button-wrapper" data-aos="zoom-in" data-aos-delay="200">
                    <button className="skip-story-button" onClick={scrollToNextSection}>
                        Skip My Story 🥺
                    </button>
                </div>

                <div className="about-content-wrapper">
                    {aboutMeData.map((section, index) => {
                        const isFirst = index === 0;
                        return (
                            <div
                                id={section.id}
                                {...(!isFirst && {
                                    'data-aos': 'fade-up',
                                    'data-aos-delay': index * 150,
                                })}
                                className={`about-content-box ${section.imageClass.includes("right") ? "reverse-layout" : ""} ${
                                    expandedSections[index] ? "expanded" : ""
                                }`}
                                key={index}
                            >
                                <div
                                    className={`about-content-image ${section.imageClass}`}
                                    style={{
                                        backgroundImage: `url(${section.imageSrc})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>
                                <div className="about-content-text">
                                    <h3>{section.title}</h3>
                                    {(!isMobileView || expandedSections[index]) && <p>{section.content}</p>}
                                </div>
                                {isMobileView && (
                                    <button
                                        className="expand-toggle-button"
                                        onClick={() => toggleSection(index)}
                                    >
                                        {expandedSections[index] ? "↑" : "↓"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div ref={nextSectionRef} id="portfolio-section">
                <Portfolio />
            </div>
        </>
    );
}

export default AboutMe;









