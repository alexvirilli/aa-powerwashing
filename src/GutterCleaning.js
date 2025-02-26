import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './GutterCleaning.css';

const GutterCleaning = () => {
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
      question: "How often should I have my gutters cleaned?",
      answer: "We recommend cleaning your gutters at least twice a year—once in the spring and once in the fall—to prevent blockages and water damage. Homes with many trees nearby may require more frequent cleaning."
    },
    {
      question: "Why is gutter cleaning important?",
      answer: "Regular gutter cleaning prevents water overflow, protects your roof and foundation from damage, and reduces the risk of pests nesting in clogged gutters."
    },
    {
      question: "Do you clean downspouts as well?",
      answer: "Yes, we ensure downspouts are completely free of debris, allowing proper drainage and reducing the risk of water backup and damage."
    },
    {
      question: "How long does residential gutter cleaning take?",
      answer: "Typically, an average-sized home takes 1-3 hours to complete. Larger homes or those with excessive debris may take longer. We will provide an estimated time frame during your consultation."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "You don’t need to be present as long as we have access to the gutters. We provide a full report after the service, including photos of cleaned gutters."
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
            <source src="/videos/gutter-cleaning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>Gutter Cleaning Services</h1>
            <p>Protect your roof by stopping gutter blockages</p>
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
                <h2>Professional Gutter Cleaning Services</h2>
                <p>Our residential powerwashing services restore and maintain your home's exterior surfaces, removing unsightly dirt, grime, algae, mold, and mildew that can damage your property over time.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-water"></i>
                  </div>
                  <h3>Prevent Water Damage</h3>
                  <p>Clogged gutters can cause rainwater to overflow, leading to damage to your roof, siding, and foundation. Regular cleaning ensures proper water drainage and prevents costly repairs.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-bug"></i>
                  </div>
                  <h3>Avoid Pest Infestations</h3>
                  <p>Debris-filled gutters create a perfect breeding ground for pests like mosquitoes, rodents, and insects. Keeping gutters clean helps deter unwanted critters from nesting near your home.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-house"></i>
                  </div>
                  <h3>Extend Roof Lifespan</h3>
                  <p>Blocked gutters trap moisture and can lead to rot, mold, and deterioration of roofing materials. By maintaining clean gutters, you protect your roof and prolong its lifespan.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Preserve Curb Appeal</h3>
                  <p>Overflowing gutters can cause unsightly stains, mildew, and damage to landscaping. Clean gutters improve your home's exterior appearance and prevent erosion around your property.</p>
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
              <h2>Residential Gutter Cleaning Pricing</h2>
              <p className="pricing-intro">Our residential gutter cleaning services are customized to your specific needs. The following price ranges provide a general estimate based on home size and services required.</p>
              
              <div className="pricing-tables">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Home Exterior Washing</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Single Story Home</span>
                      <span className="price-range">$90 - $200</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Two Story Home</span>
                      <span className="price-range">$100 - $250</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Large/Multi Story Home</span>
                      <span className="price-range">$150 - $300</span>
                    </div>
                  </div>
                </div>
                
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> Final pricing depends on factors including condition, accessibility, and specific cleaning requirements. Contact us for a free, personalized quote.</p>
                <div className="quote-cta">
                  <a href="/contact" className="quote-button">Request a Free Quote</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GutterCleaning;