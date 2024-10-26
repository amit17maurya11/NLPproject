// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyWebsite</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Parent link with dropdown */}
        <li 
          className="navbar-dropdown" 
          onMouseEnter={handleDropdown} 
          onMouseLeave={handleDropdown}
        >
          <Link to="/services">Services</Link>
          {/* Child menu (Dropdown) */}
          {dropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/app-development">App Development</Link></li>
              <li><Link to="/services/seo">SEO</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
