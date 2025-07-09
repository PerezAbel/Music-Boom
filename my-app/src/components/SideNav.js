import React, { useState } from 'react';
import '../css/SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faHeart, faChartBar, faFireFlameCurved, 
  faClock, faBook, faBroadcastTower, faMusic, 
  faCaretDown, faCaretUp, faFeather, faCompactDisc,
  faMicrophone, faCalendarAlt, faHistory, faDownload,
  faListUl, faCog, faCompress, faExpand
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SideNav() {
  const [expanded, setExpanded] = useState(true);
  const [showLibrary, setShowLibrary] = useState(false);

  const toggleSideNav = () => {
    setExpanded(!expanded);
  };

  const toggleLibrary = () => {
    setShowLibrary(!showLibrary);
  };

  return (
    <div className={`sidenav ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidenav-header">
        <FontAwesomeIcon icon={faFeather} className="logo-icon" />
        {expanded && <span className="logo-text">Melodify</span>}
      </div>

      <div className="sidenav-section">
        {expanded && <div className="section-title">MENU</div>}
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          {expanded && <span>Explore</span>}
        </Link>
        <Link to="/artists" className="nav-link">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
          {expanded && <span>Artists</span>}
        </Link>
        <Link to="/genres" className="nav-link">
          <FontAwesomeIcon icon={faCompactDisc} className="icon" />
          {expanded && <span>Albums</span>}
        </Link>
        <Link to="/podcasts" className="nav-link">
          <FontAwesomeIcon icon={faBroadcastTower} className="icon" />
          {expanded && <span>Genres</span>}
        </Link>
        <Link to="/trending" className="nav-link">
          <FontAwesomeIcon icon={faFireFlameCurved} className="icon" />
          {expanded && <span>Trending</span>}
        </Link>
        <Link to="/concerts" className="nav-link">
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          {expanded && <span>Concerts</span>}
        </Link>
      </div>

      <div className="sidenav-section">
        {expanded && <div className="section-title">LIBRARY</div>}
        <div className="nav-link library-header" onClick={toggleLibrary}>
          <FontAwesomeIcon icon={faBook} className="icon" />
          {expanded && (
            <>
              <span>Tunez</span>
              <FontAwesomeIcon 
                icon={showLibrary ? faCaretUp : faCaretDown} 
                className="toggle-icon" 
              />
            </>
          )}
        </div>
        
        {showLibrary && expanded && (
          <div className="library-sublinks">
            <Link to="/recent" className="nav-link sublink">
              <FontAwesomeIcon icon={faHistory} className="icon" />
              <span>Recent</span>
            </Link>
            <Link to="/downloads" className="nav-link sublink">
              <FontAwesomeIcon icon={faDownload} className="icon" />
              <span>Downloads</span>
            </Link>
            <Link to="/playlists" className="nav-link sublink">
              <FontAwesomeIcon icon={faListUl} className="icon" />
              <span>My Playlists</span>
            </Link>
          </div>
        )}
      </div>

      <div className="sidenav-section">
        {expanded && <div className="section-title">MY TOOLS</div>}
        <Link to="/settings" className="nav-link">
          <FontAwesomeIcon icon={faCog} className="icon" />
          {expanded && <span>Settings</span>}
        </Link>
      </div>

      <div className="toggle-button" onClick={toggleSideNav}>
        <FontAwesomeIcon icon={expanded ? faCompress : faExpand} />
      </div>
    </div>
  );
}

export default SideNav;