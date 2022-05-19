import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact section">
            <div className="contact-content container">
                <div className="section-header">
                    <div className="sub-title">CONTACT US</div>
                    <div className="title">Have a question?</div>
                </div>
                <div className="contact-text">
                    <div>
                        If you have any questions, feel free to contact us at
                        Room 202, 2nd Floor.
                    </div>
                    <div>You can also call or message our event Incharge.</div>
                    <div>
                        <span className="contact-heading">
                            Student Incharge
                        </span>
                        <div>Soumitra Mukherjee: +91 89109 96673</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
