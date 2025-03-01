import React from 'react';
import { Link } from 'react-router-dom';
import ImageComparison from './ImageComparison';
import './town-specific-landing-page.css';
import { FaHome, FaLeaf, FaRoad, FaWarehouse, FaHandSparkles, FaTrash, FaMapMarkerAlt, FaAward, FaClock } from 'react-icons/fa';

/* Images */
// You can replace these with West Deptford-specific images
import margateHero from './images/home-hero.webp'; // Replace with West Deptford beach/town image
import beforeDeck from './images/before4.jpeg';
import afterDeck from './images/after4.jpeg';
import beforePaver from './images/paver1.webp';
import afterPaver from './images/paver2.webp';
import beforeWall from './images/wall1.webp';
import afterWall from './images/wall2.webp';
import beforeRoof from './images/roof1.webp';
import afterRoof from './images/roof2.webp';

import { Helmet } from 'react-helmet';

function WestDeptford() {
    const services = [
        {
            id: 1,
            icon: <FaHome size={32} />,
            title: 'House Washing',
            description: 'Restore your West Deptford home’s exterior with our gentle but effective cleaning process.',
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
            description: 'Revitalize your West Deptford property’s walkways, patios, and driveways.',
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
            description: 'Enjoy crystal clear views of West Deptford’s surroundings.',
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
            description: 'We understand West Deptford’s unique environment and the challenges it presents to homeowners.'
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
                <title>A&A Powerwashing | West Deptford, NJ</title>
                <meta name="description" content="Professional power washing services in West Deptford, NJ. Our eco-friendly solutions restore and protect your property from environmental damage." />
                <meta name="keywords" content="powerwashing West Deptford, pressure washing West Deptford, West Deptford property maintenance, West Deptford home services, property cleaning, A&A Powerwashing WestDeptford" />
                <meta property="og:title" content="A&A Powerwashing - West Deptford" />
                <meta property="og:description" content="Premier power washing services for West Deptford homes and businesses. Restore your property's beauty with our eco-friendly cleaning solutions." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com/westdeptford" />
            </Helmet>

            <section className="town-hero" style={{ backgroundImage: `url(${margateHero})` }}>
                <div className="town-hero-content">
                    <h1>West Deptford's Trusted Power Washing Service</h1>
                    <p>Specialized cleaning solutions for local properties</p>
                    <Link to="/contact" className="town-cta-button">Get a Free Quote</Link>
                </div>
            </section>

            <section className="town-intro">
                <div className="town-intro-container">
                    <h2>Power Washing Services in West Deptford, NJ</h2>
                    <p>
                        A&A Powerwashing provides specialized cleaning services for West Deptford's unique environment. Local weather conditions and surface wear can quickly deteriorate your property's appearance and value. Our eco-friendly cleaning solutions are specifically formulated to address these challenges, protecting your investment while maintaining West Deptford's appeal.
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
                    <h2>Our West Deptford Services</h2>
                    <p className="town-services-tagline">Professional cleaning solutions tailored for local properties</p>
                    <div className="town-services-grid">
                        {services.map((service) => (
                            <div className="town-service-card" key={service.id}>
                                <div className="town-service-icon">{service.icon}</div>
                                <h3 className="town-service-title">{service.title}</h3>
                                <p className="town-service-description">{service.description}</p>
                                <Link to={service.link} className="town-service-button">
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="town-showcase">
                <div className="town-showcase-header">
                    <h2>Our Work in West Deptford</h2>
                    <p>See the difference our specialized cleaning makes for local properties</p>
                </div>
                <div className="town-comparison-container">
                    <div className="town-comparison-item">
                        <div className="town-image-container">
                            <ImageComparison beforeImage={beforePaver} afterImage={afterPaver} />
                        </div>
                        <div className="town-comparison-text">
                            <h3>Paver Restoration</h3>
                            <p>Accumulated grime on these West Deptford pavers was no match for our specialized cleaning process.</p>
                            <Link to="/services/Powerwashing" className="town-service-link">Learn about our paver cleaning</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="town-cta">
                <div className="town-cta-container">
                    <h2>Ready to Restore Your West Deptford Property?</h2>
                    <p>Our team is ready to help you protect your investment with our specialized cleaning services.</p>
                    <Link to="/contact" className="town-cta-button">Get Your Free Quote Today</Link>
                </div>
            </section>
        </div>
    );
}

export default WestDeptford;
