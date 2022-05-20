import React from "react";
import "./Agenda.css";

const Agenda = () => {
    return (
        <div className="agenda section" id="agenda">
            <div className="agenda-content container">
                <div className="section-header">
                    <div className="sub-title">SCHEDULE & AGENDA</div>
                    <div className="title">The Timeline</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">10:00 AM - 10:30 AM</div>
                    <div className="agenda-name">Inaugaration</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">11:00 AM - 11:30 AM</div>
                    <div className="agenda-name">Mind Spark</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">11:30 AM - 12:00 PM</div>
                    <div className="agenda-name">Round 1 Results</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">12:00 PM - 12:30 PM</div>
                    <div className="agenda-name">Lunch Break</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">01:00 PM - 01:30 PM</div>
                    <div className="agenda-name">Picture Perfect</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">01:30 PM - 02:00 PM</div>
                    <div className="agenda-name">Round 2 Results</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">02:15 PM - 03:30 PM</div>
                    <div className="agenda-name">Code Hunt</div>
                </div>
                <div className="agenda-text">
                    <div className="agenda-time">03:30 PM - 04:00 PM</div>
                    <div className="agenda-name">Prize Distribution</div>
                </div>
            </div>
        </div>
    );
};

export default Agenda;
