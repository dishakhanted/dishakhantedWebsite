
// External Libraries
import React from 'react';

// Internal Libraries
import './About.css';
import selfie from '../../assets/Disha-Khanted.png';
import {texts} from '../../Config';

let cssClassName = 'About';

const About = (props) => {
    return <div className={cssClassName}>
        <div>
            <img src={selfie} alt="Disha Khanted" />
            <p>{texts.About.title}</p>
            <span>{texts.About.descs[0]}</span>
            <span>{texts.About.descs[1]}</span>
            <span>{texts.About.descs[2]}</span>
        </div>
    </div>;
}

export default About;