import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './CommercialPowerwashing.css';

const CommercialPowerwashing = () => {
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

  const commercialFaqs = [
    {
      question: "How often should commercial properties be powerwashed?",
      answer: "For most commercial properties, we recommend scheduling professional powerwashing 2-4 times per year. High-traffic areas like restaurant exteriors may need monthly service, while office buildings might only need quarterly maintenance. We can develop a custom maintenance schedule based on your specific property needs."
    },
    {
      question: "Can you clean without disrupting our business operations?",
      answer: "Absolutely. We specialize in minimizing disruption to your business operations. Our team can work during off-hours, weekends, or in sections to ensure your business maintains normal operations. We use specialized low-noise equipment and efficient processes to complete the work quickly and with minimal impact."
    },
    {
      question: "What types of commercial surfaces can you clean?",
      answer: "Our commercial services cover all exterior surfaces including concrete, brick, stucco, metal panels, EIFS (exterior insulation finishing systems), wood, vinyl, composite materials, awnings, and more. We adjust our equipment and techniques for each specific surface to ensure effective and safe cleaning."
    },
    {
      question: "Do you offer maintenance contracts for ongoing services?",
      answer: "Yes, we provide customized maintenance contracts that can include scheduled cleanings at regular intervals. These contracts often come with priority scheduling and discounted rates. Many of our commercial clients prefer this option to maintain a consistently clean property appearance year-round."
    },
    {
      question: "Are your cleaning solutions safe for the environment?",
      answer: "We use environmentally responsible cleaning products that are effective at removing dirt, grime, and biological growth while being safe for surrounding landscapes, waterways, and wildlife. Our runoff management practices comply with all local environmental regulations, and we can provide SDS (Safety Data Sheets) for any products used."
    },
    {
      question: "Can you work around our customers and employees?",
      answer: "Safety is our top priority. We implement proper safety protocols including barriers, signage, and containment measures to ensure the safety of your employees, customers, and property during the cleaning process. Our technicians are trained to maintain professional conduct and minimize disruptions."
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
            <source src="/videos/commercial-powerwashing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="detail-video-overlay">
            <h1>Commercial Powerwashing</h1>
            <p>Professional exterior cleaning solutions for businesses of all sizes</p>
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
                <h2>Commercial Powerwashing Solutions</h2>
                <p>Our commercial powerwashing services are designed to maintain your business's professional appearance, protect your investment, and create a positive impression for customers and clients. We deliver consistent, high-quality results with minimal disruption to your operations.</p>
              </div>

              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h3>Building Exteriors</h3>
                  <p>Professional cleaning for all commercial building surfaces, removing dirt, pollutants, mold, mildew, and unsightly stains.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <h3>Storefront & Entryways</h3>
                  <p>Create a welcoming first impression with immaculate storefronts, walkways, entry areas, and customer-facing surfaces.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-truck-loading"></i>
                  </div>
                  <h3>Loading Docks & Service Areas</h3>
                  <p>Deep cleaning of high-traffic service areas to remove oil, grease, tire marks, and industrial stains.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-parking"></i>
                  </div>
                  <h3>Parking Lots & Garages</h3>
                  <p>Revitalize parking areas with our specialized surface cleaning that removes gum, oil stains, and ground-in dirt.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-dumpster"></i>
                  </div>
                  <h3>Dumpster Pads & Waste Areas</h3>
                  <p>Sanitize and deodorize waste management areas to maintain cleanliness and prevent pest issues.</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-hard-hat"></i>
                  </div>
                  <h3>Industrial Cleaning</h3>
                  <p>Heavy-duty cleaning for manufacturing facilities, warehouses, and industrial complexes with specialized equipment.</p>
                </div>
              </div>

              <div className="service-process">
                <h2>Our Commercial Process</h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h3>Property Assessment & Consultation</h3>
                    <p>We begin with a thorough evaluation of your property's needs, identifying specific problem areas and developing a customized cleaning plan that aligns with your business requirements and schedule.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Detailed Proposal</h3>
                    <p>You'll receive a comprehensive proposal outlining our recommended services, timing, and pricing with no hidden costs or surprises. We can adjust our approach to meet your specific budget and timeline constraints.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>Scheduling & Preparation</h3>
                    <p>We'll work around your business hours to minimize disruption, implementing safety measures and securing the work area before beginning. Our team arrives with all necessary equipment and supplies.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Commercial-Grade Cleaning</h3>
                    <p>Using state-of-the-art equipment and commercial-strength cleaning solutions, we execute the cleaning plan with meticulous attention to detail, adapting our approach as needed to ensure optimal results.</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <h3>Final Inspection & Documentation</h3>
                    <p>Upon completion, we conduct a thorough inspection with you to ensure all areas meet our rigorous standards. We provide before and after documentation and can establish a maintenance plan for ongoing care.</p>
                  </div>
                </div>
              </div>

              <div className='quick-quote'>
              <Link to="/contact" className="contact-button">Get a free quote</Link>

                 </div>

              <div className="commercial-clients">
                <h2>Industries We Serve</h2>
                <div className="client-types">
                  <div className="client-type">
                    <h3>Retail & Restaurants</h3>
                    <p>Storefronts, shopping centers, restaurants, and food service facilities</p>
                  </div>
                  <div className="client-type">
                    <h3>Office Buildings</h3>
                    <p>Corporate campuses, office parks, and professional buildings</p>
                  </div>
                  <div className="client-type">
                    <h3>Industrial & Manufacturing</h3>
                    <p>Factories, warehouses, distribution centers, and production facilities</p>
                  </div>
                  <div className="client-type">
                    <h3>Healthcare Facilities</h3>
                    <p>Medical offices, clinics, hospitals, and care facilities</p>
                  </div>
                  <div className="client-type">
                    <h3>Hospitality</h3>
                    <p>Hotels, resorts, and entertainment venues</p>
                  </div>
                  <div className="client-type">
                    <h3>Educational Institutions</h3>
                    <p>Schools, universities, and campus facilities</p>
                  </div>
                  <div className="client-type">
                    <h3>Multifamily Housing</h3>
                    <p>Apartment complexes, condominiums, and housing communities</p>
                  </div>
                  <div className="client-type">
                    <h3>Property Management</h3>
                    <p>Commercial and residential property portfolios</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="faqs-content">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {commercialFaqs.map((faq, index) => (
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
              <h2>Commercial Powerwashing Pricing</h2>
              <p className="pricing-intro">Our commercial powerwashing services are customized to your specific business needs. The following pricing structure provides general guidelines, but we recommend requesting a detailed quote for your property.</p>
              
              <div className="pricing-tables">
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Building Exterior Services</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Small Commercial Building (up to 5,000 sq ft)</span>
                      <span className="price-range">$500 - $900</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Medium Commercial Building (5,000 - 15,000 sq ft)</span>
                      <span className="price-range">$900 - $1,800</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Large Commercial Building (15,000 - 30,000 sq ft)</span>
                      <span className="price-range">$1,800 - $3,500</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Shopping Centers & Strip Malls (per unit)</span>
                      <span className="price-range">Starting at $250</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Parking & Concrete Surfaces</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Parking Lot (per 10,000 sq ft)</span>
                      <span className="price-range">$350 - $600</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Drive-Thru Lanes (per lane)</span>
                      <span className="price-range">$200 - $350</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Loading Dock Area (per bay)</span>
                      <span className="price-range">$150 - $300</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Dumpster Pad Cleaning & Sanitizing</span>
                      <span className="price-range">$100 - $200</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-table">
                  <div className="pricing-header">
                    <h3>Maintenance Programs</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="pricing-item">
                      <span className="item-name">Quarterly Service Contract</span>
                      <span className="price-range">15% Discount</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Bi-Monthly Service Contract</span>
                      <span className="price-range">20% Discount</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Monthly Service Contract</span>
                      <span className="price-range">25% Discount</span>
                    </div>
                    <div className="pricing-item">
                      <span className="item-name">Multi-Location Businesses</span>
                      <span className="price-range">Custom Pricing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pricing-notes">
                <p><strong>Note:</strong> Pricing varies based on factors including surface condition, accessibility, job complexity, and specific cleaning requirements. We offer free on-site assessments and detailed quotations for all commercial properties.</p>
                <div className="quote-cta">
                  <a href="/contact" className="quote-button">Request Commercial Quote</a>
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

export default CommercialPowerwashing;