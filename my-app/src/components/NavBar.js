import React, { useState } from "react";
import { 
  FaSearch, 
  FaFeather, 
  FaUserCircle, 
  FaBell,  
  FaCog,
  FaTimes,
  FaBars
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/NavBar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("All");

  const navigate = useNavigate();

  const notifications = [
    "New album release from Lana Del Rey",
    "Live concert streaming now!",
    "Your curated playlist is ready",
  ];

  const navLinks = [
    { name: "All", path: "/" },
    { name: "Live", path: "/live" },
    { name: "Podcasts", path: "/podcasts" },
    { name: "Socialize", path: "/social" },    
    { name: "Melody", path: "/melody" },
  ];

  const profileOptions = ["Profile", "Settings", "Logout"];

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    navigate(path);
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="navbar-container">
        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo Section */}
        <div className="logo-container" onClick={() => handleLinkClick("All", "/")}>
          <div className="feather-icon">
            <FaFeather />
          </div>
          <span className="logo-text">Groovaura</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links-container">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={`nav-link-item ${activeLink === link.name ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.name, link.path)}
            >
              <span className="nav-link-text">{link.name}</span>
              {activeLink === link.name && <div className="active-indicator"></div>}
            </div>
          ))}
        </div>

        {/* Search Bar - Desktop */}
        <div className="search-container desktop-search">
          <input
            type="text"
            placeholder="Search artists, songs..."
            className="search-input"
          />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>

        {/* User Actions */}
        <div className="user-actions-container">
          {/* Notifications */}
          <div className="notification-container">
            <div 
              className="notification-icon"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FaBell />
              {notifications.length > 0 && (
                <div className="notification-badge">{notifications.length}</div>
              )}
            </div>

            {showNotifications && (
              <div className="notifications-dropdown">
                <div className="notifications-header">
                  <strong>Notifications</strong>
                  <span>Mark all as read</span>
                </div>
                <ul className="notifications-list">
                  {notifications.map((note, index) => (
                    <li key={index} className="notification-item">
                      <div className="notification-dot"></div>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Settings Icon */}
          <div className="settings-icon">
            <FaCog />
          </div>

          {/* Profile Dropdown */}
          <div className="profile-container">
            <div 
              className="profile-icon-container"
              onClick={() => setShowProfileOptions(!showProfileOptions)}
            >
              <FaUserCircle />
            </div>

            {showProfileOptions && (
              <div className="profile-dropdown">
                <div className="profile-header">
                  <div>Sarah Parker</div>
                  <div>Premium Member</div>
                </div>
                <ul className="profile-options-list">
                  {profileOptions.map((option, index) => (
                    <li
                      key={index}
                      className="profile-options-item"
                      onClick={() => console.log(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Search Bar - Mobile */}
        <div className="search-container mobile-search">
          <input
            type="text"
            placeholder="Search artists, songs..."
            className="search-input"
          />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={`mobile-nav-link ${activeLink === link.name ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.name, link.path)}
            >
              <span className="mobile-nav-link-text">{link.name}</span>
              {activeLink === link.name && <div className="mobile-active-indicator"></div>}
            </div>
          ))}
        </div>

        {/* Mobile User Actions */}
        <div className="mobile-user-actions">
          <div className="mobile-notification" onClick={() => setShowNotifications(!showNotifications)}>
            <FaBell />
            <span>Notifications</span>
            {notifications.length > 0 && (
              <div className="mobile-notification-badge">{notifications.length}</div>
            )}
          </div>
          <div className="mobile-settings">
            <FaCog />
            <span>Settings</span>
          </div>
          <div className="mobile-profile" onClick={() => setShowProfileOptions(!showProfileOptions)}>
            <FaUserCircle />
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  );
}

export default Navbar;