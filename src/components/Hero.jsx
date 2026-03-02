import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Your Career Starts with the <span className="highlight">Right Guidance</span></h1>
                    <p className="hero-subtitle">
                        Expert Job Consulting, Resume Building & Career Support to Help You Land Your Dream Job.
                        We bridge the gap between your aspirations and your next professional breakthrough.
                    </p>
                    <div className="hero-ctas">
                        <button className="btn btn-primary">Book Free Consultation</button>
                        <button className="btn btn-outline">Get Started</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Jobs Placed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Expert Support</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/assets/hero.png" alt="Career Coaching Session" />
                    <div className="image-overlay-card">
                        <div className="card-icon">🚀</div>
                        <div>
                            <p className="card-title">Success Guaranteed</p>
                            <p className="card-text">Tailored career roadmaps for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
