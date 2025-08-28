import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import "../css/SongDetails.css";

const API_KEY = process.env.REACT_APP_YT_API_KEY; 

const SongDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song } = location.state || {};   

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // Fetch YouTube video for this song
  useEffect(() => {
    async function fetchVideo() {
      if (!song?.title || !song?.artist) return;

      try {
        const query = encodeURIComponent(`${song.title} ${song.artist} official music video`);
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${query}&key=${API_KEY}`;

        console.log("Fetching YouTube video:", url);

        const res = await fetch(url);
        if (!res.ok) {
          console.error("YouTube API error, status:", res.status, await res.text());
          return;
        }

        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        } else {
          console.warn("No video found for this song");
        }
      } catch (err) {
        console.error("YouTube search error:", err);
      }
    }

    fetchVideo();
  }, [song]);

  // Simulate progress bar movement
  useEffect(() => {
    let interval;
    if (isPlaying && duration > 0) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            clearInterval(interval);
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Reset state when song changes
  useEffect(() => {
    if (song) {
      setDuration(song.duration || 240);
      setCurrentTime(0);
      setIsPlaying(false);
      setShowVideo(false);
      setIsFullscreen(false);

      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [song]);

  const handleClose = () => {
    navigate(-1);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!song) {
    return (
      <div className="song-details-overlay" onClick={handleClose}>
        <div
          className="song-details-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="song-details-header">
            <button className="close-btn" onClick={handleClose}>
              <span className="close-icon">×</span>
            </button>
            <h2>No Song Selected</h2>
          </div>
          <div className="no-song-message">
            <p>Please select a song from the main page.</p>
            <button onClick={handleClose} className="back-button">
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="song-details-overlay" onClick={handleClose}>
      <div
        className={`song-details-container ${isFullscreen ? "fullscreen" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="song-details-header">
          <button className="close-btn" onClick={handleClose}>
            <span className="close-icon">×</span>
          </button>
          <h2>Now Playing</h2>
        </div>

        {/* Album Art or Video */}
        <div className="media-container">
          {!showVideo ? (
            <div className="album-art-container">
              <img
                src={song.imageUrl || "/default-album.jpg"}
                alt={song.title}
                className="album-art"
              />
              {isPlaying && <div className="playing-pulse"></div>}
            </div>
          ) : (
            <div className={`video-container ${isFullscreen ? "fullscreen" : ""}`}>
              {videoId ? (
                <YouTube
                  videoId={videoId}
                  opts={{
                    width: "100%",
                    height: isFullscreen ? "100%" : "400",
                    playerVars: { autoplay: 1, controls: 1, modestbranding: 1 },
                  }}
                />
              ) : (
                <p>Loading video...</p>
              )}
              <button
                className="fullscreen-btn"
                onClick={handleToggleFullscreen}
              >
                {isFullscreen ? "⛶ Exit Fullscreen" : "⛶ Fullscreen"}
              </button>
            </div>
          )}
        </div>

        {/* Song Info (hide in fullscreen) */}
        {!isFullscreen && (
          <>
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
              <button className="control-btn shuffle">🔀</button>
              <button className="control-btn prev">⏮</button>
              <button
                className={`play-btn ${isPlaying ? "playing" : ""}`}
                onClick={handleTogglePlay}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button className="control-btn next">⏭</button>
              <button className="control-btn repeat">🔁</button>
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
                <span className="info-value">{song.genre || "Unknown"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year:</span>
                <span className="info-value">{song.year || "Unknown"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Bitrate:</span>
                <span className="info-value">320 kbps</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SongDetails;
