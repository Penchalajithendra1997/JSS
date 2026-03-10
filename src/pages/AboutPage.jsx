import React, { useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
    useEffect(() => {
        document.title = "About Us | JSS - Our Mission & Story";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <header className="about-header">
                <div className="container">
                    <span className="section-tagline">About JSS</span>
                    <h1 className="about-title">Empowering Careers, <span className="highlight">Changing Lives</span></h1>
                    <p className="about-subtitle">Building a bridge between talent and opportunity through expert guidance and professional branding.</p>
                </div>
            </header>

            <section className="about-content section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Our <span className="highlight">Mission</span></h2>
                            <p>At JSS, our mission is to provide job seekers with the tools, confidence, and strategy they need to land their dream jobs. We believe that everyone has unique potential, and our job is to help the world see it.</p>

                            <h2>Our <span className="highlight">Story</span></h2>
                            <p>Founded on the principle of accessibility and excellence, JSS started as a small consulting firm helping local graduates. Today, we've helped hundreds of professionals across various industries optimize their career paths and achieve significant growth.</p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-card">
                                <h3>500+</h3>
                                <p>Resumes Built</p>
                            </div>
                            <div className="stat-card">
                                <h3>95%</h3>
                                <p>Success Rate</p>
                            </div>
                            <div className="stat-card">
                                <h3>50+</h3>
                                <p>Partner Companies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Core <span className="highlight">Values</span></h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Integrity</h3>
                            <p>We provide honest, transparent feedback to ensure our clients are always moving in the right direction.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">✨</div>
                            <h3>Excellence</h3>
                            <p>We strive for the highest quality in every resume we build and every consultation we provide.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>We stay ahead of industry trends and ATS technology to give our clients a competitive edge.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
