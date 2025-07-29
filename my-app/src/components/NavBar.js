import React, { useState } from "react";
import { 
  FaSearch, 
  FaFeather, 
  FaUserCircle, 
  FaBell,  
  FaCog
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ For routing
import "../css/NavBar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [activeLink, setActiveLink] = useState("All");

  const navigate = useNavigate(); // ✅ Hook for navigation

  const notifications = [
    "New album release from Lana Del Rey",
    "Live concert streaming now!",
    "Your curated playlist is ready",
  ];

  const navLinks = [
    { name: "All", path: "/" },
    { name: "Live", path: "/live" },
    { name: "Podcasts", path: "/podcasts" },
    { name: "Socilize", path: "/social" },    
    { name: "Melody", path: "/melody" },
  ];

  const profileOptions = ["Profile", "Settings", "Logout"];

  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div className="logo-container">
        <div className="feather-icon">
          <FaFeather />
        </div>
        <span className="logo-text">Groovaura</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links-container">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className={`nav-link-item ${activeLink === link.name ? 'active' : ''}`}
            onClick={() => {
              setActiveLink(link.name);
              navigate(link.path);
            }}
          >
            <span className="nav-link-text">{link.name}</span>
            {activeLink === link.name && <div className="active-indicator"></div>}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-container">
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
  );
}

export default Navbar;
