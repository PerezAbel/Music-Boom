import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/GenreDetails.css';

const GenreDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { genre } = location.state || {};
  
  const [activeTab, setActiveTab] = useState('songs');
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample data for the genre
  const [genreData, setGenreData] = useState({
    topSongs: [],
    topAlbums: [],
    topArtists: [],
    stats: {}
  });

  // Load sample data based on the genre
  useEffect(() => {
    if (genre) {
      // This would typically come from an API based on the genre
      const sampleData = {
        topSongs: [
          { id: 1, title: "Industry Baby", artist: "Lil Nas X", duration: "3:32", plays: "2.5B" },
          { id: 2, title: "SICKO MODE", artist: "Travis Scott", duration: "5:12", plays: "1.8B" },
          { id: 3, title: "God's Plan", artist: "Drake", duration: "3:18", plays: "1.7B" },
          { id: 4, title: "HUMBLE", artist: "Kendrick Lamar", duration: "2:57", plays: "1.5B" },
          { id: 5, title: "Bad and Boujee", artist: "Migos", duration: "4:10", plays: "1.3B" },
          { id: 6, title: "Bodak Yellow", artist: "Cardi B", duration: "3:43", plays: "1.2B" },
          { id: 7, title: "Rockstar", artist: "Post Malone", duration: "3:38", plays: "1.1B" },
          { id: 8, title: "Savage", artist: "Megan Thee Stallion", duration: "2:35", plays: "980M" },
          { id: 9, title: "Money Trees", artist: "Kendrick Lamar", duration: "6:26", plays: "920M" },
          { id: 10, title: "No Role Modelz", artist: "J. Cole", duration: "4:52", plays: "890M" }
        ],
        topAlbums: [
          { id: 1, title: "DAMN.", artist: "Kendrick Lamar", year: 2017, plays: "4.2B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 2, title: "Scorpion", artist: "Drake", year: 2018, plays: "3.8B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 3, title: "Astroworld", artist: "Travis Scott", year: 2018, plays: "3.5B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 4, title: "Invasion of Privacy", artist: "Cardi B", year: 2018, plays: "3.1B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 5, title: "Good Kid, M.A.A.D City", artist: "Kendrick Lamar", year: 2012, plays: "2.9B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 6, title: "Views", artist: "Drake", year: 2016, plays: "2.7B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 7, title: "Culture", artist: "Migos", year: 2017, plays: "2.4B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 8, title: "The Eminem Show", artist: "Eminem", year: 2002, plays: "2.2B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 9, title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", year: 2010, plays: "2.0B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" },
          { id: 10, title: "Take Care", artist: "Drake", year: 2011, plays: "1.9B", cover: "https://images.genius.com/9c0b81b3c8c2b6c8b0b0b0b0b0b0b0b0.1000x1000x1.jpg" }
        ],
        topArtists: [
          { id: 1, name: "Drake", plays: "28.5B", followers: "65M", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          { id: 2, name: "Kendrick Lamar", plays: "18.2B", followers: "42M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          { id: 3, name: "Kanye West", plays: "16.8B", followers: "38M", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" },
          { id: 4, name: "Travis Scott", plays: "15.3B", followers: "35M", image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
          { id: 5, name: "J. Cole", plays: "14.7B", followers: "33M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          { id: 6, name: "Eminem", plays: "13.9B", followers: "45M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          { id: 7, name: "Cardi B", plays: "12.5B", followers: "28M", image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
          { id: 8, name: "Post Malone", plays: "11.8B", followers: "31M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          { id: 9, name: "Lil Nas X", plays: "10.2B", followers: "25M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
          { id: 10, name: "Migos", plays: "9.7B", followers: "22M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }
        ],
        stats: {
          totalPlays: "150B+",
          monthlyListeners: "250M+",
          topCountry: "United States",
          dominantDecade: "2010s",
          popularity: "Very High"
        }
      };
      
      setGenreData(sampleData);
    }
  }, [genre]);

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!genre) {
    return (
      <div className="genre-details-overlay" onClick={handleClose}>
        <div className="genre-details-container" onClick={(e) => e.stopPropagation()}>
          <div className="genre-details-header">
            <button className="close-btn" onClick={handleClose}>
              <span className="close-icon">×</span>
            </button>
            <h2>No Genre Selected</h2>
          </div>
          <div className="no-genre-message">
            <p>Please select a genre from the main page.</p>
            <button onClick={handleClose} className="back-button">
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="genre-details-overlay" onClick={handleClose}>
      <div className="genre-details-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="genre-details-header">
          <button className="close-btn" onClick={handleClose}>
            <span className="close-icon">×</span>
          </button>
          <h2>{genre.Title} Genre</h2>
        </div>

        {/* Genre Banner */}
        <div className="genre-banner">
          <img 
            src={genre.imageurl} 
            alt={genre.Title}
            className="genre-banner-image"
          />
          <div className="genre-banner-overlay">
            <h1 className="genre-title-large">{genre.Title}</h1>
            <p className="genre-description">{genre.description}</p>
            <button 
              className={`play-genre-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handleTogglePlay}
            >
              <span className="play-icon">
                {isPlaying ? '⏸' : '▶'}
              </span>
              {isPlaying ? 'Pause' : 'Play Genre Radio'}
            </button>
          </div>
        </div>

        {/* Genre Stats */}
        <div className="genre-stats">
          <div className="stat-item">
            <span className="stat-number">{genreData.stats.totalPlays}</span>
            <span className="stat-label">Total Plays</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{genreData.stats.monthlyListeners}</span>
            <span className="stat-label">Monthly Listeners</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{genreData.stats.topCountry}</span>
            <span className="stat-label">Top Country</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{genreData.stats.dominantDecade}</span>
            <span className="stat-label">Dominant Decade</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="genre-tabs">
          <button 
            className={`tab-button ${activeTab === 'songs' ? 'active' : ''}`}
            onClick={() => setActiveTab('songs')}
          >
            Top Songs
          </button>
          <button 
            className={`tab-button ${activeTab === 'albums' ? 'active' : ''}`}
            onClick={() => setActiveTab('albums')}
          >
            Top Albums
          </button>
          <button 
            className={`tab-button ${activeTab === 'artists' ? 'active' : ''}`}
            onClick={() => setActiveTab('artists')}
          >
            Top Artists
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          {activeTab === 'songs' && (
            <div className="songs-content">
              <h3>Top 10 {genre.Title} Songs</h3>
              <div className="songs-list">
                {genreData.topSongs.map((song, index) => (
                  <div key={song.id} className="song-item">
                    <span className="song-rank">{index + 1}</span>
                    <div className="song-info">
                      <span className="song-title">{song.title}</span>
                      <span className="song-artist">{song.artist}</span>
                    </div>
                    <span className="song-plays">{song.plays}</span>
                    <span className="song-duration">{song.duration}</span>
                    <button className="song-play-btn">▶</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'albums' && (
            <div className="albums-content">
              <h3>Top 10 {genre.Title} Albums</h3>
              <div className="albums-grid">
                {genreData.topAlbums.map((album) => (
                  <div key={album.id} className="album-card">
                    <img src={album.cover} alt={album.title} className="album-cover" />
                    <div className="album-info">
                      <h4 className="album-title">{album.title}</h4>
                      <p className="album-artist">{album.artist}</p>
                      <p className="album-year">{album.year}</p>
                      <p className="album-plays">{album.plays} plays</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'artists' && (
            <div className="artists-content">
              <h3>Top 10 {genre.Title} Artists</h3>
              <div className="artists-grid">
                {genreData.topArtists.map((artist, index) => (
                  <div key={artist.id} className="artist-card">
                    <span className="artist-rank">{index + 1}</span>
                    <img src={artist.image} alt={artist.name} className="artist-image" />
                    <div className="artist-info">
                      <h4 className="artist-name">{artist.name}</h4>
                      <p className="artist-plays">{artist.plays} total plays</p>
                      <p className="artist-followers">{artist.followers} followers</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Genre Description */}
        <div className="genre-description-section">
          <h3>About {genre.Title} Music</h3>
          <div className="description-content">
            <p>
              {genre.Title} is a music genre that originated in the African-American communities of New Orleans, United States, 
              in the late 19th and early 20th centuries. It emerged in the form of independent traditional and popular musical styles, 
              all linked by the common bonds of African-American and European-American musical parentage with a performance orientation.
            </p>
            <p>
              {genre.Title} is characterized by swing and blue notes, complex chords, call and response vocals, polyrhythms and improvisation. 
              {genre.Title} has roots in West African cultural and musical expression, and in African-American music traditions including blues and ragtime.
            </p>
            <p>
              Since the 1920s {genre.Title} Age, {genre.Title} has become recognized as a major form of musical expression. It then emerged in the form of 
              independent traditional and popular musical styles, all linked by the common bonds of African-American and European-American 
              musical parentage with a performance orientation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreDetails;