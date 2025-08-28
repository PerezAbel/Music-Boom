import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/LandingPage.css';
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const images = [
  {
    id: 'top',
    src: 'https://ca-times.brightspotcdn.com/dims4/default/8fa7359/2147483647/strip/true/crop/2000x2500+0+0/resize/2000x2500!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F79%2Ff0%2F3ffca92146909721a019d65e335c%2F1362470-env-billie-eilish-cover-photo-33.jpg',
    alt: 'Top Experience'
  },
  {
    id: 'right',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVErhnqKcSJRvkuON3iU3FRJv5pzUqep_hSg&s',
    alt: 'Right Experience'
  },
  {
    id: 'bottom',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TzbgHsjzV8zS3ymn3CdKee5ZzPEkH7OufcFYLieVQE73WKMPC-VXs-LO0Sw9FQUM2HE&usqp=CAU',
    alt: 'Bottom Experience'
  },
  {
    id: 'left',
    src: 'https://joulesproductions.co.uk/wp-content/uploads/2022/01/recording-studio-music-producer-mixing-mastering.jpg',
    alt: 'Left Experience'
  }
];

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/home');
  };

  const handleDemoLogin = () => {
    console.log('Demo login activated');
    navigate('/home');
  };

  return (
    <div className="landing-container">

      <div className="landing-content">

        {/* Diamond Grid Section */}
        <div className="landing-image-section fade-slide-up stagger-1">
          <div className="landing-image-content">
            <div className="diamond-grid">
              {images.map((img, idx) => (
                <figure
                  key={img.id}
                  className={`diamond ${img.id} fade-slide-up stagger-${idx + 2}`}
                  aria-label={img.alt}
                >
                  <img src={img.src} alt={img.alt} />
                </figure>
              ))}
            </div>

            <div className="image-caption fade-slide-up stagger-5">
              <h2>Experience Music Like Never Before</h2>
              <p>Discover millions of songs, curated playlists, and exclusive content</p>
            </div>
          </div>
        </div>

        {/* Auth Section */}
        <div className="auth-section fade-slide-up stagger-3">
          <div className="auth-container fade-slide-up stagger-4">
            <div className="auth-header">
              <h1>Groovora</h1>
              <p>Your ultimate music streaming experience</p>
            </div>

            <div className="auth-tabs">
              <button
                className={isLogin ? 'active' : ''}
                onClick={() => setIsLogin(true)}
                type="button"
              >
                Login
              </button>
              <button
                className={!isLogin ? 'active' : ''}
                onClick={() => setIsLogin(false)}
                type="button"
              >
                Sign Up
              </button>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  Remember me
                </label>

                {isLogin && (
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot password?
                  </Link>
                )}
              </div>

              <button type="submit" className="submit-btn">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>

              <div className="divider">
                <span>Or continue with</span>
              </div>

              <div className="social-auth">
                <button type="button" className="social-btn google">
                  Google
                </button>
                <button type="button" className="social-btn facebook">
                  Facebook
                </button>
                <button type="button" className="social-btn apple">
                  Apple
                </button>
              </div>
            </form>

            <div className="demo-section">
              <h2>Want to explore first?</h2>
              <p>Try our demo to experience the app without signing up</p>
              <button className="demo-btn" onClick={handleDemoLogin}>
                Explore Demo
              </button>
            </div>

            <div className="auth-footer">
              {isLogin ? (
                <p>
                  Don't have an account?{' '}
                  <button onClick={() => setIsLogin(false)} className="auth-switch" type="button">
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button onClick={() => setIsLogin(true)} className="auth-switch" type="button">
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Social Media Section */}
      <div className="social-media-section fade-slide-up stagger-5">
        <h3>Follow us</h3>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon fade-slide-up stagger-1">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon fade-slide-up stagger-2">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon fade-slide-up stagger-3">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
