import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import brand_logo from "./images/new_logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      navigate('/services'); // Redirect to /services if dropdown is already open
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo-link" onClick={closeMenu}>
        <img src={brand_logo} alt="A&A Powerwashing Logo" className="brand-logo" />
      </NavLink>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>Home</NavLink>

        {/* Dropdown Menu for Services */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Services ▼
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <NavLink to="/services/Powerwashing" activeClassName="active" onClick={closeMenu}>Powerwashing</NavLink>
            <NavLink to="/services/HouseWashing" activeClassName="active" onClick={closeMenu}>House Washing</NavLink>
            <NavLink to="/services/WindowCleaning" activeClassName="active" onClick={closeMenu}>Window Cleaning</NavLink>
            <NavLink to="/services/BinCleaning" activeClassName="active" onClick={closeMenu}>Bin Cleaning</NavLink>
            <NavLink to="/services/RoofCleaning" activeClassName="active" onClick={closeMenu}>Roof Washing</NavLink>
            <NavLink to="/services/GutterCleaning" activeClassName="active" onClick={closeMenu}>Gutter Cleaning</NavLink>
            <NavLink to="/services/CommercialPowerwashing" activeClassName="active" onClick={closeMenu}>Commercial</NavLink>
          </div>
        </div>

        <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
