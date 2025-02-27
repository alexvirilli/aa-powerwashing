import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './RoofCleaning.css';

const RoofCleaning = () => {
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

  const roofCleaningFaqs = [
    {
      question: "How often should I have my roof cleaned?",
      answer: "We recommend having your roof professionally cleaned every 2-3 years, but this can vary based on your local climate, tree coverage, and the type of roofing material. Homes in humid areas or those with heavy shade may need cleaning more frequently to prevent extensive algae, moss, or lichen growth."
    },
    {
      question: "Is roof cleaning safe for all roof types?",
      answer: "Different roof materials require different cleaning approaches. Our technicians are trained in the appropriate methods for each roof type, whether you have asphalt shingles, metal, tile, cedar shake, or slate roofing. We use low-pressure washing and specialized cleaning solutions that are effective yet gentle on your specific roofing material."
    },
    {
      question: "Will roof cleaning damage my shingles or voids my warranty?",
      answer: "When done properly, professional roof cleaning should not damage your shingles or void warranties. We use industry-approved methods that align with most manufacturer requirements. Our low-pressure washing techniques and appropriate cleaning solutions protect your roof's integrity while effectively removing unsightly growth."
    },
    {
      question: "How long does the roof cleaning process take?",
      answer: "For an average-sized home (approximately 2,000 sq ft), a comprehensive roof cleaning typically takes 3-5 hours. Larger homes, more complex roof designs, or those with extensive buildup may require additional time. We'll provide a specific time estimate during your consultation."
    },
    {
      question: "How long will my roof stay clean after professional cleaning?",
      answer: "After a professional roof cleaning, most roofs remain clean for 2-3 years. However, this varies based on your local environment. We offer preventative treatments that can extend this timeframe by applying protective solutions that inhibit algae, moss, and fungal growth between cleanings."
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
            <source src="/videos/roof-cleaning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>Professional Roof Cleaning</h1>
            <p>Extend the life of your roof and enhance your home's curb appeal</p>
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
                <h2>Expert Roof Cleaning Services</h2>
                <p>Our professional roof cleaning services remove unsightly black streaks, moss, algae, and lichen that not only diminish your home's appearance but can also cause premature deterioration of your roofing materials.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3>Soft Wash Technology</h3>
                  <p>We use specialized low-pressure washing techniques that thoroughly clean without damaging delicate roofing materials or voiding manufacturer warranties.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Algae & Moss Removal</h3>
                  <p>Eliminate unsightly black streaks caused by Gloeocapsa Magma algae and remove damaging moss that can lift shingles and trap moisture.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Preventative Treatments</h3>
                  <p>Optional protective treatments that inhibit future growth and extend the time between necessary cleanings.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Extended Roof Life</h3>
                  <p>Regular roof cleaning can extend your roof's lifespan by preventing organism growth that breaks down roofing materials and causes premature aging.</p>
                </div>
              </div>



              <div className="service-process">
                <h2>Our Process</h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h3>Thorough Inspection</h3>
                    <p>We conduct a comprehensive roof assessment to identify the type and extent of growth, evaluate roofing material condition, and determine the most appropriate cleaning approach.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Property Protection</h3>
                    <p>Before beginning work, we protect surrounding landscaping, cover delicate plants, and ensure all runoff is properly managed to prevent damage to your property.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>Cleaning Solution Application</h3>
                    <p>We apply specialized eco-friendly cleaning solutions formulated to break down biological growth while protecting your roof's integrity and surrounding environment.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Gentle Soft Washing</h3>
                    <p>Using our soft wash technology, we safely remove algae, moss, lichen, and accumulated debris without damaging the roof surface or underlying structure.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <h3>Optional Preventative Treatment</h3>
                    <p>Upon request, we apply specialized preventative treatments that inhibit future growth, extending the clean appearance of your roof and protecting your investment.</p>
                  </div>
                </div>
              </div>

              <div className='quick-quote'>
              <Link to="/contact" className="contact-button">Get a free quote</Link>

                </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="faqs-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {roofCleaningFaqs.map((faq, index) => (
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
              <h2>Roof Cleaning Pricing</h2>
              <p className="pricing-intro">Our roof cleaning services are tailored to your specific roof type, size, and condition. The following price ranges offer a general estimate based on home size and the level of cleaning required.</p>
              
              <div className="pricing-tables">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Basic Roof Cleaning</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Small Roof (up to 1,500 sq ft)</span>
                      <span className="price-range">$350 - $450</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Medium Roof (1,500 - 2,500 sq ft)</span>
                      <span className="price-range">$450 - $650</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Large Roof (2,500 - 3,500 sq ft)</span>
                      <span className="price-range">$650 - $850</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Extra Large Roof (3,500+ sq ft)</span>
                      <span className="price-range">Starting at $850</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Premium Services</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Heavy Moss Removal</span>
                      <span className="price-range">+$100 - $250</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Preventative Treatment</span>
                      <span className="price-range">+$150 - $300</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Gutter Cleaning Add-on</span>
                      <span className="price-range">+$75 - $150</span>
                    </div>
                    
                  </div>
                </div>
                
                
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> Final pricing depends on factors including roof pitch, accessibility, material type, and the extent of biological growth. Contact us for a free, personalized quote.</p>
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

export default RoofCleaning;