import React from 'react';
import './About.css';
import ownerAlexImage from './images/after4.jpeg';
import ownerAidanImage from './images/after2.jpeg';
import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <main className="about-page-container">

        <Helmet>
                <title>A&A Powerwashing | About</title>
                <meta name="description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, pressure washing, power washing, cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, south jersey powerwashing, sj powerwashing, cherry hill, margate" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Best in class pressure washing, tailored to your exact needs. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/new_logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
                <link rel="stylesheet" href="./src/About.css" />

            </Helmet>


      {/* Hero Section */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero-gradient">
          <svg
            className="about-hero-svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#f2f0ef"
              d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,160C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="about-hero-content">
            <h1 id="about-hero-title" className="about-hero-title">
              About A&A Powerwashing
            </h1>
            <p className="about-hero-subtitle">
              Learn about our founders and mission.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission" aria-labelledby="about-mission-title">
        <h2 id="about-mission-title" className="about-mission-title">
          Our Mission
        </h2>
        <p className="about-mission-description">
        At A&A Powerwashing, we transform the exteriors of residential homes into pristine sanctuaries that exude cleanliness and luxury. Our
mission is to become the most trusted and respected powerwashing provider in
South Jersey's coastal areas by delivering unparalleled service with a personal
touch. We believe in building lasting relationships with our clients through our
commitment to professionalism, trustworthiness, and approachability. Our small
business thrives on the principle of exceeding expectations, ensuring each home-
owner experiences the joy of revitalized and impeccably clean exteriors. With a
focus on meticulous care and attention, we aim to establish A&A Powerwashing as
the go-to solution for homeowners seeking premium exterior cleaning services.
Through our dedication to excellence, friendly demeanor, and genuine passion
for enhancing living spaces, we aspire to enhance the beauty of every home we
touch, one powerwash at a time.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-owners" aria-labelledby="about-owners-title">
        <h2 id="about-owners-title" className="about-owners-title">
          Meet The Owners
        </h2>
        <div className="about-owners-grid">
          <article className="about-owner-card" aria-labelledby="alex-name">
            <div className="about-owner-image-container">
              <img
                src={ownerAlexImage}
                alt="Alex, co-founder of A&A Powerwashing"
                className="about-owner-image"
              />
            </div>
            <h3 id="alex-name" className="about-owner-name">Alex Virilli</h3>
            <p className="about-owner-bio">
              With over 10 years of experience in exterior cleaning, Alex brings technical
              expertise and a meticulous approach to every project. His background in 
              construction maintenance gives him unique insights into surface care 
              and preservation.
            </p>
          </article>

          <article className="about-owner-card" aria-labelledby="aidan-name">
            <div className="about-owner-image-container">
              <img
                src={ownerAidanImage}
                alt="Aidan, co-founder of A&A Powerwashing"
                className="about-owner-image"
              />
            </div>
            <h3 id="aidan-name" className="about-owner-name">Aidan Eyre</h3>
            <p className="about-owner-bio">
              Customer service is Aidan’s passion. With a background in business management,
              he ensures that every client receives personalized attention and outstanding
              results. His commitment to quality and integrity drives our company’s reputation.
            </p>
          </article>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values" aria-labelledby="about-values-title">
        <h2 id="about-values-title" className="about-values-title">
          Our Core Values
        </h2>
        <div className="about-values-grid">
          <div className="about-value-item" tabIndex="0">
            <h4>Quality</h4>
            <p>Delivering superior results with professional-grade equipment.</p>
          </div>
          <div className="about-value-item" tabIndex="0">
            <h4>Integrity</h4>
            <p>Honest communication and transparent pricing.</p>
          </div>
          <div className="about-value-item" tabIndex="0">
            <h4>Customer Satisfaction</h4>
            <p>Going above and beyond to meet and exceed expectations.</p>
          </div>
          <div className="about-value-item" tabIndex="0">
            <h4>Environmental Responsibility</h4>
            <p>Using eco-friendly cleaning solutions and practices.</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        className="about-certifications"
        aria-labelledby="about-certifications-title"
      >
        <h2 id="about-certifications-title" className="about-certifications-title">
          Our Credentials
        </h2>
        <div className="about-certifications-content">
          <ul className="about-certifications-list">
            <li>Fully Insured Business</li>
            <li>Professional Power Washing Association Member</li>
            <li>EPA Compliant Cleaning Practices</li>
            <li>5+ Years of Local Service</li>
          </ul>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="about-cta" aria-labelledby="about-cta-title">
        <h2 id="about-cta-title" className="about-cta-title">
          Ready to Get Started?
        </h2>
        <p className="about-cta-text">
          Contact us today to request a free quote or learn more about our range of power 
          washing services. We look forward to making your property look brand new!
        </p>
        <a href="/contact" className="about-cta-button" aria-label="Contact Us">
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default About;
