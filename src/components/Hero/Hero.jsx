import React, { useState, useEffect } from "react";
import Countdown from "../Countdown/Countdown";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMins, setTimerMins] = useState();
    const [timerSecs, setTimerSecs] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("June 03,2022 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMins(minutes);
                setTimerSecs(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className="hero">
            <Navbar></Navbar>
            <div className="hero-content container">
                <div className="hero-content-text">
                    <div className="heading">Introducing</div>
                    <div className="main-title">
                        <span className="pulse">Pulse</span>
                        <span className="dot">.</span>
                        <span className="exe">exe</span>
                        <span className="2K22"> 2K22</span>
                    </div>
                    <div className="tagline">
                        A technical event by the IT Department of MCKVIE
                    </div>
                </div>
                <div className="cta-buttons">
                    <div className="main-btn">
                        <a href="#rules">Register Now &gt;</a>
                    </div>
                    <div className="secondary-btn">
                        <a href="#rules">Learn More &gt;</a>
                    </div>
                </div>
                <div className="countdown">
                    <div>Time remaining</div>
                    <Countdown
                        timerDays={timerDays}
                        timerHours={timerHours}
                        timerMins={timerMins}
                        timerSecs={timerSecs}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;