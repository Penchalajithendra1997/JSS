import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Marketing Manager',
        text: "JSS completely transformed my job search. Their resume rewrite helped me land 3 interviews in just one week after months of silence!",
        image: '👤'
    },
    {
        name: 'David Chen',
        role: 'Software Engineer',
        text: "The interview coaching was invaluable. I felt so much more confident and knew exactly how to highlight my strengths to the hiring team.",
        image: '👤'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Senior Consultant',
        text: "Professional, efficient, and incredibly knowledgeable. JSS helped me navigate a difficult career transition with ease.",
        image: '👤'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Testimonials</span>
                    <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">{item.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.image}</div>
                                <div className="author-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
