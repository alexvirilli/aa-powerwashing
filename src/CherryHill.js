import React from 'react';
import { Link } from 'react-router-dom';
import ImageComparison from './ImageComparison';
import './town-specific-landing-page.css';
import Button from './Button';
import { FaHome, FaLeaf, FaRoad, FaWarehouse, FaHandSparkles, FaTrash, FaMapMarkerAlt, FaAward, FaClock } from 'react-icons/fa';

/* Images */
// You can replace these with CherryHill-specific images
import margateHero from './images/home-hero.webp'; // Replace with CherryHill beach/town image
import beforeDeck from './images/before4.jpeg';
import afterDeck from './images/after4.jpeg';
import beforePaver from './images/paver1.webp';
import afterPaver from './images/paver2.webp';
import beforeWall from './images/wall1.webp';
import afterWall from './images/wall2.webp';
import beforeRoof from './images/roof1.webp';
import afterRoof from './images/roof2.webp';

import { Helmet } from 'react-helmet';

function CherryHill() {
    const services = [
        {
            id: 1,
            icon: <FaHome size={32} />,
            title: 'House Washing',
            description: 'Restore your Cherry Hill home\'s exterior with our gentle but effective cleaning process.',
            link: '/services/Housewashing'
        },
        {
            id: 2,
            icon: <FaWarehouse size={32} />,
            title: 'Roof Cleaning',
            description: 'Protect your investment from environmental damage with our specialized roof cleaning.',
            link: '/services/RoofCleaning'
        },
        {
            id: 3,
            icon: <FaRoad size={32} />,
            title: 'Surface Cleaning',
            description: 'Revitalize your Cherry Hill property\'s walkways, patios, and driveways.',
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
            description: 'Enjoy crystal clear views of Cherry Hill’s surroundings.',
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
            description: 'We understand Cherry Hill’s unique environment and the challenges it presents to homeowners.'
        },
        {
            icon: <FaAward size={28} />,
            title: 'Property Specialists',
            description: 'Our methods are tailored to address local weather conditions and surface wear.'
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
                <title>A&A Powerwashing | Cherry Hill, NJ</title>
                <meta name="description" content="Professional power washing services in Cherry Hill, NJ. Our eco-friendly solutions restore and protect your property from environmental damage." />
                <meta name="keywords" content="powerwashing Cherry Hill, pressure washing Cherry Hill, Cherry Hill property maintenance, Cherry Hill home services, property cleaning, A&A Powerwashing Cherry Hill" />
                <meta property="og:title" content="A&A Powerwashing - Cherry Hill" />
                <meta property="og:description" content="Premier power washing services for Cherry Hill homes and businesses. Restore your property's beauty with our eco-friendly cleaning solutions." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com/margate" />
            </Helmet>

            <section className="town-hero" style={{ backgroundImage: `url(${margateHero})` }}>
                <div className="town-hero-content">
                    <h1>Cherry Hill's Trusted Power Washing Service</h1>
                    <p>Specialized cleaning solutions for local properties</p>
                    <Button to="/contact" size="large" padding="1rem 2rem" margin="auto">Get A Free Quote</Button>
                </div>
            </section>

            <section className="town-intro">
                <div className="town-intro-container">
                    <h2>Power Washing Services in Cherry Hill, NJ</h2>
                    <p>
                        A&A Powerwashing provides specialized cleaning services for Cherry Hill's unique environment. Local weather conditions and surface wear can quickly deteriorate your property's appearance and value. Our eco-friendly cleaning solutions are specifically formulated to address these challenges, protecting your investment while maintaining Cherry Hill's appeal.
                    </p>
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
                    <h2>Our Cherry Hill Services</h2>
                    <p className="town-services-tagline">Professional cleaning solutions tailored for local properties</p>
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
                    <h2>Why Choose A&A for Your Cherry Hill Property</h2>
                    <div className="town-benefits-content">
                        <div className="town-benefits-text">
                            <p>
                                At A&A Powerwashing, we understand the unique challenges that Cherry Hill property owners face. Environmental factors can quickly deteriorate surfaces and lead to mold and mildew growth.
                            </p>
                            <p>
                                Our team specializes in eco-friendly cleaning solutions that are tough on dirt but gentle on your property and the environment. We're committed to preserving both your investment and Cherry Hill's beauty.
                            </p>
                            <p>
                                When you choose A&A, you're working directly with experienced professionals who understand local conditions and will provide personalized service from start to finish.
                            </p>
                            <Link to="/contact" className="town-secondary-button">Schedule Your Service</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="town-showcase">
                <div className="town-showcase-header">
                    <h2>Our Work in Cherry Hill</h2>
                    <p>See the difference our specialized cleaning makes for local properties</p>
                </div>
                <div className="town-comparison-container">
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforePaver} afterImage={afterPaver} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Paver Restoration</h3>
                            <p>Accumulated grime on these Cherry Hill pavers was no match for our specialized cleaning process.</p>
                            <Button to="/services/Powerwashing" size="medium" >Learn about paver cleaning</Button>
                        </div>
                    </div>
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforeDeck} afterImage={afterDeck} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Deck Cleaning</h3>
                            <p>This Cherry Hill deck was restored to its original beauty, removing years of wear and weathering.</p>
                            <Button to="/services/Powerwashing" size="medium" >Explore deck cleaning</Button>
                        </div>
                    </div>
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforeWall} afterImage={afterWall} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Home Exterior Cleaning</h3>
                            <p>Our soft washing technique safely removed buildup and mold from this Cherry Hill residence.</p>
                            <Button to="/services/HouseWashing" size="medium" >Learn about house washing solutions</Button>
                        </div>
                    </div>
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforeRoof} afterImage={afterRoof} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Roof Cleaning</h3>
                            <p>Algae and dark streaks were effectively removed from this Cherry Hill home's roof, extending its lifespan.</p>
                            <Button to="/services/RoofCleaning" size="medium" >Learn about roof cleaning options</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="town-testimonials">
                <h2>What Cherry Hill Residents Are Saying</h2>
                <div className="town-testimonials-container">
                    <div className="town-testimonial">
                        <p>"A&A completely transformed our home exterior! Their cleaning service removed years of buildup and wear, making our property look brand new. Highly recommend for any Cherry Hill property owner."</p>
                        <span>- Jennifer H., Cherry Hill Homeowner</span>
                    </div>
                    <div className="town-testimonial">
                        <p>"No other service understands the challenges of Cherry Hill properties like A&A. Their attention to detail is unmatched."</p>
                        <span>- Michael T., Cherry Hill Resident</span>
                    </div>
                    <div className="town-testimonial">
                        <p>"A&A is professional, reliable, and truly cares about the quality of their work. My Cherry Hill property has never looked better."</p>
                        <span>- Sarah L., Vacation Home Owner</span>
                    </div>
                </div>
            </section> */}

            <section className="town-cta">
                <div className="town-cta-container">
                    <h2>Ready to Restore Your Cherry Hill Property?</h2>
                    <p>Our team is ready to help you protect your investment with our specialized cleaning services.</p>
                    <Button to="/contact" size="large" margin="auto" >Get your free quote today</Button>
                    </div>
            </section>
        </div>
    );
}

export default CherryHill;
