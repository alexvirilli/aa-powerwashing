// import React, { useState } from 'react';
// import './Contact.css';
// import { Helmet } from 'react-helmet';

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       if (result.success) {
//         setStatus('Your message has been sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       setStatus('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="contact">
//       <Helmet>
//         <title>A&A Powerwashing | Contact</title>
//         <meta name="description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
//         <meta name="keywords" content="powerwashing, cleaning, home services, A&A Powerwashing" />
//         <meta property="og:title" content="A&A Powerwashing" />
//         <meta property="og:description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
//         <meta property="og:image" content="./images/logo.PNG" />
//         <meta property="og:url" content="https://aapowerwashers.com" />
//       </Helmet>  

//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           name="name" 
//           placeholder="Your Name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//         />
//         <input 
//           type="email" 
//           name="email" 
//           placeholder="Your Email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         />
//         <textarea 
//           name="message" 
//           placeholder="Your Message" 
//           value={formData.message} 
//           onChange={handleChange} 
//           required 
//         ></textarea>
//         <button type="submit">Send Message</button>
//         {status && <p className="status">{status}</p>}
//       </form>
//     </div>
//   );
// }

// export default Contact;

// ORIGINAL:::

// import React, { useState } from 'react';
// import './Contact.css';
// import { Helmet } from 'react-helmet';

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/send-email', { // Updated endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       if (result.success) {
//         setStatus('Your message has been sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       setStatus('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="contact">
//       <Helmet>
//         <title>A&A Powerwashing | Contact</title>
//         <meta name="description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
//         <meta name="keywords" content="powerwashing, cleaning, home services, A&A Powerwashing" />
//         <meta property="og:title" content="A&A Powerwashing" />
//         <meta property="og:description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
//         <meta property="og:image" content="./images/logo.PNG" />
//         <meta property="og:url" content="https://aapowerwashers.com" />
//       </Helmet>  

//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           name="name" 
//           placeholder="Your Name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//         />
//         <input 
//           type="email" 
//           name="email" 
//           placeholder="Your Email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         />
//         <textarea 
//           name="message" 
//           placeholder="Your Message" 
//           value={formData.message} 
//           onChange={handleChange} 
//           required 
//         ></textarea>
//         <button type="submit">Send Message</button>
//         {status && <p className="status">{status}</p>}
//       </form>
//     </div>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://euau7ddyn8.execute-api.us-east-2.amazonaws.com/prod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (

    <div className="contact">

      <div className='disclaimer'>
        <h2>
          Our site is still under construction, so for now please reach us at <strong>aapowerwashers@gmail.com</strong> or <strong>(856) 281-2658</strong>
        </h2>
        <h3>
          Thank you!
        </h3>
      </div>

            <Helmet>
                <title>A&A Powerwashing | Contact</title>
                <meta name="description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, cleaning, home services, A&A Powerwashing" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
            </Helmet>  

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
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
    
  );
}

export default Contact;
