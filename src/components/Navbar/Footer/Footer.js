// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
          We are a team of passionate developers dedicated to providing top-notch services.
        </p>
      </div>
      <div className="footer-section">
        <h4>Services</h4>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>SEO</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="social-links">
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
