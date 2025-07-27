import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="spotify-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon">♫</span>
          <span className="logo-text">Grooovora</span>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/for-the-record">For the Record</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Communities</h4>
            <ul>
              <li><a href="/for-artists">For Artists</a></li>
              <li><a href="/developers">Developers</a></li>
              <li><a href="/advertising">Advertising</a></li>
              <li><a href="/investors">Investors</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Useful links</h4>
            <ul>
              <li><a href="/support">Support</a></li>
              <li><a href="/web-player">Web Player</a></li>
              <li><a href="/free-mobile-app">Free Mobile App</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="/legal">Legal</a>
          <a href="/privacy">Privacy Center</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookies">Cookies</a>
          <a href="/about-ads">About Ads</a>
          <a href="/accessibility">Accessibility</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Grooovora World
        </div>
      </div>
    </footer>
  );
}

export default Footer;