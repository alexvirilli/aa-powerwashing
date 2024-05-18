import React from 'react';
import './Services.css'; 
import AccordionItem from './AccordionItem';
import { Helmet } from 'react-helmet';

function Services() {
  return (

    

    <div className="services">

            <Helmet>
                <title>A&A Powerwashing | Services </title>
                <meta name="description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
                <meta name="keywords" content="powerwashing, cleaning, home services, A&A Powerwashing" />
                <meta property="og:title" content="A&A Powerwashing" />
                <meta property="og:description" content="Professional power washing services at affordable prices. Make your home look new again with A&A Powerwashing." />
                <meta property="og:image" content="./images/logo.PNG" />
                <meta property="og:url" content="https://aapowerwashers.com" />
            </Helmet>

      <h2>Our Services</h2>

      <AccordionItem title="🏠 Residential Powerwashing">
        <p><strong>Transform the Look of Your Home</strong></p>
        <p>
          Our residential powerwashing services are designed to restore the beauty of your home’s exterior. 
          Whether it’s your siding, driveway, or patio, we use high-pressure cleaning techniques to remove 
          dirt, grime, mold, and mildew. Regular powerwashing not only enhances curb appeal but also extends 
          the lifespan of your exterior surfaces.
        </p>
        <div className="highlight">
          <strong>Our Residential Services Include:</strong>
        </div>
        <ul>
          <li><strong>Siding Cleaning:</strong> Remove built-up dirt, mold, and mildew to restore your home’s original shine.</li>
          <li><strong>Driveway and Sidewalk Cleaning:</strong> Eliminate stains and discoloration caused by oil, dirt, and weather.</li>
          <li><strong>Deck and Patio Cleaning:</strong> Revitalize your outdoor living spaces by removing dirt and algae, making them look new again.</li>
          <li><strong>Roof Cleaning:</strong> Safely remove moss, algae, and debris to protect your roof and improve its appearance.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="🏢 Commercial Powerwashing">
        <p><strong>Enhance Your Business Image</strong></p>
        <p>
          First impressions matter, especially in business. Our commercial powerwashing services help maintain 
          a clean and inviting exterior, which is crucial for attracting customers and clients. We handle everything 
          from storefronts and sidewalks to parking lots and building facades.
        </p>
        <div className="highlight">
          <strong>Our Commercial Services Include:</strong>
        </div>
        <ul>
          <li><strong>Building Exterior Cleaning:</strong> Remove dirt, pollution, and graffiti to keep your business looking professional.</li>
          <li><strong>Parking Lot Cleaning:</strong> Keep your parking areas free of oil stains, debris, and gum for a safe and clean environment.</li>
          <li><strong>Sidewalk and Entrance Cleaning:</strong> Ensure your entryways are spotless, providing a welcoming atmosphere for visitors.</li>
          <li><strong>Awning and Signage Cleaning:</strong> Maintain the appearance of your business signage and awnings to reflect your brand’s quality.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="🪑 Deck and Patio Cleaning">
        <p><strong>Revitalize Your Outdoor Living Spaces</strong></p>
        <p>
          Your deck and patio are perfect places to relax and entertain, but they can quickly accumulate dirt, 
          algae, and stains. Our deck and patio cleaning services use powerful, yet safe, cleaning techniques 
          to restore the natural beauty of your outdoor spaces, making them inviting and safe for use.
        </p>
        <div className="highlight">
          <strong>Our Deck and Patio Services Include:</strong>
        </div>
        <ul>
          <li><strong>Deck Cleaning:</strong> Remove algae, dirt, and stains to preserve the wood and prevent slipping.</li>
          <li><strong>Patio Cleaning:</strong> Clean and brighten patios made of concrete, stone, brick, or other materials.</li>
          <li><strong>Furniture Cleaning:</strong> We can also clean your outdoor furniture to ensure it matches the fresh look of your deck and patio.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="🚗 Driveway and Sidewalk Cleaning">
        <p><strong>Improve Safety and Curb Appeal</strong></p>
        <p>
          Driveways and sidewalks are high-traffic areas that can quickly become stained and dirty. Our driveway 
          and sidewalk cleaning services remove oil stains, dirt, and other contaminants, enhancing the appearance 
          and safety of these areas.
        </p>
        <div className="highlight">
          <strong>Our Driveway and Sidewalk Services Include:</strong>
        </div>
        <ul>
          <li><strong>Driveway Cleaning:</strong> Remove stubborn stains from oil, grease, and rust, making your driveway look new.</li>
          <li><strong>Sidewalk Cleaning:</strong> Ensure your sidewalks are clean and safe for walking by eliminating dirt, algae, and gum.</li>
          <li><strong>Stain Removal:</strong> Specialized treatments for tough stains that regular cleaning can't handle.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="🏠 Siding and Roof Cleaning">
        <p><strong>Protect and Beautify Your Home</strong></p>
        <p>
          The exterior of your home, especially the siding and roof, is constantly exposed to the elements. Our 
          siding and roof cleaning services remove dirt, mold, algae, and other contaminants, preventing damage 
          and maintaining your home’s appearance.
        </p>
        <div className="highlight">
          <strong>Our Siding and Roof Services Include:</strong>
        </div>
        <ul>
          <li><strong>Siding Cleaning:</strong> Powerwash vinyl, wood, and other types of siding to remove grime, mold, and mildew.</li>
          <li><strong>Roof Cleaning:</strong> Safely clean your roof to remove moss, algae, and debris, extending its lifespan and improving curb appeal.</li>
          <li><strong>Gutter Cleaning:</strong> Ensure your gutters are free of debris to prevent water damage and maintain proper drainage.</li>
        </ul>
      </AccordionItem>

    <div className='spacediv'>

    </div>
    </div>
    
    

  );
}

export default Services;
