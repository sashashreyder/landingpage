import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="AboutMe">
            <div className="background-container"></div>
                <div className="text-container-aboutme">
                    <div className="handwriting-container">
                        <span className="handwriting-text">Let's get acquainted!</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="content-boxes">
                {/* Box 1 */}
                <div className="content-box">
                    <div className="content-image image-left"></div>
                    <div className="content-text">
                        <h3>How it started?</h3>
                        <p>When I was a child, my dad worked as a programmer, and his love for tech rubbed off on me. 
                            By the time I was 7 (or something like that), I could assemble a computer from scratch and was experimenting with Macromedia Flash to create simple animations, explored Photoshop, 
                            designing little projects just for fun. Back then, I dreamed of becoming a programmer. 
                            But because I struggled with math in school, everyone told me it wasn’t realistic. 
                            So, I chose more humanities-focused paths in education.</p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="content-box reverse">
                    <div className="content-text">
                        <h3>Education & Early Work</h3>
                        <p>I first studied to become an English teacher in college but later earned my bachelor's degree in journalism. During my studies, 
                            I worked mostly in creative fields, often helping out at various exhibitions. After college, I landed a job at a real estate agency. 
                            I was responsible for client communication, document management (CRM, Excel etc), and even became the go-to tech support for my team! Though this wasn’t my dream job, 
                            I excelled at it, staying for almost five years and building strong relationships with clients and colleagues alike.</p>
                    </div>
                    <div className="content-image image-right"></div>
                </div>

                {/* Box 3 */}
                <div className="content-box">
                    <div className="content-image image-left"></div>
                    <div className="content-text">
                        <h3>The Bar That Rocked Moscow</h3>
                        <p>Following my corporate career, I took a bold step and opened Moscow's first bar specifically for metalheads. It was a dream come true—a unique space for the heavy music community, blending my passion for metal and business. I even played drums for several years, so this project was personal to me. However, the pandemic changed everything. 
                            I managed to keep the bar running for two more years, but the challenges became too overwhelming. 
                            In the end, I had to close it and made the difficult decision to move to Brazil.</p>
                    </div>
                </div>

                {/* Box 4 */}
                <div className="content-box reverse">
                    <div className="content-text">
                        <h3>A New Chapter</h3>
                        <p>Moving to Brazil marked a turning point in my life. After taking time to heal and reflect, I realized it was never too late to chase my childhood dream. I dove into programming with a passion I hadn’t felt in years. For the first time, I truly feel aligned with what I want in life. 
                            I always want to learn more. 
                            This journey—from building computers at age 7 to navigating life’s twists and turns—has 
                            led me back to the dream I’ve had all along. And I couldn’t be happier.</p>
                    </div>
                    <div className="content-image image-right"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;


