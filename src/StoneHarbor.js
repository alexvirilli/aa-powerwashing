import React from 'react';
import { Link } from 'react-router-dom';
import ImageComparison from './ImageComparison';
import './town-specific-landing-page.css';
import { FaHome, FaLeaf, FaRoad, FaWarehouse, FaHandSparkles, FaTrash, FaMapMarkerAlt, FaAward, FaClock } from 'react-icons/fa';

/* Images */
// You can replace these with Stone Harbor-specific images
import margateHero from './images/home-hero.webp'; // Replace with StoneHarbor beach/town image
import beforeDeck from './images/before4.jpeg';
import afterDeck from './images/after4.jpeg';
import beforePaver from './images/paver1.webp';
import afterPaver from './images/paver2.webp';
import beforeWall from './images/wall1.webp';
import afterWall from './images/wall2.webp';
import beforeRoof from './images/roof1.webp';
import afterRoof from './images/roof2.webp';
import Button from './Button';
import { Helmet } from 'react-helmet';

function StoneHarbor() {
    const services = [
        {
          id: 1,
          icon: <FaHome size={32} />,
          title: 'House Washing',
          description: 'Restore your Stone Harbor home\'s exterior with our gentle but effective cleaning process.',
          link: '/services/Housewashing'
        },
        {
          id: 2,
          icon: <FaWarehouse size={32} />,
          title: 'Roof Cleaning',
          description: 'Protect your investment from salt air damage with our specialized roof cleaning.',
          link: '/services/RoofCleaning'
        },
        {
          id: 3,
          icon: <FaRoad size={32} />,
          title: 'Surface Cleaning',
          description: 'Revitalize your Stone Harbor property\'s walkways, patios, and driveways.',
          link: '/services/Powerwashing'
        },
        {
          id: 4,
          icon: <FaLeaf size={32} />,
          title: 'Gutter Cleaning',
          description: 'Prevent water damage with our thorough gutter cleaning services.',
          link: '/services/GutterCleaning'
        },
        {
          id: 5,
          icon: <FaHandSparkles size={32} />,
          title: 'Window Cleaning',
          description: 'Enjoy crystal clear views of Stone Harbor\'s beautiful beaches and bay.',
          link: '/services/WindowCleaning'
        },
        {
          id: 6,
          icon: <FaTrash size={32} />,
          title: 'Trash Can Cleaning',
          description: 'Eliminate odors and bacteria from your waste bins with our sanitizing service.',
          link: '/services/BinCleaning'
        }
    ];

    const localFeatures = [
        {
            icon: <FaMapMarkerAlt size={28} />,
            title: 'Local Expertise',
            description: 'We understand Stone Harbor\'s unique coastal environment and the challenges it presents to homeowners.'
        },
        {
            icon: <FaAward size={28} />,
            title: 'Beach Property Specialists',
            description: 'Our methods are tailored to address salt spray, sand accumulation, and coastal humidity.'
        },
        {
            icon: <FaClock size={28} />,
            title: 'Flexible Scheduling',
            description: 'We work around your schedule, whether you are a year-round resident or seasonal homeowner.'
        }
    ];

    return (
        <div className="town-page">
            <Helmet>
                <title>A&A Powerwashing | Stone Harbor, NJ</title>
                <meta name="description" content="Professional power washing services in Stone Harbor, NJ. Our eco-friendly solutions restore and protect your coastal property from salt air damage." />
                <meta name="keywords" content="powerwashing Stone Harbor, pressure washing Stone Harbor, Stone Harbor property maintenance, Stone Harbor home services, beach house cleaning, A&A Powerwashing Stone Harbor, shore property maintenance" />
                <meta property="og:title" content="A&A Powerwashing - Stone Harbor" />
                <meta property="og:description" content="Premier power washing services for Stone Harbor homes and businesses. Restore your property's beauty with our eco-friendly cleaning solutions." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com/margate" />
            </Helmet>

            <section className="town-hero" style={{ backgroundImage: `url(${margateHero})` }}>
                <div className="town-hero-content">
                    <h1>Stone Harbor's Trusted Power Washing Service</h1>
                    <p>Specialized cleaning solutions for coastal properties</p>
                    <Button to="/contact" size="medium" padding="1rem 2rem" margin="auto">Get A Free Quote</Button>
                </div>
            </section>

            <section className="town-intro">
                <div className="town-intro-container">
                    <h2>Power Washing Services in Stone Harbor, NJ</h2>
                    <p>A&A Powerwashing provides specialized cleaning services for Stone Harbor's unique coastal environment. Salt air, humidity, and sand can quickly deteriorate your property's appearance and value. Our eco-friendly cleaning solutions are specifically formulated to address these challenges, protecting your investment while maintaining Stone Harbor's natural beauty.</p>
                    
                    <div className="town-features">
                        {localFeatures.map((feature, index) => (
                            <div className="town-feature" key={index}>
                                <div className="town-feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="town-services">
                <div className="town-services-container">
                    <h2>Our Stone Harbor Services</h2>
                    <p className="town-services-tagline">Professional cleaning solutions tailored for coastal properties</p>
                    <div className="town-services-grid">
                        {services.map((service) => (
                            <div className="town-service-card" key={service.id}>
                                <div className="town-service-icon">{service.icon}</div>
                                <h3 className="town-service-title">{service.title}</h3>
                                <p className="town-service-description">{service.description}</p>
                                <Button to={service.link} size="small" margin="auto">Get Started</Button>

                                {/* <Link to={service.link} className="town-service-button">
                                    Get Started
                                </Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="town-benefits">
                <div className="town-benefits-container">
                    <h2>Why Choose A&A for Your Stone Harbor Property</h2>
                    <div className="town-benefits-content">
                        <div className="town-benefits-text">
                            <p>At A&A Powerwashing, we understand the unique challenges that Stone Harbor property owners face. The coastal environment, with its salt air and humidity, can quickly deteriorate surfaces and lead to mold and mildew growth.</p>
                            <p>Our team specializes in eco-friendly cleaning solutions that are tough on dirt but gentle on your property and the environment. We're committed to preserving both your investment and Stone Harbor's natural beauty.</p>
                            <p>When you choose A&A, you're working directly with experienced professionals who understand coastal properties and will provide personalized service from start to finish.</p>
                            <Link to="/contact" className="town-secondary-button">Schedule Your Service</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="town-showcase">
                <div className="town-showcase-header">
                    <h2>Our Work in Stone Harbor</h2>
                    <p>See the difference our specialized cleaning makes for coastal properties</p>
                </div>

                <div className="town-comparison-container">
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforePaver} afterImage={afterPaver} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Paver Restoration</h3>
                            <p>Salt and sand accumulation on these Stone Harbor pavers was no match for our specialized cleaning process.</p>
                            <Button to="/services/Powerwashing" size="medium" >Learn about paver cleaning</Button>
                        </div>
                    </div>
                    
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforeDeck} afterImage={afterDeck} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Deck Cleaning</h3>
                            <p>This Stone Harbor beach home deck was restored to its original beauty, removing years of salt air damage.</p>
                            <Button to="/services/Powerwashing" size="medium" >Explore deck cleaning</Button>
                        </div>
                    </div>
                    
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforeWall} afterImage={afterWall} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Home Exterior Cleaning</h3>
                            <p>Our soft washing technique safely removed salt deposits and mold from this Stone Harbor residence.</p>
                            <Button to="/services/HouseWashing" size="medium" >View house washing options</Button>
                        </div>
                    </div>
                    
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforeRoof} afterImage={afterRoof} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Roof Cleaning</h3>
                            <p>Algae and black streaks were safely removed from this Stone Harbor home's roof, extending its lifespan.</p>
                            <Button to="/services/RoofCleaning" size="medium" >Discover roof cleaning options</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="town-testimonials">
                <h2>What Stone Harbor Residents Are Saying</h2>
                <div className="town-testimonials-container">
                    <div className="town-testimonial">
                        <p>"A&A completely transformed our beach house exterior! The salt air had really taken a toll, but their cleaning made it look brand new. Highly recommend for any Stone Harbor property owner."</p>
                        <span>- Jennifer H., Stone Harbor Homeowner</span>
                    </div>
                    <div className="town-testimonial">
                        <p>"We've tried other services in the past, but no one understands the unique needs of a shore property like A&A. Their attention to detail and knowledge of how to treat coastal materials is unmatched."</p>
                        <span>- Michael T., Stone Harbor Resident</span>
                    </div>
                    <div className="town-testimonial">
                        <p>"As a seasonal resident, it's great to have someone I can trust to keep my Stone Harbor property looking its best. A&A is responsive, professional, and does exceptional work."</p>
                        <span>- Sarah L., Vacation Home Owner</span>
                    </div>
                </div>
            </section> */}

            <section className="town-cta">
                <div className="town-cta-container">
                    <h2>Ready to Restore Your Stone Harbor Property?</h2>
                    <p>Our team is ready to help you protect your coastal investment with our specialized cleaning services.</p>
                    <Button to="/contact" size="medium" margin="auto">Get A Free Quote</Button>
                </div>
            </section>
        </div>
    );
}

export default StoneHarbor;
