import React, { useState } from 'react';
import '../css/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHome, faUser, faCog, faBriefcase, faSearch, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sidenav">
      {/* Word logo at the top */}
      <div className="logo">
        <FontAwesomeIcon icon={faMusic} /> Musify
      </div>
      
      <a href="#about">
        <FontAwesomeIcon icon={faUser} /> About
      </a>
      <a href="#services">
        <FontAwesomeIcon icon={faCog} /> Services
      </a>
      <a href="#clients">
        <FontAwesomeIcon icon={faBriefcase} /> Clients
      </a>
      <a href="#contact">
        <FontAwesomeIcon icon={faHome} /> Contact
      </a>

      <button className="dropdown-btn" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown} /> Dropdown
      </button>

      <div className={`dropdown-container ${dropdownOpen ? 'show' : ''}`}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>

      <a href="#search">
        <FontAwesomeIcon icon={faSearch} /> Search
      </a>
    </div>
  );
}

export default SideNav;
