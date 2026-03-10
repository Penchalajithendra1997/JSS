import React, { useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact Us | JSS - Career Consulting Nellore";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <header className="contact-header">
                <div className="container">
                    <span className="section-tagline">Get In Touch</span>
                    <h1 className="contact-title">Contact <span className="highlight">JSS</span></h1>
                    <p className="contact-subtitle">Have questions or ready to start your career transformation? We're here to help you every step of the way.</p>
                </div>
            </header>

            <section className="contact-content section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div className="info-text">
                                    <h3>Phone</h3>
                                    <p>8074875390</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-text">
                                    <h3>Location</h3>
                                    <p>26th street, Nellore, IN</p>
                                    <p>Pin Code: 524004</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">⏰</div>
                                <div className="info-text">
                                    <h3>Working Hours</h3>
                                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="Your mobile number" required />
                                </div>
                                <div className="form-group">
                                    <label>Service Interested In</label>
                                    <select>
                                        <option>Resume Building</option>
                                        <option>Career Consultation</option>
                                        <option>Interview Prep</option>
                                        <option>LinkedIn Optimization</option>
                                        <option>Job Support</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="How can we help you?" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
