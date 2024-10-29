import React, { useState } from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

export function Hero() {
    return (
        <div className="hero">
            <img src="/images/Jared_Spool 2.png" alt="Jared" />
            <div className="hero-paragraphs">
                <p>Small Group Coaching</p>
                <p>8 Hours Live with Jared Spool <br />8 Hours of Recorded Content</p>
            </div>
        </div>
    )
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    return (
        <section className="header-background" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/square-background.png)`
        }}>
            <section className="header">
                <nav className="header-nav">
                    <img className="header-logo" src="/images/Center_Centre_Logo.png" alt="center centre logo" />

                    {/* Hamburger icon */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    {/* Links */}
                    <div className={`header-links ${menuOpen ? 'open' : ''}`}>
                        <Link to="/">Home</Link>
                        <Link to="/topics">Course Topics</Link>
                        <Link to="/outcomes">Why UX Outcomes?</Link>
                        <Link to="/teams">Team Pricing</Link>
                        <Link to="/october">Join Next Cohort</Link>
                    </div>
                </nav>
                <div>
                    <h1>Outcome-Driven UX Metrics</h1>
                    <p className="online-course">An Online Course with Jared Spool</p>
                    <Hero />
                </div>

            </section>
        </section>
    );
}
