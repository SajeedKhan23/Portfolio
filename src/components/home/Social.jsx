import React from 'react'

function Social() {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/sajeed_k3/" 
            className="home__social-icon" 
            target="_blank">
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://dribbble.com/" 
            className="home__social-icon" 
            target="_blank">
                <i className="bx bxl-twitter"></i>
            </a>

            <a href="https://github.com/SajeedKhan23" 
            className="home__social-icon" 
            target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social