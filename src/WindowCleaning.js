import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './WindowCleaning.css';

const WindowCleaning = () => {
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

  const windowCleaningFaqs = [
    {
      question: "How often should I have my windows professionally cleaned?",
      answer: "For residential properties, we recommend professional window cleaning 2-3 times per year. Homes in areas with high pollen, near construction sites, or close to the ocean may benefit from quarterly cleaning. Commercial properties typically require more frequent cleaning, from monthly to quarterly depending on the business type and location."
    },
    {
      question: "What is included in your window cleaning service?",
      answer: "Our comprehensive window cleaning includes cleaning of all interior and exterior glass surfaces, sills, tracks, and screens. We also clean and wipe down window frames and remove cobwebs around window areas. For an additional fee, we can clean skylights, mirrors, glass doors, and other glass features."
    },
    {
      question: "Do I need to be home during the window cleaning service?",
      answer: "While it's not required, we recommend being present during the first service so we can address any specific concerns. For returning customers, we're happy to perform the service while you're away, provided we have access to the necessary areas."
    },
    {
      question: "How do you clean windows on upper floors?",
      answer: "We use professional-grade water-fed pole systems that can reach windows up to four stories high without ladders. For higher windows or difficult-to-reach areas, we use specialized equipment and safety gear. All our technicians are trained in safely accessing and cleaning windows at heights."
    },
    {
      question: "What if it rains soon after my windows are cleaned?",
      answer: "Our professional-grade cleaning solutions leave minimal residue, so light rain shortly after cleaning typically won't leave spots. If heavy rain occurs within 48 hours of service and leaves your windows spotty, we'll return to touch up affected windows at no additional charge."
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
            <source src="/videos/window-cleaning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>Professional Window Cleaning</h1>
            <p>Crystal clear views and enhanced curb appeal for your home</p>
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
                <h2>Expert Window Cleaning Services</h2>
                <p>Our professional window cleaning services restore clarity and brilliance to all glass surfaces, enhancing your property's appearance and allowing maximum natural light to enter your space.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3>Residential Window Cleaning</h3>
                  <p>Comprehensive interior and exterior window cleaning for homes of all sizes, including hard-to-reach windows, skylights, and glass features.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>Commercial Window Cleaning</h3>
                  <p>Professional cleaning solutions for storefronts, office buildings, restaurants, and multi-story commercial properties.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3>Specialty Glass Services</h3>
                  <p>Expert cleaning for skylights, solar panels, glass railings, shower doors, mirrors, and other specialty glass features.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Eco-Friendly Approach</h3>
                  <p>We use environmentally responsible, biodegradable cleaning solutions that deliver exceptional results without harming plants or pets.</p>
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
                    <h3>Initial Assessment</h3>
                    <p>We begin with a thorough evaluation of all window surfaces to identify specific cleaning needs and any potential challenges.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Preparation</h3>
                    <p>Our team carefully prepares the work area, moving furniture when necessary and laying protective coverings to safeguard your floors and furnishings.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>Screen & Track Cleaning</h3>
                    <p>We remove, clean, and reinstall all window screens. Window tracks and sills are thoroughly cleaned to remove built-up dirt and debris.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Glass Cleaning</h3>
                    <p>Using professional-grade equipment and solutions, we meticulously clean all glass surfaces to a streak-free shine, including hard-to-reach areas.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <h3>Final Inspection</h3>
                    <p>We perform a comprehensive quality check in various lighting conditions to ensure every window meets our exceptional standards of clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="faqs-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {windowCleaningFaqs.map((faq, index) => (
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
              <h2>Window Cleaning Pricing</h2>
              <p className="pricing-intro">Our window cleaning pricing is based on the number, size, and accessibility of windows, as well as any additional services required. Below are general price ranges for our most common services.</p>
              
              <div className="pricing-tables">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Residential Window Cleaning</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Small Home (up to 10 windows)</span>
                      <span className="price-range">$120 - $180</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Medium Home (11-20 windows)</span>
                      <span className="price-range">$180 - $280</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Large Home (21-30 windows)</span>
                      <span className="price-range">$280 - $400</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Extra Large Home (31+ windows)</span>
                      <span className="price-range">Starting at $400</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Commercial Window Cleaning</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Storefront (up to 500 sq ft)</span>
                      <span className="price-range">$150 - $250</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Small Office (up to 1,000 sq ft)</span>
                      <span className="price-range">$250 - $400</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Medium Building (per floor)</span>
                      <span className="price-range">$350 - $600</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Large Commercial Property</span>
                      <span className="price-range">Custom Quote</span>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> Final pricing depends on factors including window size, accessibility, condition, and any additional services required. Contact us for a free, personalized quote.</p>
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

export default WindowCleaning;