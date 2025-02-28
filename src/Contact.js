
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

            <Helmet>
                <title>A&A Powerwashing | Contact</title>
                <meta name="description" content="Fill out this form and we will be in contact with you for a personalized quote.  We offer free consultations and quotes." />
                <meta name="keywords" content="contact, powerwashing, pressure washing, power washing, cleaning, roof cleaning, window cleaning, commercial powerwashing, trash can cleaning, bin cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, aa powerwashing, aa powerwashers" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Fill out this form and we will be in contact with you for a personalized quote.  We offer free consultations and quotes." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
                <link rel="stylesheet" href="./src/Contact.css" />

            </Helmet>

      <h2>Complete this form for a personalized quote</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <div class='grouping'>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Want something else?  Let us know! (optional)" 
          value={formData.message} 
          onChange={handleChange} 
           
        ></textarea>

        <div class='select-service'> 
          <h3>Select Desired Services</h3>

            <div class='box-group'>
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
            </div>

            <div class='box-group'>
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
            </div>

            <div class='box-group'>
              <label>
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Gutter Cleaning" 
                  onChange={handleChange} 
                /> Gutter Cleaning
              </label>
              <label>
                <input 
                  type="checkbox" 
                  name="services" 
                  value="Trash Can Cleaning" 
                  onChange={handleChange} 
                /> Trash Can Cleaning
              </label>
            </div>
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