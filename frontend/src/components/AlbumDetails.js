import React, { useState } from 'react';
import '../css/AlbumDetails.css';

const AlbumDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);

  // Sample album data
  const albumData = {
    id: 1,
    title: "Midnight Vibes",
    artist: "Aurora Waves",
    releaseDate: "June 15, 2023",
    coverImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    genre: "Electronic, Chillhop",
    label: "Dream Records",
    duration: "48:22",
    tracks: [
      { id: 1, title: "Nightfall", duration: "3:45", plays: "1.2M" },
      { id: 2, title: "Starlight", duration: "4:20", plays: "980K" },
      { id: 3, title: "Moonbeam", duration: "3:58", plays: "1.5M" },
      { id: 4, title: "Dream Sequence", duration: "5:12", plays: "890K" },
      { id: 5, title: "Aurora", duration: "4:35", plays: "1.1M" },
      { id: 6, title: "Twilight", duration: "3:27", plays: "750K" },
      { id: 7, title: "Celestial", duration: "4:50", plays: "920K" },
      { id: 8, title: "Nebula", duration: "5:05", plays: "810K" }
    ],
    description: "A journey through ambient electronic soundscapes, perfect for late-night listening and relaxation. Aurora Waves delivers a masterful blend of chillhop beats and atmospheric melodies that transport listeners to another dimension.",
    rating: 4.7
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e) => {
    setCurrentTime(parseInt(e.target.value));
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="album-detail-page">
      {/* Header */}
      <header className="album-header">
        <div className="container">
          <h1>Music Library</h1>
          <div className="search-user">
            <input type="text" placeholder="Search albums, artists..." className="search-bar" />
            <div className="user-profile">U</div>
          </div>
        </div>
      </header>

      {/* Album Hero Section */}
      <section className="album-hero">
        <div className="container">
          <div className="album-cover">
            <img src={albumData.coverImage} alt={albumData.title} />
            <div className="album-play-overlay" onClick={handlePlayPause}>
              <span className={`play-icon ${isPlaying ? 'playing' : ''}`}>
                {isPlaying ? '❚❚' : '▶'}
              </span>
            </div>
          </div>
          <div className="album-info">
            <h2>{albumData.title}</h2>
            <h3>{albumData.artist}</h3>
            <div className="album-meta">
              <span>{albumData.releaseDate}</span>
              <span>•</span>
              <span>{albumData.genre}</span>
              <span>•</span>
              <span>{albumData.duration}</span>
            </div>
            <div className="album-rating">
              <div className="stars">
                {'★'.repeat(Math.floor(albumData.rating))}
                {'☆'.repeat(5 - Math.floor(albumData.rating))}
              </div>
              <span>{albumData.rating}/5</span>
            </div>
            <p className="album-description">{albumData.description}</p>
            <div className="album-actions">
              <button className="btn-primary" onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button className="btn-secondary">Add to Library</button>
              <button className="btn-icon">♥</button>
              <button className="btn-icon">⋮</button>
            </div>
          </div>
        </div>
      </section>

      {/* Track Listing */}
      <section className="track-listing">
        <div className="container">
          <h3>Track List</h3>
          <div className="tracks-header">
            <span>#</span>
            <span>Title</span>
            <span>Plays</span>
            <span>Duration</span>
          </div>
          <div className="tracks-list">
            {albumData.tracks.map(track => (
              <div key={track.id} className="track-item">
                <span className="track-number">{track.id}</span>
                <span className="track-title">{track.title}</span>
                <span className="track-plays">{track.plays}</span>
                <span className="track-duration">{track.duration}</span>
                <button className="track-play">▶</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Controls */}
      <footer className="player-controls">
        <div className="container">
          <div className="now-playing">
            <img src={albumData.coverImage} alt="Now Playing" />
            <div className="track-info">
              <span className="track-name">Nightfall</span>
              <span className="artist-name">{albumData.artist}</span>
            </div>
          </div>
          <div className="playback-controls">
            <div className="control-buttons">
              <button>⇄</button>
              <button>⏮</button>
              <button className="play-pause" onClick={handlePlayPause}>
                {isPlaying ? '❚❚' : '▶'}
              </button>
              <button>⏭</button>
              <button>↺</button>
            </div>
            <div className="progress-bar">
              <span className="time-current">{formatTime(currentTime)}</span>
              <input 
                type="range" 
                min="0" 
                max="285" 
                value={currentTime} 
                onChange={handleTimeChange}
                className="progress-slider"
              />
              <span className="time-total">{albumData.tracks[0].duration}</span>
            </div>
          </div>
          <div className="volume-controls">
            <span className="volume-icon">🔊</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume} 
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlbumDetail;