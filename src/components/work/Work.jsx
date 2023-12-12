import React, {useState} from 'react';
import './Work.css';
import Works from './Works';
import Popup from './Popup';

// import projectsData from './Data'

const Work = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <section className="work section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most Recent Works</span>
            <Works/>
            {showPopup && <Popup togglePopup={togglePopup} />}
        </section>
    )
}

export default Work