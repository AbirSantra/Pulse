import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact section" id="contact">
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
                    <div>You can also call or message our event incharges.</div>
                    <div>
                        <span className="contact-heading">
                            Student Incharges
                        </span>
                        <div>Soumitra Mukherjee: +91 89109 96673</div>
                        <div>Saikat Dey: +91 70019 51845</div>
                        <div>Srijit Sarkar: +91 94329 02403</div>
                        <div>Sarnendu Paul: +91 62893 33873</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
