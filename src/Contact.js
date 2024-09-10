
import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '', services: [], address: '', phone: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

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
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Your Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Your Address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Anything you want us to know? (optional)" 
          value={formData.message} 
          onChange={handleChange} 
           
        ></textarea>

        <div>
          <h3>Select Desired Services</h3>
          <label>
            <input 
              type="checkbox" 
              name="services" 
              value="Power Washing" 
              onChange={handleChange} 
            /> Power Washing
          </label>
          <label>
            <input 
              type="checkbox" 
              name="services" 
              value="Roof Cleaning" 
              onChange={handleChange} 
            /> Roof Cleaning
          </label>
          <label>
            <input 
              type="checkbox" 
              name="services" 
              value="Window Cleaning" 
              onChange={handleChange} 
            /> Window Cleaning
          </label>
          <label>
            <input 
              type="checkbox" 
              name="services" 
              value="House Wash" 
              onChange={handleChange} 
            /> House Wash
          </label>
          <label>
            <input 
              type="checkbox" 
              name="services" 
              value="Gutter Cleaning" 
              onChange={handleChange} 
            /> Gutter Cleaning
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;