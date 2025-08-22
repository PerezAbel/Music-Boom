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
          id: 'afro-1',
          title: 'Ninola',
          imageUrl: 'https://mp3bullet.ng/wp-content/uploads/2024/11/Niniola-1000x600-1.jpg',
          details: 'Ginger Me',
          artist: 'Ninola',
          album: 'Ginger Me Single',
          duration: 215,
          genre: 'Afrobeats',
          year: '2024'
        },
        {
          id: 'afro-2',
          title: 'Toxic Lyrikali',
          imageUrl: "https://i.ytimg.com/vi/o_Yt7uY35kE/maxresdefault.jpg",
          details: 'Sick',
          artist: 'Toxic Lyrikali',
          album: 'Sick Single',
          duration: 198,
          genre: 'Afrobeats',
          year: '2024'
        },
        {
          id: 'afro-3',
          title: 'Zuchu',
          imageUrl: 'https://i.ytimg.com/vi/68__GT8TSAw/maxresdefault.jpg',
          details: 'Zuchu',
          artist: 'Zuchu',
          album: 'Zuchu EP',
          duration: 225,
          genre: 'Bongo Flava',
          year: '2024'
        },
        {
          id: 'afro-4',
          title: 'Rema',
          imageUrl: 'https://i.ytimg.com/vi/ar7sFbbL09Q/maxresdefault.jpg',
          details: 'Kelebu',
          artist: 'Rema',
          album: 'Raves & Roses',
          duration: 205,
          genre: 'Afrobeats',
          year: '2023'
        },
        {
          id: 'afro-5',
          title: 'Mboso ft DVoice',
          imageUrl: 'https://i.ytimg.com/vi/jZv0PX8-_5Y/maxresdefault.jpg',
          details: 'Tunapendana',
          artist: 'Mboso ft DVoice',
          album: 'Tunapendana Single',
          duration: 232,
          genre: 'Bongo Flava',
          year: '2024'
        },
        {
          id: 'afro-6',
          title: 'JazzWorks.Thukuthela & mAWHoo',
          imageUrl: 'https://i.scdn.co/image/ab67616d0000b273681e827601ff1fee18ad0cea',
          details: 'Usiziwa Kanjan',
          artist: 'JazzWorks.Thukuthela & mAWHoo',
          album: 'Usiziwa Kanjan Single',
          duration: 245,
          genre: 'Amapiano',
          year: '2024'
        }
      ]
    },
    {
      title: 'The Best of Netflix & TikTok',
      artists: [
        {
          id: 'netflix-1',
          title: 'Saja Boys',
          imageUrl: 'https://i1.sndcdn.com/artworks-SUztm4uP3kiZuVc2-2ixXww-t500x500.jpg',
          details: 'Soda Pop',
          artist: 'Saja Boys',
          album: 'Soda Pop Single',
          duration: 187,
          genre: 'Pop',
          year: '2024'
        },
        {
          id: 'netflix-2',
          title: 'WizTheMc',
          imageUrl: 'https://i.ytimg.com/vi/Z3aduh5fxCo/maxresdefault.jpg',
          details: 'Show Me Love',
          artist: 'WizTheMc',
          album: 'Show Me Love Single',
          duration: 195,
          genre: 'Pop',
          year: '2024'
        },
        {
          id: 'netflix-3',
          title: 'Huntrix',
          imageUrl: 'https://images.genius.com/83a4701279b25b49b9c7af1940f0b17a.1000x1000x1.png',
          details: 'Golden',
          artist: 'Huntrix',
          album: 'Golden Single',
          duration: 210,
          genre: 'Pop',
          year: '2024'
        },
         {
          id: 'netflix-4',
          title: 'There She Goes',
          imageUrl: 'https://i.ytimg.com/vi/78Ri5noWlRE/maxresdefault.jpg',
          details: 'CYRIL x MOONLGHT x The Las',
          artist: 'CYRIL x MOONLGHT x The Las',
          album: 'There She Goes Single',
          duration: 202,
          genre: 'Pop',
          year: '2024'
        },
        {
          id: 'netflix-5',
          title: 'Saja Boys',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/66/Saja_Boys_-_Your_Idol.png',
          details: 'Your Idol',
          artist: 'Saja Boys',
          album: 'Your Idol Single',
          duration: 192,
          genre: 'Pop',
          year: '2024'
        }, 
          {
          id: 'netflix-6',
          title: 'Katseye',
          imageUrl: 'https://i.ytimg.com/vi/GYyzaa9_ERg/maxresdefault.jpg',
          details: 'Gabrielle',
          artist: 'Katseye',
          album: 'Gabrielle Single',
          duration: 218,
          genre: 'Pop',
          year: '2024'
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

  // Function to handle navigation to song details
  const handleSongClick = (song) => {
    // Navigate to song details page with the song data
    navigate('/songdetails', { state: { song } });
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
                <div 
                  key={artistIndex} 
                  className="artist-card"
                  onClick={() => handleSongClick(artist)}
                  style={{ cursor: 'pointer' }}
                >
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
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the card click
                        console.log(`Playing ${artist.title}`);
                      }}
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