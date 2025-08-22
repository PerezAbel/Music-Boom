import React, { useState, useEffect } from 'react';
import './SongDetails.css';

const SongDetails = ({ song, onClose, isPlaying = false, onTogglePlay }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);

  // Simulate progress bar movement when song is playing
  useEffect(() => {
    let interval;
    if (isPlaying && duration > 0) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            clearInterval(interval);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Set initial duration when song changes
  useEffect(() => {
    if (song) {
      setDuration(song.duration || 240); // Default 4 minutes if not provided
      setCurrentTime(0);
    }
  }, [song]);

  if (!song) return null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="song-details-overlay" onClick={onClose}>
      <div className="song-details-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="song-details-header">
          <button className="close-btn" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
          <h2>Now Playing</h2>
        </div>

        {/* Album Art */}
        <div className="album-art-container">
          <img 
            src={song.albumArt || '/default-album.jpg'} 
            alt={song.title}
            className="album-art"
          />
          {isPlaying && <div className="playing-pulse"></div>}
        </div>

        {/* Song Info */}
        <div className="song-info">
          <h1 className="song-title">{song.title}</h1>
          <p className="song-artist">{song.artist}</p>
          <p className="song-album">{song.album}</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button className="control-btn shuffle">
            <span className="control-icon">🔀</span>
          </button>
          <button className="control-btn prev">
            <span className="control-icon">⏮</span>
          </button>
          <button 
            className={`play-btn ${isPlaying ? 'playing' : ''}`}
            onClick={onTogglePlay}
          >
            <span className="play-icon">
              {isPlaying ? '⏸' : '▶'}
            </span>
          </button>
          <button className="control-btn next">
            <span className="control-icon">⏭</span>
          </button>
          <button className="control-btn repeat">
            <span className="control-icon">🔁</span>
          </button>
        </div>

        {/* Volume Control */}
        <div className="volume-control">
          <span className="volume-icon">🔈</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="volume-slider"
          />
          <span className="volume-percentage">{volume}%</span>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-item">
            <span className="info-label">Genre:</span>
            <span className="info-value">{song.genre || 'Unknown'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Year:</span>
            <span className="info-value">{song.year || 'Unknown'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Bitrate:</span>
            <span className="info-value">320 kbps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;