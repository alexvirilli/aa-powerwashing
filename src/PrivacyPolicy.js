import React from 'react';
import './PrivacyPolicy.css'; // We'll create this CSS file next

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section with Wave */}
      <div className="privacy-hero-section">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>We value your privacy and are committed to protecting your personal data</p>
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Main Content */}
      <div className="privacy-content">
        <div className="last-updated">
          <p>Last Updated: April 20, 2025</p>
        </div>
        
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to our website. We respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you visit our website
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data (how you interact with our website)</li>
            <li>Cookies and tracking data</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over
            the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal data, we cannot guarantee its absolute security.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service
            ("Service Providers"), to provide the service on our behalf, to perform service-related services
            or to assist us in analyzing how our service is used. These third parties have access to your
            Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use
            it for any other purpose.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service and hold certain
            information. Cookies are files with small amount of data which may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for
            any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>The right to access information we hold about you</li>
            <li>The right to request correction of any inaccurate personal data</li>
            <li>The right to request erasure of your personal data</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: aapowerwashers@gmail.com</li>
            <li>By visiting this page on our website: www.aapowerwashers.com/contact</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;