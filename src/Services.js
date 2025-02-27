import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { useNavigate } from 'react-router-dom';
// Remove image imports since we'll use Font Awesome icons instead

const Services = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const navigate = useNavigate();
  
  const handleServiceClick = (url) => {
    navigate(url);
  };

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

  // Updated service data with icon classes instead of images
  const services = [
    {
      id: 1,
      title: "Powerwashing",
      description: "Professional cleaning for homes, driveways, and patios that removes dirt, grime, and stains.",
      iconClass: "fas fa-water", // Water icon for powerwashing
      url: "/services/Powerwashing",
      imagePosition: "left"
    },
    {
      id: 2,
      title: "House Washing",
      description: "Increase the curb appeal of your home and protect your investment from elements of nature",
      iconClass: "fas fa-home", // Home icon for house washing
      url: "/services/Housewashing",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Window Cleaning",
      description: "We scrub down your window panes and sills to ensure your home looks brand new from the inside out",
      iconClass: "fas fa-window-maximize", // Window icon
      url: "/services/WindowCleaning",
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Roof Cleaning",
      description: "We use a blend of chemicals to carefully soft wash your roof and rid it of dirt and grime that has bilt up over years",
      iconClass: "fas fa-home", // Home/roof icon
      url: "/services/RoofCleaning",
      imagePosition: "left"
    },
    {
      id: 5,
      title: "Bin/Trash Can Cleaning",
      description: "Nobody likes filthy trash cans. We offer recurring services as well as one time services.",
      iconClass: "fas fa-trash-alt", // Trash can icon
      url: "/services/BinCleaning",
      imagePosition: "left"
    },
    {
      id: 6,
      title: "Gutter Cleaning",
      description: "Remove buildup in gutters and ensure proper waterflow",
      iconClass: "fas fa-stream", // Stream icon for water flow in gutters
      url: "/services/GutterCleaning",
      imagePosition: "left"
    },
    {
      id: 7,
      title: "Commercial Powerwashing",
      description: "Comprehensive cleaning services for businesses, storefronts, and commercial properties.",
      iconClass: "fas fa-building", // Building icon for commercial properties
      url: "/services/CommercialPowerwashing",
      imagePosition: "left"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video 
            ref={videoRef}
            id="hero-video" 
            muted 
            loop
            playsInline
          >
            <source src="/videos/service-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h1>Professional Powerwashing Services</h1>
            <p>Restore your property's beauty with our premium powerwashing solutions</p>
            <Link to="/contact" className="contact-button">Get a free quote</Link>

          </div>
          <button id="play-pause-btn" onClick={togglePlayPause}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
        </div>
      </section>

      {/* Services Section with Buttons */}
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="service-buttons-container">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-button image-${service.imagePosition}`}
              onClick={() => handleServiceClick(service.url)}
            >
              <div className="service-icon">
                <i className={service.iconClass}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="learn-more">Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;