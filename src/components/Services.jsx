import React from 'react';
import './Services.css';

const services = [
    {
        icon: '📝',
        title: 'Resume & CV Building',
        desc: 'Crafting high-impact, ATS-friendly resumes and CVs that highlight your unique strengths and catch recruiter attention.'
    },
    {
        icon: '🤝',
        title: 'Career Consultations',
        desc: 'One-on-one expert guidance to help you navigate your career path and make informed decisions about your future.'
    },
    {
        icon: '💼',
        title: 'Job Application Support',
        desc: 'End-to-end support for domestic and international job applications, ensuring your profile stands out from the crowd.'
    },
    {
        icon: '🎤',
        title: 'Interview Preparation',
        desc: 'Mock interviews and strategic coaching to build your confidence and help you master even the toughest questions.'
    },
    {
        icon: '🔗',
        title: 'LinkedIn Optimization',
        desc: 'Creating a powerful online presence that attracts opportunities and showcases your professional brand to the world.'
    },
    {
        icon: '📈',
        title: 'Skill Development',
        desc: 'Personalized recommendations for courses and skills that will make you more competitive in your target industry.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Our Services</span>
                    <h2 className="section-title">Comprehensive <span className="highlight">Career Solutions</span></h2>
                    <p className="section-subtitle">We provide the tools and expertise you need to succeed in every stage of your career journey.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <a href="#contact" className="service-link">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
