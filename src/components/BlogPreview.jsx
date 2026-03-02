import React from 'react';
import './BlogPreview.css';

const blogs = [
    {
        title: '10 Tips Master Your Next Interview',
        date: 'March 1, 2026',
        category: 'Interview Tips',
        image: '🎤'
    },
    {
        title: 'How to Optimize Your LinkedIn Profile',
        date: 'Feb 25, 2026',
        category: 'Digital Branding',
        image: '🔗'
    },
    {
        title: 'Remote Work: Finding Global Opportunities',
        date: 'Feb 18, 2026',
        category: 'Job Search',
        image: '🌎'
    }
];

const BlogPreview = () => {
    return (
        <section className="blog-preview">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Insights</span>
                    <h2 className="section-title">Latest Career <span className="highlight">Tips & News</span></h2>
                </div>

                <div className="blog-grid">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-image-placeholder">{blog.image}</div>
                            <div className="blog-content">
                                <span className="blog-category">{blog.category}</span>
                                <h3>{blog.title}</h3>
                                <p className="blog-date">{blog.date}</p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
