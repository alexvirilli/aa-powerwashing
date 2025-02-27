import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ImageComparison from './ImageComparison';
import CustomerReviews from './CustomerReviews';
import AccordionItem from './AccordionItem';
import before1 from './images/before1.jpeg';
import after1 from './images/after1.jpeg';
import before2 from './images/before2.jpeg';
import after2 from './images/after2.jpeg'
import before3 from './images/before3.jpeg';
import after3 from './images/after3.jpeg'
import before4 from './images/before4.jpeg';
import after4 from './images/after4.jpeg';
import before5 from './images/before5.jpeg';
import after5 from './images/after5.jpeg';
// import image1 from './images/home1.jpeg';
// import image2 from './images/home2.jpeg';
// import image3 from './images/home3.jpeg';
// import image4 from './images/home4.jpeg';
// import image5 from './images/home5.jpeg';
// import image6 from './images/home6.jpeg';
// import image7 from './images/home7.jpeg';
// import image8 from './images/home8.jpeg';
import image9 from './images/home9.webp';
// import image10 from './images/home10.jpeg';
import paver1 from './images/paver1.jpeg';
import paver2 from './images/paver2.jpeg';
import wall1 from './images/wall1.jpeg';
import wall2 from './images/wall2.jpeg';
import roof1 from './images/roof1.jpeg';
import roof2 from './images/roof2.jpeg';

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

    // const [currentImage, setCurrentImage] = useState(image1);
    // const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

    // const currentIndex = useRef(0); // Persist current index between renders

    // useEffect(() => {
    //     const imageCycle = setInterval(() => {
    //     currentIndex.current = (currentIndex.current + 1) % images.length; // Cycle through the images
    //     setCurrentImage(images[currentIndex.current]);
    //     }, 10000); // Change image every second

    //     return () => clearInterval(imageCycle); // Cleanup on component unmount
    // }, [images]);

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

            {/* <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <AccordionItem title="How much do your powerwashing services cost?">
                    Our pricing is competitive and based on the specific needs of each job. We offer free estimates, so please contact us to get a customized quote for your project.
                </AccordionItem>
                <AccordionItem title="How do I schedule a powerwashing service?">
                    You can schedule a service by calling us at (856) 281-2658, emailing us at aapowerwashers@gmail.com, or filling out the contact form on our website. We will get back to you promptly to arrange an appointment.
                </AccordionItem>
                <AccordionItem title="What areas do you serve?">
                    We serve New Jersey, primarily New Brunswick, Cherry Hill, and the surrounding regions. If you are unsure whether we service your area, please contact us, and we’ll be happy to assist.
                </AccordionItem>
                <AccordionItem title='Why should I choose A&A Powerwashing?'>
                    As hardworking college students, we bring dedication, enthusiasm, and a strong work ethic to every job. We offer high-quality, affordable powerwashing services with a focus on customer satisfaction and environmental responsibility.
                </AccordionItem>
            </section> */}

            


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


            {/* <div className='home-page-padding'>
            </div> */}
        </div>
        
    );

}

export default Home;
