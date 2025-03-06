import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from './Button';

const Services = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (url) => {
    navigate(url);
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
      description: "We use a blend of chemicals to carefully soft wash your roof and rid it of dirt and grime that has built up over years",
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
      {/* Hero Section */}
      <div className="services-hero-section">
        <Helmet>
          <title>A&A Powerwashing | Services</title>
          <meta name="description" content="A&A Powerwashing offers a variety of services, from paver cleaning to roof washing.  Take a look and explore our practices on this page." />
          <meta name="keywords" content="powerwashing, pressure washing, power washing, cleaning, roof cleaning, window cleaning, commercial powerwashing, trash can cleaning, bin cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, aa powerwashing, aa powerwashers" />
          <meta property="og:title" content="A&A Powerwashing" />
          <meta property="og:description" content="A&A Powerwashing offers a variety of services, from paver cleaning to roof washing.  Take a look and explore our practices on this page." />
          <meta property="og:image" content="./images/new_logo.PNG" />
          <meta property="og:url" content="https://aapowerwashers.com" />
          <link rel="stylesheet" href="./src/Services.css" />
        </Helmet>

        <div className="services-hero-image"></div>

        <div className="services-hero-content">
          <div className="services-hero-text">
            <h1>Professional Powerwashing Services</h1>
            <p>Browse and learn more about our premium powerwashing solutions</p>
            {/* <Button to="/contact" size="medium">Get a quote</Button> */}

            <Link to="/contact" className="cta-button">Get a free quote</Link>
          </div>
        </div>
      </div>

      <svg className="services-hero-divider" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="#1e3a8a"/>
      </svg>

      {/* Services Section with Buttons */}
      <section className="page-services-section">
        <h2 className="page-services-title">Our Services</h2>
        <div className="page-service-buttons-container">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`page-service-button image-${service.imagePosition}`}
              onClick={() => handleServiceClick(service.url)}
            >
              <div className="page-service-icon">
                <i className={service.iconClass}></i>
              </div>
              <div className="page-service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="learn-more">Get Started</span>
              </div>
            </div>
          ))}
        </div> 
      </section>

      <div className="bottom-cta-section">
              <div className="bottom-cta-content">
                <h2>Ready to Transform Your Property?</h2>
                <p>
                  Contact us today for a free estimate on your pressure washing project.
                </p>

                <Link to="/contact" className="bottom-cta-button">Get a free quote</Link>
                
              </div>
            </div>
      
    </div>
  );
};

export default Services;

// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Services.css';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// // Remove image imports since we'll use Font Awesome icons instead

// const Services = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const navigate = useNavigate();
  
//   const handleServiceClick = (url) => {
//     navigate(url);
//   };

//   useEffect(() => {
//     // Try to autoplay video when component mounts
//     const video = videoRef.current;
//     if (video) {
//       video.play().catch(error => {
//         console.log("Auto-play was prevented. User must interact with the page first.");
//         setIsPlaying(false);
//       });
//     }
//   }, []);

//   const togglePlayPause = () => {
//     const video = videoRef.current;
//     if (video) {
//       if (video.paused) {
//         video.play();
//         setIsPlaying(true);
//       } else {
//         video.pause();
//         setIsPlaying(false);
//       }
//     }
//   };

//   // Updated service data with icon classes instead of images
//   const services = [
//     {
//       id: 1,
//       title: "Powerwashing",
//       description: "Professional cleaning for homes, driveways, and patios that removes dirt, grime, and stains.",
//       iconClass: "fas fa-water", // Water icon for powerwashing
//       url: "/services/Powerwashing",
//       imagePosition: "left"
//     },
//     {
//       id: 2,
//       title: "House Washing",
//       description: "Increase the curb appeal of your home and protect your investment from elements of nature",
//       iconClass: "fas fa-home", // Home icon for house washing
//       url: "/services/Housewashing",
//       imagePosition: "left"
//     },
//     {
//       id: 3,
//       title: "Window Cleaning",
//       description: "We scrub down your window panes and sills to ensure your home looks brand new from the inside out",
//       iconClass: "fas fa-window-maximize", // Window icon
//       url: "/services/WindowCleaning",
//       imagePosition: "left"
//     },
//     {
//       id: 4,
//       title: "Roof Cleaning",
//       description: "We use a blend of chemicals to carefully soft wash your roof and rid it of dirt and grime that has built up over years",
//       iconClass: "fas fa-home", // Home/roof icon
//       url: "/services/RoofCleaning",
//       imagePosition: "left"
//     },
//     {
//       id: 5,
//       title: "Bin/Trash Can Cleaning",
//       description: "Nobody likes filthy trash cans. We offer recurring services as well as one time services.",
//       iconClass: "fas fa-trash-alt", // Trash can icon
//       url: "/services/BinCleaning",
//       imagePosition: "left"
//     },
//     {
//       id: 6,
//       title: "Gutter Cleaning",
//       description: "Remove buildup in gutters and ensure proper waterflow",
//       iconClass: "fas fa-stream", // Stream icon for water flow in gutters
//       url: "/services/GutterCleaning",
//       imagePosition: "left"
//     },
//     {
//       id: 7,
//       title: "Commercial Powerwashing",
//       description: "Comprehensive cleaning services for businesses, storefronts, and commercial properties.",
//       iconClass: "fas fa-building", // Building icon for commercial properties
//       url: "/services/CommercialPowerwashing",
//       imagePosition: "left"
//     }
//   ];

//   return (

    
//     <div className="services-page">
//       {/* Hero Section with Video */}
//       <section className="hero-section">

//             <Helmet>
//                 <title>A&A Powerwashing | Services</title>
//                 <meta name="description" content="A&A Powerwashing offers a variety of services, from paver cleaning to roof washing.  Take a look and explore our practices on this page." />
//                 <meta name="keywords" content="powerwashing, pressure washing, power washing, cleaning, roof cleaning, window cleaning, commercial powerwashing, trash can cleaning, bin cleaning, home services, A&A Powerwashing, a and a powerwashing, a and a pressure washing, aa powerwashing, aa powerwashers" />
//                 <meta property="og:title" content="A&A Powerwashing" />
//                 <meta property="og:description" content="A&A Powerwashing offers a variety of services, from paver cleaning to roof washing.  Take a look and explore our practices on this page." />
//                 <meta property="og:image" content="./images/new_logo.PNG" />
//                 <meta property="og:url" content="https://aapowerwashers.com" />
//                 <link rel="stylesheet" href="./src/Services.css" />

//             </Helmet>

//         <div className="hero-video-container">
//           <video 
//             ref={videoRef}
//             id="hero-video" 
//             muted 
//             loop
//             playsInline
//           >
//             <source src="/videos/service-hero.webm" type="video/webm" />
//             Your browser does not support the video tag.
//           </video>

//           <div className="video-overlay">
//             <h1>Professional Powerwashing Services</h1>
//             <p>Restore your property's beauty with our premium powerwashing solutions</p>
//             <Link to="/contact" className="contact-button">Get a free quote</Link>

//           </div>
//           <button id="play-pause-btn" onClick={togglePlayPause}>
//             <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
//           </button>

//         </div>


//       </section>

//       {/* Services Section with Buttons */}
//       <section className="page-services-section">
//         <h2 className="page-services-title">Our Services</h2>
//         <div className="page-service-buttons-container">
//           {services.map((service) => (
//             <div 
//               key={service.id}
//               className={`page-service-button image-${service.imagePosition}`}
//               onClick={() => handleServiceClick(service.url)}
//             >
//               <div className="page-service-icon">
//                 <i className={service.iconClass}></i>
//               </div>
//               <div className="page-service-content">
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//                 <span className="learn-more">Get Started</span>
//               </div>
//             </div>
//           ))}
//         </div> 
//       </section>
//     </div>
//   );
// };

// export default Services;