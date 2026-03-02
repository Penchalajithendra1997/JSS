import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo white">
                        <span className="logo-text">JSS</span>
                        <span className="logo-dot">.</span>
                    </div>
                    <p className="footer-tagline">Your Career Starts with the Right Guidance</p>
                    <div className="social-links">
                        <a href="#">FB</a>
                        <a href="#">LI</a>
                        <a href="#">TW</a>
                        <a href="#">IG</a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Resume Writing</a></li>
                        <li><a href="#">Career Coaching</a></li>
                        <li><a href="#">Interview Prep</a></li>
                        <li><a href="#">LinkedIn Audit</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4>Newsletter</h4>
                    <p>Get tips and career updates directly to your inbox.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 JSS Job Consulting. All rights reserved. | <a href="#">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
