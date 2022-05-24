import React from "react";
import EventCard from "../EventCard/EventCard";
import "./About.css";

import Quiz from "../../img/quiz.png";
import AudioVideo from "../../img/multimedia.png";
import CodeHunt from "../../img/treasure-map.png";

const About = () => {
    return (
        <div className="about section" id="about">
            <div className="about-content container">
                <div className="section-header">
                    <div className="sub-title">ABOUT THE EVENT</div>
                    <div className="title">What is Pulse.exe 2K22?</div>
                </div>
                <div className="about-text">
                    <div>
                        Pulse.exe 2K22 is the first iteration of an yearly
                        technical event organized by the students and faculty of
                        the IT Department of MCKV Institute of Engineering.
                    </div>
                    <div>
                        Students of all departments will compete in teams to
                        prove their knowledge and skills.
                    </div>
                    <div>The event comprises of 3 rounds as follows:</div>
                </div>
                <div className="round-cards">
                    <EventCard
                        roundNum="1"
                        roundName="Mind Spark"
                        subtitle="(All registered teams)"
                        icon={Quiz}
                        description="Answer 30 MCQ questions in 30 minutes based on Aptitude, Technical and General Knowledge"
                    ></EventCard>
                    <EventCard
                        roundNum="2"
                        roundName="Picture Perfect"
                        subtitle="(Top 30 teams from R1)"
                        icon={AudioVideo}
                        description="Answer 20 questions shown on the screen in 30 mins. But be quick! Each question only stays on the screen for 30 secs."
                    ></EventCard>
                    <EventCard
                        roundNum="3"
                        roundName="Code Hunt"
                        subtitle="(Top 5 teams from R2)"
                        icon={CodeHunt}
                        description="Solve your way through 4 given coding problems. Each problem unlocks the next problem. Be the first to solve them all."
                    ></EventCard>
                </div>
            </div>
        </div>
    );
};

export default About;
