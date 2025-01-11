import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onScroll }) => {
  const location = useLocation();
  
  // Function to handle navigation and scrolling
  const handleNavClick = (e, section) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
      return;
    }
    
    // If we're already on home page, just scroll
    switch(section) {
      case 'about':
        onScroll?.scrollToAbout();
        break;
      case 'treks':
        onScroll?.scrollToTreks();
        break;
      case 'testimonials':
        onScroll?.scrollToTestimonials();
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.postimg.cc/52Tm7VpW/white-mt-logo.png"
            alt="Logo"
            style={{ height: '60px', marginRight: '10px' }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#treks"
                onClick={(e) => handleNavClick(e, 'treks')}
              >
                Treks
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimonials"
                onClick={(e) => handleNavClick(e, 'testimonials')}
              >
                Testimonials
              </a>
            </li>
          </ul>
          {/* Contact Us Button */}
          <div className="d-flex">
            <button className="btn btn-light contact-btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;