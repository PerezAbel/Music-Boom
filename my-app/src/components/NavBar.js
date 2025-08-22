import React, { useState } from "react";
import { FaSearch, FaFeather, FaUserCircle, FaBell, FaBars, FaTimes, FaCog, FaSignOutAlt, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";    
import '../css/NavBar.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  
  const navigate = useNavigate();

  const navLinks = [
    { name: "Explore", path: "/" },
    // { name: "Live", path: "/live" },  
      { name: "Podcasts", path: "/podcasts" },
    { name: "Melody", path: "/melody" },
  
    // { name: "Socilize", path: "/social" },
  ];

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    setShowProfileDropdown(false);
  };

  return (
    <header className="navbar-container">
      {/* Logo */}
      <div className="logo-container" onClick={() => handleLinkClick("Home", "/")}>
        <FaFeather className="feather-icon" />
        <span className="logo-text">Groovaura</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`nav-link ${activeLink === link.name ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.name, link.path)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="nav-actions">
        <button className="search-btn" onClick={() => setShowSearch(!showSearch)}>
          <FaSearch />
        </button>
        <button className="notification-btn">
          <FaBell />
        </button>
        <div className="profile-container">
          <button 
            className="profile-btn"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <FaUserCircle className="profile-icon" />
          </button>
          {showProfileDropdown && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <FaUserCircle className="dropdown-profile-icon" />
                <span className="dropdown-username">Username</span>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">
                <FaUserCircle className="dropdown-icon" />
                <span>Profile</span>
              </button>
              <button className="dropdown-item">
                <FaMusic className="dropdown-icon" />
                <span>My Library</span>
              </button>
              <button className="dropdown-item">
                <FaCog className="dropdown-icon" />
                <span>Settings</span>
              </button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={handleLogout}>
                <FaSignOutAlt className="dropdown-icon" />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`mobile-nav-link ${activeLink === link.name ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.name, link.path)}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <button className="mobile-search-btn">
            <FaSearch /> Search
          </button>
          <div className="mobile-profile-section">
            <FaUserCircle className="mobile-profile-icon" />
            <span>My Profile</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="search-bar">
          <input type="text" placeholder="Search artists, songs..." />
          <FaSearch className="search-icon" />
        </div>
      )}
    </header>
  );
}

export default Navbar;