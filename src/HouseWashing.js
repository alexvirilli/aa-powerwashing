import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './ServiceDetail.css';

const HouseWashing = () => {
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

  const houseFaqs = [
    {
      question: "How often should I have my house professionally washed?",
      answer: "For most homes, we recommend professional house washing once or twice per year. Homes in areas with high humidity, abundant shade, or near water bodies may benefit from more frequent cleanings (every 6-8 months) to prevent significant buildup of mold, mildew, and algae. We can assess your specific conditions and recommend an optimal maintenance schedule."
    },
    {
      question: "Is house washing safe for all types of siding?",
      answer: "Yes, our specialized cleaning methods are tailored to each siding type. We use soft washing for vinyl, aluminum, stucco, and painted surfaces, and adjust pressure levels for brick, stone, and hardy board. Our technicians are trained to identify your specific siding material and use the appropriate cleaning approach to ensure safe, effective results without damage."
    },
    {
      question: "Will your cleaning process damage my landscaping?",
      answer: "We take extensive precautions to protect your landscaping. Before cleaning, we thoroughly pre-rinse all plants and vegetation, use plant-friendly biodegradable cleaning solutions, and perform a final rinse after cleaning to dilute any cleaning solution that may have contacted plants. Our technicians are trained to minimize overspray and runoff to protect your valuable landscaping."
    },
    {
      question: "Can you remove black streaks from my roof while washing my house?",
      answer: "Yes, we offer roof cleaning as an additional service that can be performed along with your house washing. The black streaks commonly seen on roofs are caused by a type of algae called Gloeocapsa Magma. We use a specialized soft wash method for roof cleaning that safely removes these organisms without damaging your shingles or voiding manufacturer warranties."
    },
    {
      question: "Will house washing remove all stains from my siding?",
      answer: "Our house washing process removes the vast majority of stains including dirt, pollen, mold, mildew, algae, and many environmental contaminants. However, some deep-set stains like rust, severe mildew penetration, or oxidation on certain surfaces might require specialized treatment. During our initial assessment, we'll identify any challenging areas and discuss appropriate solutions."
    },
    {
      question: "How long does a typical house washing take?",
      answer: "Most residential house washing projects take between 2-4 hours to complete, depending on the size of your home, level of soiling, accessibility factors, and additional services requested. We'll provide you with a specific time estimate during our initial assessment. You don't need to be home during the service as long as we have access to water and exterior electrical outlets if needed."
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
          >
            <source src="/videos/house-washing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>House Washing</h1>
            <p>Restore your home's exterior beauty with our professional cleaning services</p>
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
                <h2>Professional House Washing Services</h2>
                <p>Our comprehensive house washing services are designed to rejuvenate your home's exterior, remove harmful contaminants, and enhance your property's curb appeal. Using cutting-edge soft washing technology and eco-friendly cleaning solutions, we deliver remarkable results without risking damage to your home's surfaces or surrounding landscape.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3>Soft Wash Siding Cleaning</h3>
                  <p>Gentle yet effective cleaning for all siding types including vinyl, aluminum, wood, stucco, hardy board, and painted surfaces.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-bug"></i>
                  </div>
                  <h3>Mold & Mildew Removal</h3>
                  <p>Elimination of unsightly and potentially harmful mold, mildew, algae, and bacteria from your home's exterior surfaces.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <h3>Environmentally Friendly</h3>
                  <p>Biodegradable cleaning solutions that effectively clean your home while protecting your landscaping and local ecosystem.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3>Preventative Protection</h3>
                  <p>Optional surface treatments that help repel dirt, reduce organic growth, and extend the time between cleanings.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-door-open"></i>
                  </div>
                  <h3>Gutter & Eave Cleaning</h3>
                  <p>External cleaning of gutters and eaves to remove streaking, stains, and organic growth from these visible areas.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-paint-roller"></i>
                  </div>
                  <h3>Pre-Painting Preparation</h3>
                  <p>Thorough cleaning to prepare surfaces for painting, staining, or sealing projects, improving adhesion and longevity.</p>
                </div>
              </div>

              <div className="service-process">
                <h2>Our House Washing Process</h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h3>Comprehensive Inspection</h3>
                    <p>We begin with a thorough assessment of your home's exterior, identifying siding types, problem areas, stains, and potential challenges. This allows us to customize our approach for optimal results.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Pre-Treatment Protection</h3>
                    <p>Before cleaning begins, we prepare the work area by covering delicate plants, closing windows and doors, and protecting fixtures and outdoor furniture from overspray.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>Customized Cleaning Application</h3>
                    <p>We apply specialized cleaning solutions tailored to your specific siding type and contaminants present. Our soft wash technique uses low pressure and high-quality detergents to safely break down dirt, mold, and algae.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Dwell Time & Agitation</h3>
                    <p>The cleaning solution is allowed adequate dwell time to break down contaminants effectively. For stubborn areas, we may use soft brushes or additional applications to ensure complete cleaning.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <h3>Thorough Rinse & Inspection</h3>
                    <p>We perform a detailed rinse to remove all cleaning solutions and loosened contaminants, followed by a final inspection to ensure every area meets our high-quality standards and your complete satisfaction.</p>
                  </div>
                </div>
                <div className='quick-quote'>
                <Button to="/contact" size="large" margin="4rem 0 0">Get a free quote</Button>

                </div>

              </div>

              <div className="commercial-clients">
                <h2>House Washing Benefits</h2>
                <div className="client-types">
                  <div className="client-type">
                    <h3>Enhanced Curb Appeal</h3>
                    <p>Dramatically improve your home's appearance and make a positive impression</p>
                  </div>
                  <div className="client-type">
                    <h3>Property Value Protection</h3>
                    <p>Maintain your investment by preventing premature aging and deterioration</p>
                  </div>
                  <div className="client-type">
                    <h3>Healthier Living Environment</h3>
                    <p>Remove allergens, mold, and contaminants that can affect air quality</p>
                  </div>
                  <div className="client-type">
                    <h3>Preventative Maintenance</h3>
                    <p>Avoid costly repairs by removing harmful biological growth</p>
                  </div>
                  <div className="client-type">
                    <h3>Pre-Painting Preparation</h3>
                    <p>Create an ideal surface for new paint or stain applications</p>
                  </div>
                  <div className="client-type">
                    <h3>Pest Prevention</h3>
                    <p>Eliminate conditions that attract insects and nesting pests</p>
                  </div>
                  <div className="client-type">
                    <h3>Year-Round Maintenance</h3>
                    <p>Keep your home looking its best through all seasons</p>
                  </div>
                  <div className="client-type">
                    <h3>Energy Efficiency</h3>
                    <p>Lighter, cleaner surfaces reflect more heat, improving efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="faqs-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {houseFaqs.map((faq, index) => (
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
              <h2>House Washing Pricing</h2>
              <p className="pricing-intro">Our house washing services are priced based on the size of your home and level of soiling. The following pricing structure provides general guidelines, but we recommend scheduling a free estimate for an accurate quote.  Every house wash includes the rinsing of all windows, so if you are considering a window cleaning, this service provides great value.</p>
              
              <div className="pricing-tables">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Basic House Washing</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Small Home (up to 1,500 sq ft)</span>
                      <span className="price-range">$250 - $350</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Medium Home (1,500 - 2,500 sq ft)</span>
                      <span className="price-range">$350 - $450</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Large Home (2,500 - 3,500 sq ft)</span>
                      <span className="price-range">$450 - $600</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Extra Large Home (3,500+ sq ft)</span>
                      <span className="price-range">Custom Pricing</span>
                    </div>
                  </div>
                </div>
                
                
                
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> Pricing may vary based on factors including accessibility, level of soiling, specific stain types, and any extraordinary conditions. All services include pre-treatment protection, professional cleaning, and a final rinse. We provide free on-site assessments and detailed quotations.</p>
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

export default HouseWashing;