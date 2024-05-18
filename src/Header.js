import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import brand_logo from "./images/logo.PNG";
import { Helmet } from 'react-helmet';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <img src={brand_logo} alt="A&A Powerwashing Logo" className="brand-logo" />
      </NavLink>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
