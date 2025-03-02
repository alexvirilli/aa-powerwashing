import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

import ImageComparison from './ImageComparison';
import { FaHome, FaLeaf, FaRoad, FaWarehouse, FaHandSparkles, FaTrash } from 'react-icons/fa';


/* Images */
import image5 from './images/home-hero.webp';
import before4 from './images/before4.jpeg';
import after4 from './images/after4.jpeg';
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

    const services = [
        {
          id: 1,
          icon: <FaHome size={32} />,
          title: 'House Washing',
          description: 'Gently removes dirt, mold, and grime to restore your homes beauty.',
          link: '/services/Housewashing'
        },
        {
          id: 2,
          icon: <FaWarehouse size={32} />,
          title: 'Roof Cleaning',
          description: 'Eliminates black streaks and extends the life of your roof.',
          link: '/services/RoofCleaning'
        },
        {
          id: 3,
          icon: <FaRoad size={32} />,
          title: 'Surface Cleaning & Powerwashing',
          description: 'Revitalizes walkways, patios, and driveways to look like new.',
          link: '/services/Powerwashing'
        },
        {
          id: 4,
          icon: <FaLeaf size={32} />,
          title: 'Gutter Cleaning',
          description: 'Removes debris to prevent water damage and maintain proper drainage.',
          link: '/services/GutterCleaning'
        },
        {
          id: 5,
          icon: <FaHandSparkles size={32} />,
          title: 'Window Cleaning',
          description: 'Preserves wood surfaces and restores natural beauty.',
          link: '/services/WindowCleaning'
        },
        {
          id: 6,
          icon: <FaTrash size={32} />,
          title: 'Trash Can Cleaning',
          description: 'Professional cleaning solutions for businesses and properties.',
          link: '/services/BinCleaning'
        }
      ];

      const serviceAreas = [
        {
            county: "Camden County",
            towns: ["Cherry Hill", "Haddonfield", "Haddon Heights", "Voorhees", "Haddon Township", "Collingswood"]
          },
        {
          county: "Atlantic County",
          towns: ["Margate City", "Ventnor", "Ocean City", "Somers Point"]
        },
        {
          county: "Cape May County",
          towns: ["Stone Harbor", "Cape May", "Strathmere", "Ocean View", "Sea Isle City", "Cape May Court House", "Avalon", "Wildwood"]
        },
        {
          county: "Burlington County",
          towns: ["Marlton", "Mount Laurel", "Moorestown", "Medford", "Marlton Lakes", "Medford Lakes", "Delran", "Shamong", "Tabernacle", "Lumberton", "Cinnaminson"]
        },
        
        {
          county: "Gloucester County",
          towns: ["Woolwich", "Mullica Hill", "Washington Township", "West Deptford", "Swedesboro"]
        }
      ];

      // State to track which counties are expanded/collapsed
        const [expandedCounties, setExpandedCounties] = useState(
            serviceAreas.map(area => area.county) // Default all expanded
        );

        // Toggle county expansion
        const toggleCounty = (county) => {
            if (expandedCounties.includes(county)) {
            setExpandedCounties(expandedCounties.filter(c => c !== county));
            } else {
            setExpandedCounties([...expandedCounties, county]);
            }
        };

        // Function to create URL-friendly town names
        const formatTownUrl = (town) => {
            return town.replace(/\s+/g, '');
        };

    return (
        <div>

            <Helmet>
                <title>A&A Powerwashing | Home</title>
                <meta name="description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, pressure washing, power washing, cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, south jersey powerwashing, sj powerwashing, cherry hill, margate" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
                <link rel="stylesheet" href="./src/Home.css" />

            </Helmet>

            <section className="hero" style={{ backgroundImage: `url(${image5})` }}>

                <div className="landing-contact">
                    <h1>South Jersey's Premier Pressure Washing Service</h1>
                    <Link to="/contact" className="contact-button1">Get a free quote</Link>
                </div>

                <svg className="hero-curve" viewBox="0 0 1440 320">
                <path fill="#F2F0EF" fillOpacity="1"
                    d="M0,280 C180,300 360,300 540,290 C720,280 900,260 1080,265 C1260,270 1440,290 1440,320 L0,320 Z">
                </path>
            </svg>
                
            </section>


            <section className="services-section-home">
                <div className="services-container-home">
                    <h2 className="services-heading-home">Services we offer</h2>
                    <p className="services-tagline-home">Professional, eco-friendly cleaning solutions for your home</p>
                    <div className="services-grid-home">
                    {services.map((service) => (
                        <div className="service-card-home" key={service.id}>
                        <div className="service-icon-home">{service.icon}</div>
                        <h3 className="service-title-home">{service.title}</h3>
                        <p className="service-description-home">{service.description}</p>
                        <a href={service.link} className="service-button-home">
                            Get Started
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


            <section id="explainer" className="explainer">

                <div className='blurb-container'>

                <div class='choose-the-best'>
                    <h1>Providing Eco-Friendly Solutions to South Jersey Homes</h1>
                </div>
                <div class='small-business-blurb'>
                    <p>We are dedicated to meeting the exact needs of our clients.  With A&A, you will be communicating directly with a business representative throughout the entire process.  Take the first step in protecting your home and experience top of line customer service by filling out our <Link to="/contact">contact form</Link>.</p>
                </div>

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
                        <Link to="/services/Powerwashing" className="contact-button-before-after">Powerwashing</Link>

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
                        <Link to="/services/Powerwashing" className="contact-button-before-after">Learn more</Link>

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
                        <Link to="/services/HouseWashing" className="contact-button-before-after">Soft Washing</Link>

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
                        <Link to="/services/RoofCleaning" className="contact-button-before-after">Roof Cleaning</Link>

                    </div>
                </div>

            </div>
            </section>

            <section className='service-areas'>
            <div className="service-areas-container">
      <h2 className="service-areas-title">Areas We Service</h2>
      <p className="service-areas-subtitle">Professional pressure washing services available in these locations</p>
      
      <div className="counties-grid">
        {serviceAreas.map((area) => (
          <div key={area.county} className="county-card">
            <div className="county-header">
              <h3>{area.county}</h3>
            </div>
            
            <ul className="towns-list">
              {area.towns.map((town) => (
                <li key={town} className="town-item">
                  <a href={`./${formatTownUrl(town)}`} className="town-link">
                    <Check size={16} className="check-icon" />
                    <span>{town}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>

    <div className="section-divider">
            <hr className="divider-line" />
        </div>
         

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

        </div>
        
    );

}

export default Home;
