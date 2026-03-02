import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-image">
                    <img src="/assets/resume-review.png" alt="Resume Review Workshop" />
                    <div className="years-experience">
                        <span className="years">10+</span>
                        <span className="label">Years of Career Excellence</span>
                    </div>
                </div>
                <div className="about-text">
                    <span className="section-tagline">About JSS</span>
                    <h2 className="section-title">Dedicated to Your <span className="highlight">Professional Growth</span></h2>
                    <p className="section-description">
                        JSS is dedicated to helping individuals achieve their career goals through personalized guidance, professional resume services, and strategic job application support.
                    </p>
                    <div className="about-features">
                        <div className="about-feature-item">
                            <div className="feature-icon">🎯</div>
                            <div>
                                <h4>Strategic Approach</h4>
                                <p>We don't just fix resumes; we build career strategies that work in today's competitive market.</p>
                            </div>
                        </div>
                        <div className="about-feature-item">
                            <div className="feature-icon">💡</div>
                            <div>
                                <h4>Expert Mentorship</h4>
                                <p>Our consultants are industry veterans who know exactly what recruiters are looking for.</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary">Learn More About Us</button>
                </div>
            </div>
        </section>
    );
};

export default About;
