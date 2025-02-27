import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import brand_logo from "./images/new_logo.png";
import { Helmet } from 'react-helmet';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
        <NavLink to="/services" activeClassName="active" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
