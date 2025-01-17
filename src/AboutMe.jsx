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
                        <h3>Your Title Here</h3>
                        <p>Your description or story here for this timeline step.</p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="content-box reverse">
                    <div className="content-text">
                        <h3>Your Title Here</h3>
                        <p>Your description or story here for this timeline step.</p>
                    </div>
                    <div className="content-image image-right"></div>
                </div>

                {/* Box 3 */}
                <div className="content-box">
                    <div className="content-image image-left"></div>
                    <div className="content-text">
                        <h3>Your Title Here</h3>
                        <p>Your description or story here for this timeline step.</p>
                    </div>
                </div>

                {/* Box 4 */}
                <div className="content-box reverse">
                    <div className="content-text">
                        <h3>Your Title Here</h3>
                        <p>Your description or story here for this timeline step.</p>
                    </div>
                    <div className="content-image image-right"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;


