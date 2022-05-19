import React from "react";
import "./Navbar.css";
import LogoIcon from "../../img/pulse-logo-png1.2.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content container">
                <div className="logo">
                    <img src={LogoIcon} alt="" className="logo-img" />
                </div>
                <div className="navlinks">
                    {/* <div className="navlink">
                        <a href="#rules">Rules</a>
                    </div>
                    <div className="navlink">
                        <a href="#rules">Schedule</a>
                    </div>
                    <div className="navlink">
                        <a href="#rules">Contact</a>
                    </div> */}
                    <div className="navlink main-btn nav-btn">
                        <a
                            href="https://forms.gle/w7XehjHbNn7MkNhk7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
