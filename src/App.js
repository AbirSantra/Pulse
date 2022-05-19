import React from "react";
import "./App.css";
import About from "./components/About/About";
import Agenda from "./components/Agenda/Agenda";
import Contact from "./components/Contact/Contact";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Prizes from "./components/Prizes/Prizes";
import Rules from "./components/Rules/Rules";
import Venue from "./components/Venue/Venue";

const App = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Venue></Venue>
            <Rules></Rules>
            <Agenda></Agenda>
            <Prizes></Prizes>
            <Contact></Contact>
            <Cta></Cta>
            <Footer></Footer>
        </div>
    );
};

export default App;
