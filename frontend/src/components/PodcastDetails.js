import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/PodcastDetails.css';

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('episodes');

  // Simulate data fetching
  useEffect(() => {
    // In a real app, this would be an API call using podcastId
    const fetchPodcastData = () => {
      // Mock data
      const podcastData = {
        id: podcastId,
        title: "Darknet Diaries",
        host: "Jack Rhysider",
        coverImage: "https://dp6mhagng1yw3.cloudfront.net/entries/12th/b1952c0e-a099-4446-be70-bdae452e25a9.jpg",
        description: "Explore the fascinating world of hacking, data breaches, and cyber crime. Darknet Diaries stories from the dark side of the Internet.",
        category: "Technology",
        rating: 4.8,
        totalRatings: 12500,
        episodesCount: 145,
        frequency: "Monthly",
        language: "English",
        explicit: false,
        website: "https://darknetdiaries.com",
        socialLinks: {
          twitter: "https://twitter.com/darknetdiaries",
          facebook: "https://facebook.com/darknetdiaries",
          instagram: "https://instagram.com/darknetdiaries"
        }
      };

      const episodeData = [
        {
          id: "ep1",
          title: "Episode 145: The Xbox Underground Part 1",
          date: "May 2, 2023",
          duration: "45:18",
          description: "A group of hackers break into Microsoft and steal the Xbox One before it's released.",
          audioUrl: "https://traffic.libsyn.com/darknetdiaries/dnd145.mp3",
          plays: 450000
        },
        {
          id: "ep2",
          title: "Episode 144: The Mercenary",
          date: "April 4, 2023",
          duration: "52:31",
          description: "A cyber mercenary tells his story of hacking for hire.",
          audioUrl: "https://traffic.libsyn.com/darknetdiaries/dnd144.mp3",
          plays: 420000
        },
        {
          id: "ep3",
          title: "Episode 143: The Jailbreak",
          date: "March 7, 2023",
          duration: "38:42",
          description: "How a hacker broke out of a high-security prison using technology.",
          audioUrl: "https://traffic.libsyn.com/darknetdiaries/dnd143.mp3",
          plays: 390000
        },
        {
          id: "ep4",
          title: "Episode 142: The REvil Ransomware",
          date: "February 7, 2023",
          duration: "49:15",
          description: "The story of one of the most notorious ransomware groups in history.",
          audioUrl: "https://traffic.libsyn.com/darknetdiaries/dnd142.mp3",
          plays: 410000
        },
        {
          id: "ep5",
          title: "Episode 141: The Twitter Hack",
          date: "January 10, 2023",
          duration: "43:27",
          description: "How hackers took over the Twitter accounts of celebrities and politicians.",
          audioUrl: "https://traffic.libsyn.com/darknetdiaries/dnd141.mp3",
          plays: 380000
        }
      ];

      setPodcast(podcastData);
      setEpisodes(episodeData);
    };

    fetchPodcastData();
  }, [podcastId]);

  const handlePlayEpisode = (episode) => {
    if (currentEpisode && currentEpisode.id === episode.id) {
      // Toggle play/pause for current episode
      setIsPlaying(!isPlaying);
    } else {
      // Play new episode
      setCurrentEpisode(episode);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const formatPlayCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  if (!podcast) {
    return <div className="loading">Loading podcast...</div>;
  }

  return (
    <div className="podcast-details-page">
      {/* Header Section */}
      <div className="podcast-header">
        <div className="podcast-cover-container">
          <img src={podcast.coverImage} alt={podcast.title} className="podcast-cover" />
        </div>
        <div className="podcast-info">
          <p className="podcast-category">{podcast.category}</p>
          <h1 className="podcast-title">{podcast.title}</h1>
          <p className="podcast-host">By {podcast.host}</p>
          <div className="podcast-meta">
            <span className="rating">⭐ {podcast.rating} ({podcast.totalRatings.toLocaleString()})</span>
            <span className="episodes-count">{podcast.episodesCount} Episodes</span>
            <span className="frequency">{podcast.frequency}</span>
            {podcast.explicit && <span className="explicit">EXPLICIT</span>}
          </div>
          <div className="podcast-actions">
            <button className="subscribe-btn">Subscribe</button>
            <button className="share-btn">Share</button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="podcast-nav">
        <button 
          className={`nav-tab ${activeTab === 'episodes' ? 'active' : ''}`}
          onClick={() => setActiveTab('episodes')}
        >
          Episodes
        </button>
        <button 
          className={`nav-tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={`nav-tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* Content Section */}
      <div className="podcast-content">
        {activeTab === 'episodes' && (
          <div className="episodes-section">
            <h2>All Episodes</h2>
            <div className="episodes-list">
              {episodes.map((episode, index) => (
                <div 
                  key={episode.id} 
                  className={`episode-item ${currentEpisode?.id === episode.id ? 'active' : ''}`}
                >
                  <div className="episode-number">{index + 1}</div>
                  <div className="episode-info">
                    <h3 className="episode-title">{episode.title}</h3>
                    <p className="episode-description">{episode.description}</p>
                    <div className="episode-meta">
                      <span className="episode-date">{episode.date}</span>
                      <span className="episode-duration">{episode.duration}</span>
                      <span className="episode-plays">{formatPlayCount(episode.plays)} plays</span>
                    </div>
                  </div>
                  <button 
                    className="play-episode-btn"
                    onClick={() => handlePlayEpisode(episode)}
                  >
                    {currentEpisode?.id === episode.id && isPlaying ? '❚❚' : '▶'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about-section">
            <h2>About</h2>
            <p className="podcast-description">{podcast.description}</p>
            <div className="podcast-details">
              <h3>Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Language:</span>
                  <span className="detail-value">{podcast.language}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{podcast.category}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Explicit:</span>
                  <span className="detail-value">{podcast.explicit ? 'Yes' : 'No'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Website:</span>
                  <a href={podcast.website} target="_blank" rel="noopener noreferrer" className="detail-value link">
                    {podcast.website}
                  </a>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h3>Follow</h3>
              <div className="social-icons">
                <a href={podcast.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={podcast.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={podcast.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews-section">
            <h2>Ratings & Reviews</h2>
            <div className="rating-summary">
              <div className="average-rating">
                <span className="rating-value">{podcast.rating}</span>
                <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                <span className="rating-count">{podcast.totalRatings.toLocaleString()} ratings</span>
              </div>
              <button className="add-review-btn">Add Review</button>
            </div>
            <div className="reviews-list">
              <div className="review-item">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">JD</div>
                  <div className="reviewer-details">
                    <span className="reviewer-name">John Doe</span>
                    <span className="review-date">May 15, 2023</span>
                  </div>
                </div>
                <div className="review-content">
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  <p className="review-text">This is hands down the best cybersecurity podcast out there. The storytelling is incredible and the production quality is top-notch.</p>
                </div>
              </div>
              <div className="review-item">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">JS</div>
                  <div className="reviewer-details">
                    <span className="reviewer-name">Jane Smith</span>
                    <span className="review-date">April 28, 2023</span>
                  </div>
                </div>
                <div className="review-content">
                  <div className="review-stars">⭐⭐⭐⭐</div>
                  <p className="review-text">Fascinating stories from the dark side of the internet. Some episodes are truly eye-opening. Highly recommend for anyone interested in tech.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Player Footer */}
      {currentEpisode && (
        <div className="player-footer">
          <div className="player-info">
            <div className="now-playing">
              <span className="episode-title">{currentEpisode.title}</span>
              <span className="podcast-name">{podcast.title}</span>
            </div>
          </div>
          <div className="player-controls">
            <button className="control-btn">◀◀</button>
            <button 
              className="play-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>
            <button className="control-btn">▶▶</button>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="time-display">
              <span className="current-time">0:00</span>
              <span className="duration">{currentEpisode.duration}</span>
            </div>
          </div>
          <div className="player-options">
            <button className="option-btn">🔉</button>
            <button className="option-btn">↻</button>
            <button className="option-btn">⋮</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastDetails;