import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "What services does JSS offer?",
        answer: "We offer job application support, resume writing, career consultation, interview coaching, LinkedIn optimization, and skill development guidance."
    },
    {
        question: "How long does the resume building process take?",
        answer: "Typically, a professional resume takes 3-5 business days from the initial consultation to the final version."
    },
    {
        question: "Do you help with international job applications?",
        answer: "Yes, we specialize in both domestic and international markets, helping you tailor your profile for global opportunities."
    },
    {
        question: "Is the initial consultation really free?",
        answer: "Yes! We offer a free 15-minute consultation to understand your goals and explain how we can help."
    }
];

const FAQ = () => {
    const [activeIdx, setActiveIdx] = useState(null);

    return (
        <section className="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-tagline">Support</span>
                    <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIdx === index ? 'active' : ''}`}
                            onClick={() => setActiveIdx(activeIdx === index ? null : index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-toggle">{activeIdx === index ? '−' : '+'}</span>
                            </div>
                            {activeIdx === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
