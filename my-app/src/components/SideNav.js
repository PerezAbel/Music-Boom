import React, { useState, useEffect } from 'react';
import '../css/SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faHeart, faChartBar, faFireFlameCurved, 
  faClock, faBook, faBroadcastTower, faMusic, 
  faCaretDown, faCaretUp, faFeather, faCompactDisc,
  faMicrophone, faCalendarAlt, faHistory, faDownload,
  faListUl, faCog, faCompress, faExpand, faBars
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SideNav() {
  const [expanded, setExpanded] = useState(true);
  const [showLibrary, setShowLibrary] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setExpanded(false);
      } else {
        setExpanded(true);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideNav = () => {
    if (!isMobile) {
      setExpanded(!expanded);
    } else {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  const toggleLibrary = () => {
    if (isMobile || expanded) {
      setShowLibrary(!showLibrary);
    }
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        <button className="mobile-menu-toggle" onClick={toggleSideNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      
      <div 
        className={`sidenav ${expanded ? 'expanded' : 'collapsed'} ${mobileMenuOpen ? 'mobile-open' : ''}`}
      >

        <div className="sidenav-section">
          {!isMobile && expanded && <div className="section-title">MENU</div>}
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faHome} className="icon" />
            {(!isMobile && expanded) && <span>Explore</span>}
          </Link>
          <Link to="/artists" className="nav-link" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faMicrophone} className="icon" />
            {(!isMobile && expanded) && <span>Artists</span>}
          </Link>
          <Link to="/genres" className="nav-link" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faBroadcastTower} className="icon" />
            {(!isMobile && expanded) && <span>Genres</span>}
          </Link>
          <Link to="/albums" className="nav-link" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faCompactDisc} className="icon" />
            {(!isMobile && expanded) && <span>Albums</span>}
          </Link>
          {!isMobile && (
            <>
              <Link to="/trending" className="nav-link">
                <FontAwesomeIcon icon={faFireFlameCurved} className="icon" />
                {expanded && <span>Trending</span>}
              </Link>
              <Link to="/concertspage" className="nav-link">
                <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                {expanded && <span>Concerts</span>}
              </Link>
            </>
          )}
        </div>

        <div className="sidenav-section">
          {!isMobile && expanded && <div className="section-title">LIBRARY</div>}
          <div className="nav-link library-header" onClick={toggleLibrary}>
            <FontAwesomeIcon icon={faBook} className="icon" />
            {(!isMobile && expanded) && (
              <>
                <span>My Library</span>
                <FontAwesomeIcon 
                  icon={showLibrary ? faCaretUp : faCaretDown} 
                  className="toggle-icon" 
                />
              </>
            )}
          </div>
          
          {showLibrary && (isMobile || expanded) && (
            <div className="library-sublinks">
              <Link to="/recent" className="nav-link sublink" onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faHistory} className="icon" />
                <span>Recent</span>
              </Link>
              <Link to="/downloads" className="nav-link sublink" onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faDownload} className="icon" />
                <span>Downloads</span>
              </Link>
              <Link to="/playlists" className="nav-link sublink" onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faListUl} className="icon" />
                <span>My Playlists</span>
              </Link>
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="toggle-button" onClick={toggleSideNav}>
            <FontAwesomeIcon icon={expanded ? faCompress : faExpand} />
          </div>
        )}
      </div>

      {isMobile && mobileMenuOpen && (
        <div className="sidenav-overlay" onClick={toggleSideNav} />
      )}
    </>
  );
}

export default SideNav;