import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import brand_logo from "./images/new_logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close dropdown when toggling menu
    if (!isOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation on button click
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Function to navigate to services page
  const goToServices = () => {
    navigate('/services');
    closeMenu();
  };

  // Handle clicks on the Services button
  const handleServicesClick = (e) => {
    // If the click is on the dropdown arrow, just toggle the dropdown
    if (e.target.className === 'dropdown-arrow') {
      toggleDropdown(e);
    } else {
      // Otherwise, navigate to the services page
      goToServices();
    }
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo-link" onClick={closeMenu}>
        <img src={brand_logo} alt="A&A Powerwashing Logo" className="brand-logo" />
      </NavLink>
      
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-icon"></span>
      </button>
      
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink>
        
        {/* Dropdown Menu for Services */}
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown-header">
            <button 
              className={`dropbtn ${location.pathname.includes('/services') ? 'active' : ''}`} 
              onClick={handleServicesClick}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Services <span className="dropdown-arrow" onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(e);
              }}>
                {isDropdownOpen ? '▲' : '▼'}
              </span>
            </button>
          </div>
          
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <NavLink to="/services/Powerwashing" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Powerwashing</NavLink>
            <NavLink to="/services/HouseWashing" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>House Washing</NavLink>
            <NavLink to="/services/WindowCleaning" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Window Cleaning</NavLink>
            <NavLink to="/services/BinCleaning" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Bin Cleaning</NavLink>
            <NavLink to="/services/RoofCleaning" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Roof Washing</NavLink>
            <NavLink to="/services/GutterCleaning" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Gutter Cleaning</NavLink>
            <NavLink to="/services/CommercialPowerwashing" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Commercial</NavLink>
          </div>
        </div>

        <NavLink to="/gallery" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Gallery</NavLink>

        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;