import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';  
import '../css/MyLibrary.css';  

function MyLibrary() {  
  const images = [
    'https://images.pexels.com/photos/4264824/pexels-photo-4264824.jpeg?cs=srgb&dl=pexels-catota-4264824.jpg&fm=jpg',  
    "https://media.gq-magazine.co.uk/photos/6629390c665e4051c2738957/16:9/w_1920,h_1080,c_limit/Indie_albums_HP.jpg",   
    "https://cdn.wccftech.com/wp-content/uploads/2020/08/Instagram-story-for-Apple-Music.jpg",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (   
    <div className='Library'>     
      <SearchBar/>  

      {/* Image Slider */}
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              display: index === currentImageIndex ? 'block' : 'none',
              width: '100%',
              height: '800px',
              objectFit: 'cover',    
              marginBottom: '30px'
            }}
          />
        ))}  
      </div>   

      {/* Library Cards Section */}
      <div className="library-cards">
        {/* Liked Songs Card */}
        <div className="library-card liked-songs">
          <img src="https://i.pinimg.com/736x/e9/37/67/e937672ae7f510f1e23bcd4cb86fa35f.jpg" alt="Liked Songs" className="card-image pink-image" />
          <h2>Liked Songs</h2>
          <p>All the songs you've liked in one place.</p>
          <button>View Liked Songs</button>
        </div>

        {/* Create Playlist Card */}
        <div className="library-card create-playlist">
          <img src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D" alt="Create Playlist" className="card-image blue-image" />
          <h2>Create a Playlist</h2>
          <p>Make your own custom playlists and share them.</p>
          <button>Create Now</button>
        </div>

        {/* Your Creations (Record Deal) Card */}
        <div className="library-card your-creations">
          <img src="https://r1.ilikewallpaper.net/iphone-wallpapers/download/34044/Album-Art-Girl-Neon-Light-Minimal-Illustration-Art-iphone-wallpaper-ilikewallpaper_com.jpg" alt="Record Deal" className="card-image purple-image" />
          <h2>Record Deal</h2>
          <p>Take your music career to the next level.</p>
          <button>View Deals</button>
        </div>
      </div>
    </div>
  );
}

export default MyLibrary;
