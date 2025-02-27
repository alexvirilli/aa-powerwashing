import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Powerwashing.css';

const Powerwashing = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Try to autoplay video when component mounts
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Auto-play was prevented. User must interact with the page first.");
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const residentialFaqs = [
    {
      question: "How often should I have my house exterior powerwashed?",
      answer: "We recommend having your home's exterior powerwashed once a year to remove buildup of dirt, mold, and mildew. However, homes in areas with heavy tree coverage or humid conditions may benefit from cleaning every 6-8 months."
    },
    {
      question: "Is powerwashing safe for all exterior surfaces?",
      answer: "Not all surfaces can withstand the same pressure levels. Our technicians are trained to adjust pressure settings appropriate for each surface type, whether it's vinyl siding, brick, stucco, or wood. We also use specialized low-pressure washing techniques for delicate surfaces."
    },
    {
      question: "Will powerwashing damage my plants and landscaping?",
      answer: "We take great care to protect your landscaping. Before beginning, we pre-rinse surrounding plants and use eco-friendly cleaning solutions. After service, we rinse plants again to ensure no cleaning solution remains."
    },
    {
      question: "How long does residential powerwashing take?",
      answer: "Typically, an average-sized home (2,000-2,500 sq ft) takes 2-4 hours to complete. Larger homes or those with extensive buildup may take longer. We'll provide a time estimate during your consultation."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "You don't need to be present as long as our technicians have access to water connections and the exterior areas to be cleaned. However, we're happy to walk through the completed work with you if you're available."
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Back to Services Navigation */}
      <div className="back-navigation">
        <Link to="/services" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Services
        </Link>
      </div>

      {/* Hero Section with Video */}
      <section className="detail-hero-section">
        <div className="detail-video-container">
          <video 
            ref={videoRef}
            className="detail-video" 
            muted 
            loop
            playsInline
            autoPlay
          >
            <source src="/videos/surface-cleaning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>Residential Powerwashing</h1>
            <p>Restore your home's beauty and protect your investment</p>
            <Link to="/contact" className="contact-button">Get a free quote</Link>

          </div>
          <button className="detail-play-pause-btn" onClick={togglePlayPause}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="detail-content-section">
        <div className="detail-tabs">
          <button 
            className={`detail-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`detail-tab ${activeTab === 'faqs' ? 'active' : ''}`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
          <button 
            className={`detail-tab ${activeTab === 'pricing' ? 'active' : ''}`}
            onClick={() => setActiveTab('pricing')}
          >
            Pricing
          </button>
        </div>

        <div className="detail-tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="detail-intro">
                <h2>Professional Residential Powerwashing Services</h2>
                <p>Our residential powerwashing services restore and maintain your home's exterior surfaces, removing unsightly dirt, grime, algae, mold, and mildew that can damage your property over time.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3>Complete Home Exterior</h3>
                  <p>From siding and brick to stucco and wood, we safely clean all exterior surfaces using appropriate pressure settings and techniques.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-road"></i>
                  </div>
                  <h3>Driveways & Walkways</h3>
                  <p>Remove oil stains, tire marks, and embedded dirt from concrete, asphalt, pavers, and other hardscapes.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-umbrella-beach"></i>
                  </div>
                  <h3>Decks & Patios</h3>
                  <p>Restore wooden decks, composite decking, and patio surfaces to their original beauty while preventing deterioration.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Eco-Friendly Approach</h3>
                  <p>We use environmentally responsible cleaning solutions that are tough on grime but gentle on your landscaping and the environment.</p>
                </div>

              </div>

              <div className='quick-quote'>
                  <Link to="/contact" className="contact-button">Get a free quote</Link>
                </div>

              <div className="service-process">
                <h2>Our Process</h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h3>Inspection & Assessment</h3>
                    <p>We begin with a thorough inspection to identify specific problem areas and determine the appropriate cleaning methods for each surface.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Surface Preparation</h3>
                    <p>Our team protects delicate landscaping, covers electrical fixtures, and ensures all windows and doors are properly sealed.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>Pre-treatment Application</h3>
                    <p>Specialized cleaning solutions are applied to break down tough stains, mold, mildew, and organic growth before washing begins.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Precision Powerwashing</h3>
                    <p>Using state-of-the-art equipment, we clean each surface with the optimal pressure and technique to ensure effective yet safe cleaning.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <h3>Final Inspection</h3>
                    <p>We perform a comprehensive check to ensure every area meets our premium standards, addressing any remaining spots if needed.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="faqs-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {residentialFaqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div 
                      className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className="faq-icon">
                        <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                      </span>
                    </div>
                    <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="pricing-content">
              <h2>Residential Powerwashing Pricing</h2>
              <p className="pricing-intro">Our residential powerwashing services are customized to your specific needs. The following price ranges provide a general estimate based on home size and services required.  Please note that every job is unique and that prices vary greatly depending on the job.  Schedule a free estimate with us by clicking the button below or visitng our contact page.</p>
              
              <div className="pricing-tables">
                
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Concrete & Hardscape Surfaces</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Driveway (up to 600 sq ft)</span>
                      <span className="price-range">$100 - $350</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Walkways (per 100 sq ft)</span>
                      <span className="price-range">$50 - $75</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Patio (up to 300 sq ft)</span>
                      <span className="price-range">$125 - $200</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Pool Deck (up to 500 sq ft)</span>
                      <span className="price-range">$175 - $275</span>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> Final pricing depends on factors including surface condition, accessibility, and specific cleaning requirements. Contact us for a free, personalized quote.</p>
                <div className="quote-cta">
                  <a href="/contact" className="quote-button">Request a Free Quote</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="back-navigation">
        <Link to="/services" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Services
        </Link>
      </div>
      
    </div>
  );
};

export default Powerwashing;