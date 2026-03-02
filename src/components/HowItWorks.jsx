import React from 'react';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        title: 'Book a Consultation',
        desc: 'Schedule a free 15-minute call with our career experts to discuss your goals.'
    },
    {
        number: '02',
        title: 'Career Assessment',
        desc: 'We analyze your current profile, strengths, and target roles to build a strategy.'
    },
    {
        number: '03',
        title: 'Profile Optimization',
        desc: 'Our experts optimize your resume, LinkedIn, and application materials.'
    },
    {
        number: '04',
        title: 'Apply & Get Hired',
        desc: 'With your new powerful profile, start applying and ace your interviews.'
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Our Process</span>
                    <h2 className="section-title">How It <span className="highlight">Works</span></h2>
                    <p className="section-subtitle">A simple, four-step approach to transforming your career prospects.</p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
