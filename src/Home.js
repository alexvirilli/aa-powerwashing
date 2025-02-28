import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ImageComparison from './ImageComparison';

/* Images */
import before4 from './images/before4.jpeg';
import after4 from './images/after4.jpeg';
import image9 from './images/home9.webp';
import paver1 from './images/paver1.webp';
import paver2 from './images/paver2.webp';
import wall1 from './images/wall1.webp';
import wall2 from './images/wall2.webp';
import roof1 from './images/roof1.webp';
import roof2 from './images/roof2.webp';

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
                <meta name="description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, pressure washing, power washing, cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
            </Helmet>

            <section className="hero" style={{ backgroundImage: `url(${image9})` }}>

                <div className="landing-contact">
                    <h1>South Jersey's Premier Pressure Washing Service</h1>
                    <Link to="/contact" className="contact-button1">Get a free quote</Link>
                </div>
                
            </section>

            <div class="spacer"></div>

            <section id="explainer" className="explainer">
                <div class='choose-the-best'>

                    <h1>Providing Eco-Friendly Solutions to SJ Homes</h1>
                   
                </div>

                <div class='small-business-blurb'>

                    <p>We are dedicated to meeting the exact needs of our clients.  With A&A, you will be communicating directly with a business representative throughout the entire process.  Take the first step in protecting your home and experience top of line customer service by filling out our <Link to="/contact">contact form</Link>
                    .</p>

                </div>
            
            </section>

            <section className="featured-work">
                <div className="featured-work-header">
                    <h2>Soft Washing and Powerwashing</h2>
                    <h3>Take a look at some of the superior services we offer</h3>
                    <p>Click and drag on the slider to see the difference</p>
                </div>

                <div className="compare-image-container">
                    <div className="image-and-review">
                        <div className="image-container">
                            <ImageComparison beforeImage={paver1} afterImage={paver2} />
                        </div>
                    <div className="review-text">
                        <h3>Paver Restoration</h3>
                        <p>
                        See how our power washing services removed years of dirt and grime,
                        making these pavers look brand new.
                        </p>
                        <Link to="/services/Powerwashing" className="contact-button1">Powerwashing</Link>

                    </div>
                </div>
                <div className="image-and-review">
                    <div className="image-container">
                        <ImageComparison beforeImage={before4} afterImage={after4} />
                    </div>
                    <div className="review-text">
                        <h3>Surface Cleaning</h3>
                        <p>
                        Our pressure washing restored the beauty of this pool deck, removing
                        stains and buildup with ease.
                        </p>
                        <Link to="/services/Powerwashing" className="contact-button1">Learn more</Link>

                    </div>
                </div>
                <div className="image-and-review">
                    <div className="image-container">
                        <ImageComparison beforeImage={wall1} afterImage={wall2} />
                    </div>
                    <div className="review-text">
                        <h3>House Washing & Window Cleaning</h3>
                        <p>
                        Check out how we transformed this wall, giving it a fresh, clean
                        appearance after years of neglect.
                        </p>
                        <Link to="/services/HouseWashing" className="contact-button1">Soft Washing</Link>

                    </div>
                </div>
                <div className="image-and-review">
                    <div className="image-container">
                        <ImageComparison beforeImage={roof1} afterImage={roof2} />
                    </div>
                    <div className="review-text">
                        <h3>Roof Washing</h3>
                        <p>
                        Our team erased the black streaks on this roof, returning it to its former glory.
                        </p>
                        <Link to="/services/RoofCleaning" className="contact-button1">Roof Cleaning</Link>

                    </div>
                </div>

            </div>
            </section>

            <section className="customer-reviews">
                <h2>Real People, Real Reviews</h2>
                <div className="reviews-container">
                <div className="review">
                    <p>"The fine gentleman from A&A power washing just finished up at my property earlier today. They did an excellent job, the concrete looks new, and they even took care of dusting off the spring pollen from my solar panels. They responded quickly when I put in a quote request last week, and got me taken care of first thing today being Monday."</p>
                    <span>- Mike Mitten</span>
                    <a href="https://g.co/kgs/YFESBHM" target="_blank" rel="noopener noreferrer">Read Full Review</a>
                </div>
                <div className="review">
                    <p>"A&A did a great job. Thorough and efficient. Strongly recommend them if you need power washing"</p>
                    <span>- Stephen Orlofsky</span>
                    <a href="https://g.co/kgs/YFESBHM" target="_blank" rel="noopener noreferrer">Read Full Review</a>
                </div>
                <div className="review">
                    <p>"They showed up on time, did a very deep clean and worked with me to move a bunch of bulky items out of the way. Everything looks bright and new again. I would hire them again next year."</p>
                    <span>- Dan Reiss</span>
                    <a href="https://www.facebook.com/profile.php?id=61559772597900&sk=reviews" target="_blank" rel="noopener noreferrer">Read Full Review</a>
                </div>
                </div>
            </section>

            <section className="testimonials">
                <div>
                    {/* <CustomerReviews /> */}
                </div>
            </section>

            <footer className="business-footer">
                <div className="footer-section contact-info">
                    <h4>Contact Us</h4>
                    <p>Text or Call Us: (856) 281-2658</p>
                    <p>Email: aapowerwashers@gmail.com</p>
                    <p>Address: 41 Cooper Run Drive, Cherry Hill, USA</p>
                </div>
                <div className="footer-section social-links">
                    <h4>Follow Us</h4>
                    <a href="https://www.facebook.com/profile.php?id=61559772597900" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/aapowerwashers/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footer-section business-hours">
                    <h4>Business Hours</h4>
                    <p>8:00 AM - 6:00 PM</p>
                    <p>Monday thru Friday</p>

                </div>
            </footer>
        </div>
        
    );

}

export default Home;
