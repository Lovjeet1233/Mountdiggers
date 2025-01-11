import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src="https://i.postimg.cc/52Tm7VpW/white-mt-logo.png" alt="Mount Diggers Logo" className="footer-logo" />
          <p className="footer-description">
          MountDiggers is a student-led startup from IIT Roorkee, dedicated to promoting eco-tourism in the Himalayan region. Our mission is to provide travelers with hassle-free, customizable itineraries for treks, trips, and a wide range of adventure activities, ensuring unforgettable experiences in one of the world's most pristine landscapes.

          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links">
          
            <a href="/privacy">Privacy</a>
            <a href="/Terms">Terms&Conditions</a>
          </div>
          <hr className="footer-divider" />
          <div className="footer-contact">
            <p>Email: <a href="namaste@mountdiggers.com
">namaste@mountdiggers.com
</a></p>
            <p>Phone: +91 9389309358</p>
          </div>
          <div className="footer-icons">
            <a href="https://www.instagram.com/mountdiggers/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/mountdiggers" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <p className="footer-copyright">© 2024 Mount Diggers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
