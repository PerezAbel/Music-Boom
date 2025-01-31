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
      
      <Link to="/trending">
        <FontAwesomeIcon icon={faFireFlameCurved} className="icon" /> Trending
      </Link>
      
      <Link to="/charts">
        <FontAwesomeIcon icon={faChartBar} className="icon" /> Charts
      </Link>
      
      <Link to="/genres">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Genres
      </Link>
      
      <Link to="/watch-later">
        <FontAwesomeIcon icon={faClock} className="icon" /> Watch Later
      </Link>
      
      <Link to="/your-library">
        <FontAwesomeIcon icon={faBook} className="icon" /> Your Library
      </Link>
      
      <Link to="/live-radio">
        <FontAwesomeIcon icon={faBroadcastTower} className="icon" /> Concerts
      </Link>
      
      <Link to="/playlist">
        <FontAwesomeIcon icon={faMusic} className="icon" /> Creators Journey
      </Link>
      
      <Link to="/liked">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Liked
      </Link>
      
      <Link to="/podcasts">
        <FontAwesomeIcon icon={faHeart} className="icon" /> Podcasts
      </Link> 
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