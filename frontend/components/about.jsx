import React from 'react';
import {createButtonLink} from '../utils/graphics.util'
const About = () => {
    return(
        <div className="about-wrapper">

            <div className="about">
            </div>
                <h2 className="about-title">WELCOME TO VISUAL DISCOVERY</h2>
                <h1 className="about-content">When it comes to a great idea, you know it when you see it</h1>
                {createButtonLink("/", "", "about-btn","", "Join Pintellect")}
        </div>
    )
}

export default About;