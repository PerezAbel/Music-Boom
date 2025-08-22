import React from 'react';    
import '../css/Music.css';  
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PopularRadio() { 
  const navigate = useNavigate();
  
  // Define your categories with artists data
  const categories = [
    {
      title: 'Afro Heats',
      artists: [
        {
          title: 'Ninola',
          imageUrl: 'https://mp3bullet.ng/wp-content/uploads/2024/11/Niniola-1000x600-1.jpg',
          details: 'Ginger Me'
        },
        {
          title: 'Toxic Lyrikali',
          imageUrl: "https://i.ytimg.com/vi/o_Yt7uY35kE/maxresdefault.jpg",
          details: 'Sick'
        },
        {
          title: 'Zuchu',
          imageUrl: 'https://i.ytimg.com/vi/68__GT8TSAw/maxresdefault.jpg',
          details: 'Zuchu'
        },
        {
          title: 'Rema',
          imageUrl: 'https://i.ytimg.com/vi/ar7sFbbL09Q/maxresdefault.jpg',
          details: 'Kelebu'
        },
        {
          title: 'Mboso ft DVoice',
          imageUrl: 'https://i.ytimg.com/vi/jZv0PX8-_5Y/maxresdefault.jpg',
          details: 'Tunapendana'
        },
        {
          title: 'JazzWorks.Thukuthela & mAWHoo',
          imageUrl: 'https://i.scdn.co/image/ab67616d0000b273681e827601ff1fee18ad0cea',
          details: 'Usiziwa Kanjan'
        }
      ]
    },
    {
      title: 'The Best of Netflix & TikTok',
      artists: [
        {
          title: 'Saja Boys',
          imageUrl: 'https://i1.sndcdn.com/artworks-SUztm4uP3kiZuVc2-2ixXww-t500x500.jpg',
          details: 'Soda Pop'
        },
        {
          title: 'WizTheMc',
          imageUrl: 'https://i.ytimg.com/vi/Z3aduh5fxCo/maxresdefault.jpg',
          details: 'Show Me Love'
        },
        {
          title: 'Huntrix',
          imageUrl: 'https://images.genius.com/83a4701279b25b49b9c7af1940f0b17a.1000x1000x1.png',
          details: 'Golden'
        },
         {
          title: 'There She Goes',
          imageUrl: 'https://i.ytimg.com/vi/78Ri5noWlRE/maxresdefault.jpg',
          details: 'CYRIL x MOONLGHT x The Las'
        },
        {
          title: 'Saja Boys',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/66/Saja_Boys_-_Your_Idol.png',
          details: 'Your Idol'
        }, 
          {
          title: 'Katseye',
          imageUrl: 'https://i.ytimg.com/vi/GYyzaa9_ERg/maxresdefault.jpg',
          details: 'Gabrielle'
        }
      ]
    }
  ];

  const scrollLeft = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Check if categories exists before mapping
  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Gmain">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 style={{ textAlign: 'left', color: '#FFFFFF' }}>{category.title}</h2>
          <div className="scroll-wrapper">
            <div id={`artist-container-${index}`} className="card-container">
              {category.artists.map((artist, artistIndex) => (
                <div key={artistIndex} className="artist-card">
                  <div className="artist-image-container">
                    <span className="groovora-tag">
                      <FaMusic style={{ marginRight: 4 }} />
                      Groovora
                    </span>
                    <img 
                      src={artist.imageUrl} 
                      className="artist-image" 
                      alt={artist.title} 
                    />
                    <button 
                      className="play-button" 
                      onClick={() => console.log(`Playing ${artist.title}`)}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="artist-details">
                    <h5 className="artist-title">{artist.title}</h5>
                    <p className="artist-info">{artist.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft(`artist-container-${index}`)}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="scroll-button right" 
              onClick={() => scrollRight(`artist-container-${index}`)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularRadio;