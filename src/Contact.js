import React, { useState, useEffect, useRef} from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '', services: [], address: '', phone: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const addressInputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    
    // Remove all non-digit characters
    const phoneNumber = value.replace(/[^\d]/g, '');
    
    // Limit to 10 digits
    const trimmedPhone = phoneNumber.slice(0, 10);
    
    // Format the number
    if (trimmedPhone.length < 4) return trimmedPhone;
    if (trimmedPhone.length < 7) {
      return `(${trimmedPhone.slice(0, 3)}) ${trimmedPhone.slice(3)}`;
    }
    return `(${trimmedPhone.slice(0, 3)}) ${trimmedPhone.slice(3, 6)}-${trimmedPhone.slice(6)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedValue });
  };


  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "services") {
      // Handle checkbox for services
      if (checked) {
        setFormData({ ...formData, services: [...formData.services, value] });
      } else {
        setFormData({ 
          ...formData, 
          services: formData.services.filter(service => service !== value) 
        });
      }
    } else {
      // Handle regular inputs
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://lv6ez6mjbk.execute-api.us-east-2.amazonaws.com/prod/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: JSON.stringify(formData)
        }),
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '', services: [], address: '', phone: '' });
      } else {
        const errorResult = await response.text();
        console.error('API error response:', errorResult);
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>A&A Powerwashing | Contact</title>
        <meta name="description" content="Fill out this form and we will be in contact with you for a personalized quote. We offer free consultations and quotes." />
        <meta name="keywords" content="contact, powerwashing, pressure washing, power washing, cleaning, roof cleaning, window cleaning, commercial powerwashing, trash can cleaning, bin cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, aa powerwashing, aa powerwashers" />
        <meta property="og:title" content="A&A Powerwashing" />
        <meta property="og:description" content="Fill out this form and we will be in contact with you for a personalized quote. We offer free consultations and quotes." />
        <meta property="og:image" content="./images/new_logo.PNG" />
        <meta property="og:url" content="https://aapowerwashers.com" />
      </Helmet>

      <div className="contact-hero-section">
        <h1>Contact Us</h1>
        <p>Please fill out the form below in full so that we can understand what kind of work needs to be done, where you are located, and how to contact you.</p>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#f8f9fa" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>

      <div className="contact">
        <h2>Quote Request Form</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="grouping">
            <div className="form-field half">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-field half">
              <input 
                type="text" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handlePhoneChange} 
                pattern="(\(\d{3}\)) \d{3}-\d{4}"
                inputMode="numeric"  // Ensures number pad on mobile devices
                maxLength="14" 
                required 
              />
            </div>
          </div>
          
          <div className="form-field">
            <input 
              type="text" 
              name="address" 
              placeholder="Address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-field">
            <textarea 
              name="message" 
              placeholder="Want something else? Let us know! (optional)" 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="select-service"> 
            <h3>Select Desired Services</h3>

            <div className="services-grid">
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Power Washing" 
                  onChange={handleChange} 
                />
                <span className="checkbox-label">Power Washing</span>
              </label>
              
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Roof Cleaning" 
                  onChange={handleChange} 
                />
                <span className="checkbox-label">Roof Cleaning</span>
              </label>
            
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Window Cleaning" 
                  onChange={handleChange} 
                />
                <span className="checkbox-label">Window Cleaning</span>
              </label>
              
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  name="services" 
                  value="House Wash" 
                  onChange={handleChange} 
                />
                <span className="checkbox-label">House Wash</span>
              </label>
              
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Gutter Cleaning" 
                  onChange={handleChange} 
                />
                <span className="checkbox-label">Gutter Cleaning</span>
              </label>
              
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Trash Can Cleaning" 
                  onChange={handleChange} 
                />
                <span className="checkbox-label">Trash Can Cleaning</span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;