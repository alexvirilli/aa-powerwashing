import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ImageComparison from './ImageComparison';
import CustomerReviews from './CustomerReviews';
import AccordionItem from './AccordionItem';
import test2 from './test2.jpeg';
import test3 from './test3.jpeg';
import { Helmet } from 'react-helmet';

function Home() {

    function scrollToSection() {
        const targetElement = document.getElementById('explainer');
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition;
        const duration = 1000; // milliseconds
        let start = null;
    
        window.requestAnimationFrame(step);
    
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollAmount = Math.min(progress / duration, 1) * distance;
            window.scrollTo(0, startPosition + scrollAmount);
    
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    }

    return (
        <div>

            <Helmet>
                <title>A&A Powerwashing | Home</title>
                <meta name="description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, cleaning, home services, A&A Powerwashing" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
            </Helmet>

            <section className="hero">
                <div className="hero-overlay">
                    <h1 className="interactive-text">Make Your Home Look New Again!</h1>
                    <p>Professional power washing services at affordable prices.</p>
                    <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
                </div>
                <div className="down-arrow" onClick={scrollToSection}>
                    ↓
                </div>
            </section>

            <section id="explainer" className="explainer">
                <h2>Why Powerwash with A&A?</h2>
                <div>
                    <p>
                        At A&A Powerwashing, we pride ourselves on delivering exceptional results that transform the appearance of your property. Our professional powerwashing services are designed to remove dirt, grime, mold, and mildew, leaving your home or business looking pristine and well-maintained. We understand that a clean exterior not only enhances curb appeal but also extends the life of your surfaces by preventing damage caused by buildup and contaminants. With our state-of-the-art equipment and eco-friendly cleaning solutions, we ensure a thorough and safe cleaning process that protects your investment.
                    </p>
                    <p>
                        As dedicated college students, we bring energy, enthusiasm, and a strong work ethic to every job. We are committed to providing high-quality services at affordable prices, making it easier for you to keep your property in top condition without breaking the bank. Our attention to detail and customer-centric approach means we go above and beyond to meet your specific needs and exceed your expectations. Choose A&A Powerwashing for reliable, professional, and eco-friendly powerwashing services that deliver outstanding results every time.
                    </p>
                </div>
            </section>

            <section className="featured-work">
                <h2>Featured Work</h2>
                <div>
                    <ImageComparison beforeImage={test2} afterImage={test3} />
                    <ImageComparison />
                    <ImageComparison />
                    <ImageComparison />
                </div>
            </section>
            <section className="testimonials">
                <div>
                    <CustomerReviews />
                </div>
            </section>
            <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <AccordionItem title="How much do your powerwashing services cost?">
                    Our pricing is competitive and based on the specific needs of each job. We offer free estimates, so please contact us to get a customized quote for your project.
                </AccordionItem>
                <AccordionItem title="How do I schedule a powerwashing service?">
                    You can schedule a service by calling us at (856) 665-2279, emailing us at info@aapowerwashing.com, or filling out the contact form on our website. We will get back to you promptly to arrange an appointment.
                </AccordionItem>
                <AccordionItem title="What areas do you serve?">
                    We serve New Jersey, primarily New Brunswick, Cherry Hill, and the surrounding regions. If you are unsure whether we service your area, please contact us, and we’ll be happy to assist.
                </AccordionItem>
                <AccordionItem title='Why should I choose A&A Powerwashing?'>
                    As hardworking college students, we bring dedication, enthusiasm, and a strong work ethic to every job. We offer high-quality, affordable powerwashing services with a focus on customer satisfaction and environmental responsibility.
                </AccordionItem>
            </section>
            <div className='home-page-padding'>
            </div>
        </div>
        
    );
}

export default Home;
