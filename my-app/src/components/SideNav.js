import React, { useState } from 'react';
import '../css/SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faChartBar, faFireFlameCurved, faClock, faBook, faBroadcastTower, faMusic, faCaretDown, faCaretUp, faFeather } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SideNav() {     

  
 
  return (
    <div className="sidenav">
      <div className="logo">
        <FontAwesomeIcon icon={faFeather} className="icon" /> Musify
      </div>

      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="icon" /> Home
      </Link>
      
      <Link to="/artists">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Artists
      </Link>   
      
      <Link to="/genres">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Genres
      </Link>  

      <Link to="/podcasts">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Podcasts
      </Link> 
      
      <Link to="/trending">
        <FontAwesomeIcon icon={faFireFlameCurved} className="icon" /> Events & Concerts
      </Link>
      
      <Link to="/charts">
        <FontAwesomeIcon icon={faChartBar} className="icon" /> New & Trending
      </Link>   

      <Link to="/mylibrary">
        <FontAwesomeIcon icon={faBook} className="icon" /> My Library
      </Link>
      
      
      
      {/* <Link to="/watch-later">
        <FontAwesomeIcon icon={faClock} className="icon" /> Watch Later
      </Link> */}
      
      
      
      <Link to="/fanbase">
        <FontAwesomeIcon icon={faBroadcastTower} className="icon" /> FanBase
      </Link>
      
      <Link to="/playlist">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Creators Journey
      </Link>
      
      {/* <Link to="/liked">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Liked
      </Link>
       */}
     
    </div>
  );
}
  
export default SideNav;




{/* <Link to="/playlist">
        <FontAwesomeIcon icon={faMusic} className="icon" /> FanBase
      </Link>
      
      <Link to="/liked">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Music Diary</Link>
      
      <Link to="/podcasts">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Creating  Memory 
      </Link>  

      Mood Powered Playlist  */}   

      // Music Pool 