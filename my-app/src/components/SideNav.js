import React, { useState } from 'react';
import '../css/SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faChartBar, faFireFlameCurved, faClock, faBook, faBroadcastTower, faMusic, faCaretDown, faCaretUp, faFeather} from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="sidenav">   
      <div className="logo">     

      <FontAwesomeIcon icon={faFeather} className="icon" /> Musify
            
       
      </div>    

      <a href="#home">
        <FontAwesomeIcon icon={faHome} className="icon" /> Home
      </a>        
      <a href="#trending">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Artists
      </a>     
   
      <a href="#trending">
        <FontAwesomeIcon icon={faFireFlameCurved} className="icon" /> Trending
      </a>    
      <a href="#trending">
        <FontAwesomeIcon icon={faChartBar} className="icon" /> Chats
      </a>     
      <a href="#trending">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Genres
      </a>     
   
      <a href="#watch-later">
        <FontAwesomeIcon icon={faClock} className="icon" /> Watch Later
      </a>   
      <a href="#library">
        <FontAwesomeIcon icon={faBook} className="icon" /> Your Library
      </a>
      <a href="#live-radio">
        <FontAwesomeIcon icon={faBroadcastTower} className="icon" /> Live Radio
      </a>
      <a href="#playlist">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Your Playlist
      </a>   
     

      <button className="dropdown-btn" onClick={toggleDropdown}>
        Creators Journey
        <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown} className="icon" />
      </button>
      
      <div className={`dropdown-container ${dropdownOpen ? 'show' : ''}`}>
        <a href="#your-albums">Your Albums</a>
        <a href="#your-songs">Your Songs</a>
        <a href="#your-records">Your Records</a>
      </div>  
      <a href="#playlist">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Liked
      </a>      
      <a href="#playlist">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Podcats
      </a>     
    </div>  
    
  );
}

export default SideNav;
