import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = location.pathname === '/';

    const getNavLink = (id) => {
        return isHomePage ? `#${id}` : `/#${id}`;
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                    <span className="logo-text">JSS</span>
                    <span className="logo-dot">.</span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                    <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                    <Link to="/contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                </div>

                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
