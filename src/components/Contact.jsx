import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <span className="section-tagline">Contact Us</span>
                    <h2 className="section-title">Let's Build Your <span className="highlight">Career Together</span></h2>
                    <p className="contact-desc">
                        Ready to take the next step? Get in touch with us for a free consultation or to learn more about our services.
                    </p>

                    <div className="contact-details">
                        <div className="contact-method">
                            <div className="method-icon">📧</div>
                            <div>
                                <h4>Email Us</h4>
                                <p>hello@jsscareer.com</p>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="method-icon">📞</div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+1 (555) 000-JSS1</p>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="method-icon">📍</div>
                            <div>
                                <h4>Visit Us</h4>
                                <p>123 Career Blvd, Professional Suite 400</p>
                            </div>
                        </div>
                    </div>

                    <div className="whatsapp-btn-container">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                            <span className="wa-icon">💬</span> Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="+1 234 567 890" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service Needed</label>
                            <select id="service">
                                <option>Resume Building</option>
                                <option>Career Consultation</option>
                                <option>Interview Coaching</option>
                                <option>LinkedIn Optimization</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
