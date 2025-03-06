import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import Button from './Button';

const BinCleaning = () => {
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

  const binCleaningFaqs = [
    {
      question: "How do you sanitize the bins?",
      answer: "We use a specialized system that combines high-pressure hot water and eco-friendly sanitizing solutions.  We spray down the inside and outside of your bins with our chemical solution.  It is important that your trash cans are empty for this service."
    },
    {
      question: "How long does the bin cleaning process take?",
      answer: "The cleaning process typically takes 5-10 minutes per bin. Our efficient system allows us to thoroughly clean, sanitize, and deodorize your bins without disrupting your day."
    },
    {
      question: "Is your cleaning solution safe for the environment?",
      answer: "Absolutely! We use 100% biodegradable, eco-friendly cleaning products that effectively eliminate bacteria and odors without harming the environment. All wastewater is collected and properly disposed of according to local regulations."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "No, as long as your bins are accessible to our technicians. We typically schedule our cleaning service on your regular collection day, after your bins have been emptied by your waste collection provider."
    },
    {
      question: "Can you remove stubborn stains and odors from my bins?",
      answer: "Yes, our high-pressure hot water system combined with specialized cleaning solutions can remove most stubborn stains and eliminate odors. For extremely neglected bins that haven't been cleaned in years, we may recommend an initial deep cleaning treatment."
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
            <source src="/videos/bin-cleaning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>Professional Bin Cleaning</h1>
            <p>Eliminate odors and bacteria with our specialized sanitizing service</p>
            <Button to="/contact" size="medium">Get a quote</Button>

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
                <h2>Professional Bin Cleaning and Sanitizing Services</h2>
                <p>Our specialized bin cleaning service eliminates bacteria, odors, and unsightly grime from your waste and recycling bins, creating a cleaner, healthier environment around your home.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-spray-can"></i>
                  </div>
                  <h3>Complete Sanitization</h3>
                  <p>Our high-pressure hot water system eliminates 99% of bacteria and germs while removing stubborn grime and residue.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-wind"></i>
                  </div>
                  <h3>Odor Elimination</h3>
                  <p>Say goodbye to unpleasant bin odors with our deodorizing treatment that leaves your bins smelling fresh and clean.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Eco-Friendly Process</h3>
                  <p>We use 100% biodegradable cleaning solutions and properly collect and dispose of all wastewater to protect the environment.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <h3>Convenient Scheduling</h3>
                  <p>Choose from monthly, bi-monthly, bi-annual, or annual service plans for hassle-free, consistent bin maintenance.</p>
                </div>
              </div>

              <div className="service-process">
                <h2>Our Process</h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h3>Bin Assessment</h3>
                    <p>We inspect each bin to identify the level of cleaning needed and any special attention areas requiring treatment.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Pre-Treatment Application</h3>
                    <p>Stubborn stains and residue are pre-treated with our specialized eco-friendly cleaning solution to break down and loosen contaminants.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>High-Pressure Cleaning</h3>
                    <p>Our truck-mounted system lifts your bin into a sealed chamber where rotating high-pressure hot water nozzles clean every surface of your bin.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Sanitization & Deodorization</h3>
                    <p>We apply a sanitizing treatment that eliminates 99% of germs and bacteria, followed by an odor-neutralizing agent for lasting freshness.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <h3>Final Inspection</h3>
                    <p>Each bin is inspected to ensure it meets our high standards of cleanliness before being placed back in its original location.</p>
                  </div>
                </div>
              </div>

              <div className='quick-quote'>
              <Button to="/contact" size="large" margin="2rem 0 0">Get a free quote</Button>

                </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="faqs-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {binCleaningFaqs.map((faq, index) => (
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
              <h2>Bin Cleaning Service Plans</h2>
              <p className="pricing-intro">Our bin cleaning services are available in various frequency options to suit your needs and budget. Choose the plan that works best for your household.</p>
              
              <div className="pricing-tables">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Monthly Plan</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Single Bin</span>
                      <span className="price-range">$15/month</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Two Bins</span>
                      <span className="price-range">$25/month</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Three Bins</span>
                      <span className="price-range">$35/month</span>
                    </div>
                    <div className="pricing-item plan-feature">
                      <span className="feature-text">Most Popular</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Bi-Monthly Plan</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Single Bin</span>
                      <span className="price-range">$17/cleaning</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Two Bins</span>
                      <span className="price-range">$28/cleaning</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Three Bins</span>
                      <span className="price-range">$39/cleaning</span>
                    </div>
                    <div className="pricing-item plan-feature">
                      <span className="feature-text">Every 2 Months</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Bi-Annual Plan</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Single Bin</span>
                      <span className="price-range">$20/cleaning</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Two Bins</span>
                      <span className="price-range">$32/cleaning</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Three Bins</span>
                      <span className="price-range">$45/cleaning</span>
                    </div>
                    <div className="pricing-item plan-feature">
                      <span className="feature-text">Spring & Fall</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Annual Plan</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Single Bin</span>
                      <span className="price-range">$25/cleaning</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Two Bins</span>
                      <span className="price-range">$40/cleaning</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Three Bins</span>
                      <span className="price-range">$55/cleaning</span>
                    </div>
                    <div className="pricing-item plan-feature">
                      <span className="feature-text">Once Per Year</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> One-time cleaning services are also available. Additional bins beyond three are charged at $10 per bin. Special pricing available for commercial bin cleaning - please contact us for a custom quote.</p>
                <div className='quick-quote'>
                  <Button to="/contact" size="large">Get a free quote</Button>

                  {/* <Link to="/contact" className="contact-button">Get a free quote</Link> */}
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

export default BinCleaning;