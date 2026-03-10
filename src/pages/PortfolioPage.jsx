import React, { useEffect } from 'react';
import './PortfolioPage.css';

const portfolioItems = [
    {
        title: 'Executive Resume Makeover',
        category: 'Resume Building',
        description: 'Transformed a 10-page CV into a high-impact, 2-page executive resume that landed a Director role at a Fortune 500 company.',
        image: '📝'
    },
    {
        title: 'Software Engineer Growth',
        category: 'Career Growth',
        description: 'Guided a junior developer through a career transition, resulting in a Senior Role and a 40% salary increase.',
        image: '🚀'
    },
    {
        title: 'LinkedIn Network Expansion',
        category: 'LinkedIn Optimization',
        description: 'Optimized high-level profiles resulting in 300% more profile views and multiple direct recruiter inquiries within 2 weeks.',
        image: '🔗'
    },
    {
        title: 'International Job Success',
        category: 'Job Support',
        description: 'Assisted a client in securing a professional role in the UK with full visa sponsorship and relocation support.',
        image: '🌍'
    },
    {
        title: 'Interview Mastery',
        category: 'Interview Prep',
        description: 'Coached a candidate through 5 rounds of interviews at a top tech firm, leading to a successful offer.',
        image: '🎤'
    },
    {
        title: 'Fresh Graduate Placement',
        category: 'Resume Building',
        description: 'Helped a recent graduate craft their first professional resume, leading to 3 job offers within the first month.',
        image: '🎓'
    }
];

const PortfolioPage = () => {
    useEffect(() => {
        document.title = "Portfolio | JSS - Success Stories & Career Outcomes";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-page">
            <header className="portfolio-header">
                <div className="container">
                    <span className="section-tagline">Our Work</span>
                    <h1 className="portfolio-title">Recent <span className="highlight">Success Stories</span></h1>
                    <p className="portfolio-subtitle">Explore how we've helped professionals across various industries achieve their career goals and land their dream jobs.</p>
                </div>
            </header>

            <section className="portfolio-grid-section section-padding">
                <div className="container">
                    <div className="portfolio-grid">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className="portfolio-card">
                                <div className="portfolio-icon">{item.image}</div>
                                <div className="portfolio-content">
                                    <span className="portfolio-category">{item.category}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="portfolio-cta section-padding bg-light">
                <div className="container text-center">
                    <h2>Be Our Next <span className="highlight">Success Story</span></h2>
                    <p>Take the first step towards your new career today.</p>
                    <a href="/contact" className="btn btn-primary">Start Your Journey</a>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
