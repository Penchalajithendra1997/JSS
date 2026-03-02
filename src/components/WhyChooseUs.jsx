import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        "Personalized Career Strategy",
        "Industry Expert Consultants",
        "High Success Rate",
        "Affordable Pricing",
        "Ongoing Support",
        "Global Network Access"
    ];

    return (
        <section className="why-choose-us">
            <div className="container why-container">
                <div className="why-content">
                    <span className="section-tagline">Why Choose Us</span>
                    <h2 className="section-title">We Deliver <span className="highlight">Results</span> That Matter</h2>
                    <p className="section-description">
                        Join thousands of professionals who have transformed their careers with JSS. Our commitment to your success is what sets us apart.
                    </p>
                    <ul className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="benefit-item">
                                <span className="check-icon">✓</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-primary">Start Your Journey Today</button>
                </div>
                <div className="why-image">
                    <img src="/assets/interview.png" alt="Successful Career Professionals" />
                    <div className="experience-badge">
                        <span className="number">98%</span>
                        <span className="text">Client Satisfaction</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
