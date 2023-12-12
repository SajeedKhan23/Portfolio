import React, { useState } from 'react';
import './Qualification.css'
import { Icon } from '@iconify/react'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech - Information Technology</h3>
                                <span className="qualification__subtitle">
                                    Govenrment College Of Engineering, Amravati
                                </span>
                                <div className="qualification__calender">
                                    <Icon icon="uil:calendar-alt" /> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th Standard</h3>
                                <span className="qualification__subtitle">
                                    St.Paul Junior College, Nagpur
                                </span>
                                <div className="qualification__calender">
                                    <Icon icon="uil:calendar-alt" /> 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th Standard</h3>
                                <span className="qualification__subtitle">
                                    Kendriya Vidyalaya (V.S.N), Nagpur
                                    </span>
                                <div className="qualification__calender">
                                    <Icon icon="uil:calendar-alt" /> 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Internship</h3>
                                <span className="qualification__subtitle">
                                    Persistent Systems, Nagpur
                                    </span>
                                <div className="qualification__calender">
                                    <Icon icon="uil:calendar-alt" /> Jun '23 - Aug '23
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Internship Trainee</h3>
                                <span className="qualification__subtitle">
                                    Bharat Electronics Ltd. Ghaziabad</span>
                                <div className="qualification__calender">
                                    <Icon icon="uil:calendar-alt" /> Sep '22 - Oct '22
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;