import React from 'react';    
import '../css/Music.css';  
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PopularRadio() { 
  const navigate = useNavigate();
  
  // Define your categories with artists data
  const categories = [
    {
      title: 'Trending Songs',
      artists: [
        {
          id: 'song-1',
          title: 'APT',
          imageUrl: 'https://i1.sndcdn.com/artworks-AHYK4zCWSpHSXfDx-aOHvXQ-t1080x1080.png',
          details: 'Bruno Mars & Rose',
          artist: 'Bruno Mars',
          album: 'APT Single',
          duration: 225, // in seconds
          genre: 'Pop',
          year: '2023'
        },
        {
          id: 'song-2',
          title: 'Ordinary',
          imageUrl: "https://i1.sndcdn.com/artworks-HSPGU5NJIcUU-0-t500x500.jpg",
          details: 'Alex Warren',
          artist: 'Alex Warren',
          album: 'Ordinary Single',
          duration: 200,
          genre: 'Pop',
          year: '2023'
        },
        {
          id: 'song-3',
          title: 'Just Keep Watching',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/97/Tate_McRae_-_Just_Keep_Watching.png',
          details: 'Tate Macrea',
          artist: 'Tate McRae',
          album: 'Just Keep Watching Single',
          duration: 190,
          genre: 'Pop',
          year: '2023'
        },
        {
          id: 'song-4',
          title: 'Daisies',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2025/07/Justin-Bieber-Renell-Medrano-2025-press-billboard-1548.jpg?w=942&h=628&crop=1',
          details: 'Justin Bieber',
          artist: 'Justin Bieber',
          album: 'Daisies Single',
          duration: 235,
          genre: 'Pop',
          year: '2023'
        },
        {
          id: 'song-5',
          title: 'No One Noticed',
          imageUrl: 'https://i.scdn.co/image/ab67616d0000b27330257bd4af1639e05af14c98',
          details: 'The Maries',
          artist: 'The Maries',
          album: 'No One Noticed EP',
          duration: 242,
          genre: 'Indie',
          year: '2023'
        },
        {
          id: 'song-6',
          title: 'Drake',
          imageUrl: 'https://i.ytimg.com/vi/weU76DGHKU0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjmu3aZIwxAvsu1KdlZlvDPYbwBQ',
          details: 'What did i do',
          artist: 'Drake',
          album: 'What Did I Do Single',
          duration: 210,
          genre: 'Hip-Hop',
          year: '2023'
        }
      ]
    },
    {
      title: 'Record Breakers',
      artists: [
        {
          id: 'song-7',
          title: 'Elton John',
          imageUrl: 'https://i.ytimg.com/vi/sxb0GeS4gL8/maxresdefault.jpg',
          details: 'Candle in the Wind',
          artist: 'Elton John',
          album: 'Goodbye Yellow Brick Road',
          duration: 228,
          genre: 'Classic Rock',
          year: '1973'
        },
        {
          id: 'song-8',
          title: 'Harry Styles',
          imageUrl: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0',
          details: 'As it Was',
          artist: 'Harry Styles',
          album: "Harry's House",
          duration: 167,
          genre: 'Pop',
          year: '2022'
        },
        {
          id: 'song-9',
          title: 'Ed Sheeran',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsUc_Ta8jJoujVC2okyZWPMFdfXhklicI8Q&s',
          details: 'Shape of You',
          artist: 'Ed Sheeran',
          album: '÷ (Divide)',
          duration: 234,
          genre: 'Pop',
          year: '2017'
        },
        {
          id: 'song-10',
          title: 'Bruno Mars',
          imageUrl: 'https://cdn-images.dzcdn.net/images/artist/d80ed6a27d4fdd554b44c6539eee6fe5/1900x1900-000000-80-0-0.jpg',
          details: 'Uptown Funk',
          artist: 'Bruno Mars',
          album: 'Uptown Special',
          duration: 270,
          genre: 'Funk',
          year: '2014'
        },
        {
          id: 'song-11',
          title: 'Black Eyed Peas',
          imageUrl: 'https://images.genius.com/52f728ef67b4fbaaca192945e2e3e794.1000x1000x1.png',
          details: 'I Gotta Feeling',
          artist: 'Black Eyed Peas',
          album: 'The E.N.D.',
          duration: 289,
          genre: 'Pop',
          year: '2009'
        },
        {
          id: 'song-12',
          title: 'Mariey Carey & Boyz II Men',
          imageUrl: 'https://f4.bcbits.com/img/a2387808276_16.jpg',
          details: 'One Sweet Day',
          artist: 'Mariah Carey & Boyz II Men',
          album: 'Daydream',
          duration: 281,
          genre: 'R&B',
          year: '1995'
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