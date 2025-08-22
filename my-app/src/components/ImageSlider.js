import React, { useState, useEffect } from 'react';
import '../css/ImageSlider.css';

function ImageSlider() {
  const slides = [
    {
      image: 'https://www.billboard.com/wp-content/uploads/2025/06/sabrina-carpenter-brit-awards-2025-red-carpet-a-billboard-1548.jpg',
      title: 'Summer Vibes 2024',
      subtitle: 'New Album Release',
      description: 'The hottest tracks for your summer playlist featuring top artists',
      genre: 'Pop • EDM • Hip-Hop'
    },
    {
      image: 'https://cdn.vanguardngr.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-31-at-5.49.32-PM.jpeg',
      title: 'Rising Stars',
      subtitle: 'Discover New Talent',
      description: 'Emerging artists breaking into the scene this season',
      genre: 'Indie • Alternative • R&B'
    },
    {
      image: 'https://www.bridportmusic.co.uk/wp-content/uploads/2024/01/people-inside-a-club-8030137.jpg',
      title: 'Electronic Dreams',
      subtitle: 'Festival Anthems',
      description: 'The beats that will dominate clubs and festivals worldwide',
      genre: 'House • Techno • Trance'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 500);
  };

  const goToPrevious = () => {
    goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="music-slider-container">
      <div 
        className="music-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="music-slide">
            <div className="slide-image-wrapper">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="image-overlay"></div>
            </div>
            <div className={`slide-overlay ${fade ? 'fade-in' : 'fade-out'}`}>
              <div className="slide-content">
                <h3 className="slide-subtitle">{slide.subtitle}</h3>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
                <p className="slide-genre">{slide.genre}</p>
                <div className="slide-buttons">
                  <button className="play-now-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                    Play Now
                  </button>
                  <button className="explore-btn">
                    Explore <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slider-btn prev" onClick={goToPrevious}>
        <svg viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
        </svg>
      </button>
      <button className="slider-btn next" onClick={goToNext}>
        <svg viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </button>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;