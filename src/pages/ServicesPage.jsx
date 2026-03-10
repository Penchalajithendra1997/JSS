import React, { useEffect } from 'react';
import './ServicesPage.css';

const services = [
    {
        icon: '📝',
        title: 'Resume & CV Building',
        desc: 'Our expert writers craft high-impact, ATS-friendly resumes and CVs that highlight your unique strengths and catch recruiter attention. We focus on quantifiable achievements and industry-specific keywords.',
        features: ['ATS-friendly formatting', 'Keyword optimization', 'Quantifiable achievements', 'Professional storytelling']
    },
    {
        icon: '🤝',
        title: 'Career Consultations',
        desc: 'One-on-one expert guidance to help you navigate your career path and make informed decisions about your future. Whether you are changing industries or seeking a promotion, we have you covered.',
        features: ['Personalized career roadmap', 'Industry insights', 'Salary negotiation tips', 'Career transition strategy']
    },
    {
        icon: '💼',
        title: 'Job Application Support',
        desc: 'End-to-end support for domestic and international job applications, ensuring your profile stands out from the crowd. We help you with cover letters, application forms, and submission strategies.',
        features: ['Customized cover letters', 'Application tracking', 'Global job search', 'Follow-up strategies']
    },
    {
        icon: '🎤',
        title: 'Interview Preparation',
        desc: 'Mock interviews and strategic coaching to build your confidence and help you master even the toughest questions. We provide feedback on body language, tone, and content.',
        features: ['Mock interview sessions', 'STAR method coaching', 'Personal branding', 'Handling tough questions']
    },
    {
        icon: '🔗',
        title: 'LinkedIn Optimization',
        desc: 'Creating a powerful online presence that attracts opportunities and showcases your professional brand to the world. We optimize your profile for searchability and professional appeal.',
        features: ['Headline & Summary optimization', 'Skill endorsement strategy', 'Networking tips', 'Content strategy']
    },
    {
        icon: '📈',
        title: 'Skill Development',
        desc: 'Personalized recommendations for courses and skills that will make you more competitive in your target industry. We help you identify and bridge your skill gaps.',
        features: ['Gap analysis', 'Course recommendations', 'Certification guidance', 'Continuous learning plan']
    }
];

const ServicesPage = () => {
    useEffect(() => {
        document.title = "Our Services | JSS - Comprehensive Career Solutions";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page">
            <header className="services-header">
                <div className="container">
                    <span className="section-tagline">What We Offer</span>
                    <h1 className="services-title">Expert <span className="highlight">Career Solutions</span></h1>
                    <p className="services-subtitle">Comprehensive tools and guidance designed to accelerate your professional growth and land your dream job.</p>
                </div>
            </header>

            <section className="services-detail section-padding">
                <div className="container">
                    <div className="services-list-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-detail-card">
                                <div className="service-detail-icon">{service.icon}</div>
                                <h2>{service.title}</h2>
                                <p className="service-detail-desc">{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex}>✨ {feature}</li>
                                    ))}
                                </ul>
                                <a href="/#contact" className="service-cta">Get Started →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-cta-bottom section-padding bg-light">
                <div className="container text-center">
                    <h2>Ready to Transform Your <span className="highlight">Career?</span></h2>
                    <p>Book a free consultation today and let us help you reach your full potential.</p>
                    <a href="/#contact" className="btn btn-primary">Free Consultation</a>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
