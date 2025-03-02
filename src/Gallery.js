import React, { useState } from 'react';
import pic from './images/home1.webp'
import './Gallery.css';

const Gallery = () => {
  // Sample gallery data - replace with your actual project images and descriptions
  const galleryItems = [
    {
      id: 1,
      image: "/api/placeholder/600/400",
      title: "Driveway Restoration",
      description: "Complete cleanup and restoration of a severely stained concrete driveway. 10 years of dirt and grime removed in just 2 hours!",
      category: "residential"
    },
    {
      id: 2,
      image: "/api/placeholder/600/400",
      title: "Storefront Cleaning",
      description: "Revitalized the entrance of this local business, removing years of foot traffic stains and environmental buildup.",
      category: "commercial"
    },
    {
      id: 3,
      image: "/api/placeholder/600/400",
      title: "Deck Restoration",
      description: "Wooden deck restored to its original beauty. Pressure washing removed algae, mold, and weathering damage.",
      category: "residential"
    },
    {
      id: 4,
      image: "/api/placeholder/600/400",
      title: "Parking Garage Deep Clean",
      description: "Commercial garage cleaning for a local apartment complex. Removed oil stains, tire marks, and debris.",
      category: "commercial"
    },
    {
      id: 5,
      image: "/api/placeholder/600/400",
      title: "Patio Transformation",
      description: "This patio was covered in green algae and looked dull - now it's ready for summer entertaining!",
      category: "residential"
    },
    {
      id: 6,
      image: "/api/placeholder/600/400",
      title: "Restaurant Exterior",
      description: "Complete exterior cleaning for this family-owned restaurant. Clean storefront means more customers!",
      category: "commercial"
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
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src="./src/images/home1.jpeg"
            alt="Pressure washing in action" 
          />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Our Work Gallery</h1>
            <p>View our completed projects and see the difference professional pressure washing can make.</p>
          </div>
        </div>
      </div>

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
                  <img src="/api/placeholder/400/300" alt="Before cleaning" />
                  <div className="comparison-label before">BEFORE</div>
                </div>
                <div className="comparison-image">
                  <img src="/api/placeholder/400/300" alt="After cleaning" />
                  <div className="comparison-label after">AFTER</div>
                </div>
              </div>
              <div className="comparison-content">
                <h3>Concrete Driveway Renewal</h3>
                <p>This driveway hadn't been cleaned in over 5 years. Our high-pressure cleaning system removed deep-set stains and restored the concrete to its original appearance.</p>
              </div>
            </div>
            
            <div className="before-after-item">
              <div className="comparison-container">
                <div className="comparison-image">
                  <img src="/api/placeholder/400/300" alt="Before cleaning" />
                  <div className="comparison-label before">BEFORE</div>
                </div>
                <div className="comparison-image">
                  <img src="/api/placeholder/400/300" alt="After cleaning" />
                  <div className="comparison-label after">AFTER</div>
                </div>
              </div>
              <div className="comparison-content">
                <h3>Brick Siding Restoration</h3>
                <p>Years of weather exposure had left this brick siding looking dull and grimy. Our gentle cleaning process removed the buildup while protecting the integrity of the brick and mortar.</p>
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


        </div>


        

      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Property?</h2>
          <p>
            Contact us today for a free estimate on your pressure washing project.
          </p>
          <button className="cta-button">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;