import React from 'react';
import './Popup.css';

const Popup = ({ togglePopup, children }) => {
    return (
        <div className="popup">
            <div className="popup__content">
                <span className="popup__close" onClick={togglePopup}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Popup;