import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic from './images/home1.webp'
import './Gallery.css';
import driveway_restoration from './images/gallery-residential-driveway.webp';
import playground_commercial from './images/gallery-commercial-playground.webp';
import deck from './images/gallery-deck2.webp';
import matts_house_before from './images/gallery-residential-house-before.jpeg';
import matts_house_after from './images/gallery-residential-house-after.jpeg';
import wooden_fence from './images/gallery-residential-wooden-fence.webp';
import playground from './images/gallery-commercial-playground.webp';
import patio from './images/gallery-residential-patio.webp';
import paver from './images/gallery-residential-paver.jpeg';
import stucco from './images/gallery-residential-stucco.webp';
import jans from './images/jans-storefront.webp';
import short_hills from './images/home1.webp';
import brick_before from './images/gallery-brick-walkway-before.webp';
import brick_after from './images/gallery-brick-walkway-after.webp';
import { Contact } from 'lucide-react';
import { Helmet } from 'react-helmet';


const Gallery = () => {
  // Sample gallery data - replace with your actual project images and descriptions
  const galleryItems = [
    {
      id: 1,
      image: driveway_restoration,
      title: "Driveway Restoration",
      description: "Complete cleanup and restoration of a severely stained concrete driveway. 10 years of dirt and grime removed in just 2 hours!",
      category: "residential"
    },
    {
      id: 2,
      image: playground,
      title: "Playground",
      description: "We are priveleged to have worked with Haddonfield's First Presbyterian Church to clean their playground",
      category: "commercial"
    },
    {
      id: 3,
      image: deck,
      title: "Deck Restoration",
      description: "Composite deck restored to its original beauty. Pressure washing removed algae, mold, and weathering damage.",
      category: "residential"
    },
    {
      id: 4,
      image: paver,
      title: "Paver Cleaning",
      description: "Our team used a combination of eco friendly chemicals and light surface cleaning to completely renew these pavers.",
      category: "residential"
    },
    {
      id: 5,
      image: patio,
      title: "Patio Transformation",
      description: "This patio was covered in green algae and looked dull - now it's ready for summer entertaining!",
      category: "residential"
    },
    {
      id: 6,
      image: wooden_fence,
      title: "Wooden Fence",
      description: "Completely revitalized this haddonfield wooden fence",
      category: "residential"
    },
    {
        id: 7,
        image: stucco,
        category: "residential",
        title: "Stucco Cleaning"
      },
      {
        id: 8,
        image: jans,
        category: "commercial",
        title: "Storefront Cleaning"
      },
      {
        id: 9,
        image: short_hills,
        category: "residential",
        title: "House & Driveway Cleaning"
      }

  ];

  // State for filtering
  const [filter, setFilter] = useState('all');
  
  // Filtered gallery items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (

    
    <div className="gallery-container">

            <Helmet>
                <title>A&A Powerwashing | Gallery</title>
                <meta name="description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, pressure washing, power washing, cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, south jersey powerwashing, sj powerwashing, cherry hill, margate" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
                <link rel="stylesheet" href="./src/Gallery.css" />

            </Helmet>


      {/* Hero Section */}
      <div className="gallery-hero-section">
        <div className="gallery-hero-image">
         
        </div>
        <div className="gallery-hero-content">
          <div className="gallery-hero-text">
            <h1>Our Work Gallery</h1>
            <p>View our completed projects and see the difference professional pressure washing can make.</p>
          </div>
        </div>
    </div>

    <svg className="gallery-hero-divider" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="#1e3a8a"/>
    </svg>

      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-content">
          <h2>Transform Your Property With Professional Power Washing</h2>
          <p>
            Browse through our gallery of completed projects to see what we can do for your home or business. 
            Every surface tells a story of renewal - from dingy and dirty to pristine and protected.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          <div className="filter-buttons">
            <button 
              onClick={() => setFilter('all')} 
              className={filter === 'all' ? 'active' : ''}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('residential')} 
              className={filter === 'residential' ? 'active' : ''}
            >
              Residential
            </button>
            <button 
              onClick={() => setFilter('commercial')} 
              className={filter === 'commercial' ? 'active' : ''}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="item-image">
                <img 
                  src={item.image} 
                  alt={item.title} 
                />
                <div className="item-category">
                  <span className={item.category === 'residential' ? 'residential' : 'commercial'}>
                    {item.category === 'residential' ? 'Residential' : 'Commercial'}
                  </span>
                </div>
              </div>
              <div className="item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Before & After Showcase */}
      <div className="before-after-section">
        <div className="before-after-content">
          <h2>Before & After Transformations</h2>
          
          <div className="before-after-grid">
            <div className="before-after-item">
              <div className="comparison-container">
                <div className="comparison-image">
                  <img src={matts_house_before} alt="Before cleaning" />
                  <div className="comparison-label before">BEFORE</div>
                </div>
                <div className="comparison-image">
                  <img src={matts_house_after} alt="After cleaning" />
                  <div className="comparison-label after">AFTER</div>
                </div>
              </div>
              <div className="comparison-content">
                <h3>House Cleaning Transformation</h3>
                <p>This house had years of natural growth accumulated on the siding.  Our team of experts was able to safely remove the grime and restore this Cherry Hill property to its former glory.</p>
              </div>
            </div>
            
            <div className="before-after-item">
              <div className="comparison-container">
                <div className="comparison-image">
                  <img src={brick_before} alt="Before cleaning" />
                  <div className="comparison-label before">BEFORE</div>
                </div>
                <div className="comparison-image">
                  <img src={brick_after} alt="After cleaning" />
                  <div className="comparison-label after">AFTER</div>
                </div>
              </div>
              <div className="comparison-content">
                <h3>Brick Walkway Restoration</h3>
                <p>Years of weather exposure had left this brick walkway looking dull and grimy. Our gentle cleaning process removed the buildup while protecting the integrity of the brick and mortar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">


        <div className="testimonial-content">
          <h2>What Our Customers Say</h2>
          
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>J</span>
              </div>
              <div className="testimonial-author">
                <h3>John Davis</h3>
                <p>Homeowner in Cherry Hill</p>
              </div>
            </div>
            <blockquote>
                "Alex and Aiden did a fantastic job power washing my mother and father's home. The house looks brand new. I especially happy because the brown residue on the gutters we're cleaned so they look brand new. I highly recommend these two young men. Their attention to detail is out of this world reasonably priced and very efficient in the work that they performed"
            </blockquote>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>S</span>
              </div>
              <div className="testimonial-author">
                <h3>Shari Hoffman</h3>
                <p>Homeowner in Cherry Hill</p>
              </div>
            </div>
            <blockquote>
                "The guys were terrific, moved everything, put it back! They did a great job powerwashing everything for us!!"
            </blockquote>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <span>R</span>
              </div>
              <div className="testimonial-author">
                <h3>Richard Selznick</h3>
                <p>Homeowner in Haddonfield</p>
              </div>
            </div>
            <blockquote>
                "Great service…Great guys. Very responsible. I recommend them without any hesitation."
            </blockquote>
          </div>


        </div>


        

      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Property?</h2>
          <p>
            Contact us today for a free estimate on your pressure washing project.
          </p>

          <Link to="/contact" className="cta-button">Get a free quote</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;