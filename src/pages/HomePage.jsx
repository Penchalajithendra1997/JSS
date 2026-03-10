import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import './HomePage.css';

const HomePage = () => {
    useEffect(() => {
        document.title = "JSS - Expert Career Consulting & Professional Resume Building";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <About />
            <Services />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <BlogPreview />
            <FAQ />
            <Contact />
        </div>
    );
};

export default HomePage;
