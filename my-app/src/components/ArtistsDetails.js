import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import '../css/ArtistsDetails.css';

const ArtistDetails = ({ artistData }) => {
  const [activeTab, setActiveTab] = useState('songs');
  const { artistName } = useParams();
  
  // Sample artist data
  const artist = {
    id: "1",
    name: "Taylor Swift",
    imageUrl: "https://ca-times.brightspotcdn.com/dims4/default/3530407/2147483647/strip/true/crop/6000x4000+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9e%2F3d%2Fc8b2c91e444db977153126be99f4%2F67th-annual-grammy-awards-arrivals-84407.jpg",
    bio: "Taylor Alison Swift is an American singer-songwriter. Her discography spans multiple genres, and her songwriting—often inspired by her personal life—has received critical praise and wide media coverage.",
    genre: "Pop, Country, Folk",
    activeYears: "2006–present",
    labels: "Republic, Big Machine",
    awards: [
      "12 Grammy Awards",
      "1 Emmy Award",
      "40 American Music Awards",
      "29 Billboard Music Awards",
      "6 Guinness World Records"
    ],
    songs: [
      { id: "s1", title: "Love Story", year: "2008", duration: "3:55" },
      { id: "s2", title: "Blank Space", year: "2014", duration: "3:51" },
      { id: "s3", title: "Shake It Off", year: "2014", duration: "3:39" },
      { id: "s4", title: "Cardigan", year: "2020", duration: "3:59" },
      { id: "s5", title: "Anti-Hero", year: "2022", duration: "3:20" }
    ],
    albums: [
      { id: "1", title: "Midnights", year: "2022", imageUrl: "https://www.vinylchapters.com/wp-content/uploads/2022/10/tay1-750x420.jpg" },
      { id: "a2", title: "Folklore", year: "2020", imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png" },
      { id: "a3", title: "1989", year: "2014", imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png" },
      { id: "a4", title: "Red", year: "2012", imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" },
      { id: "a5", title: "Fearless", year: "2008", imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Fearless.png" }
    ],
    followers: "102M",
    monthlyListeners: "82.4M"    
    ,
    
     id: "1",
    name: "Taylor Swift",
    imageUrl: "https://ca-times.brightspotcdn.com/dims4/default/3530407/2147483647/strip/true/crop/6000x4000+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9e%2F3d%2Fc8b2c91e444db977153126be99f4%2F67th-annual-grammy-awards-arrivals-84407.jpg",
    bio: "Taylor Alison Swift is an American singer-songwriter. Her discography spans multiple genres, and her songwriting—often inspired by her personal life—has received critical praise and wide media coverage.",
    genre: "Pop, Country, Folk",
    activeYears: "2006–present",
    labels: "Republic, Big Machine",
    awards: [
      "12 Grammy Awards",
      "1 Emmy Award",
      "40 American Music Awards",
      "29 Billboard Music Awards",
      "6 Guinness World Records"
    ],
    songs: [
      { id: "s1", title: "Love Story", year: "2008", duration: "3:55" },
      { id: "s2", title: "Blank Space", year: "2014", duration: "3:51" },
      { id: "s3", title: "Shake It Off", year: "2014", duration: "3:39" },
      { id: "s4", title: "Cardigan", year: "2020", duration: "3:59" },
      { id: "s5", title: "Anti-Hero", year: "2022", duration: "3:20" }
    ],
    albums: [
      { id: "1", title: "Midnights", year: "2022", imageUrl: "https://www.vinylchapters.com/wp-content/uploads/2022/10/tay1-750x420.jpg" },
      { id: "a2", title: "Folklore", year: "2020", imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png" },
      { id: "a3", title: "1989", year: "2014", imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png" },
      { id: "a4", title: "Red", year: "2012", imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" },
      { id: "a5", title: "Fearless", year: "2008", imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Fearless.png" }
    ],
    followers: "102M",
    monthlyListeners: "82.4M" 


    
  };   
  
  
  

  return (
    <div className="artist-detail-page">
      {/* Artist Header Section with gradient overlay */}
      <div className="artist-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${artist.imageUrl})` }}>
        <div className="artist-header-content">
          <div className="artist-image-container">
            <img src={artist.imageUrl} alt={artist.name} className="artist-image" />
          </div>
          <div className="artist-info">
            <p className="artist-verified">Verified Artist</p>
            <h1 className="artist-name">{artist.name}</h1>
            <p className="artist-followers">{artist.followers} followers • {artist.monthlyListeners} monthly listeners</p>
            <div className="artist-actions">
              <button className="play-button">
                <span className="play-icon">▶</span>
                Play
              </button>
              <button className="follow-button">Follow</button>
              <button className="more-options">⋯</button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Songs Section (Always visible) */}
      <div className="popular-section">
        <h2 className="section-title">Popular</h2>
        <div className="popular-songs">
          {artist.songs.slice(0, 5).map((song, index) => (
            <div key={song.id} className="popular-song-item">
              <div className="song-number">{index + 1}</div>
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-plays">{Math.floor(Math.random() * 900) + 100}M plays</p>
              </div>
              <span className="song-duration">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'songs' ? 'active' : ''}`}
          onClick={() => setActiveTab('songs')}
        >
          Songs
        </button>
        <button 
          className={`nav-tab ${activeTab === 'albums' ? 'active' : ''}`}
          onClick={() => setActiveTab('albums')}
        >
          Albums
        </button>
        <button 
          className={`nav-tab ${activeTab === 'awards' ? 'active' : ''}`}
          onClick={() => setActiveTab('awards')}
        >
          Awards
        </button>
      </div>

      {/* Content Sections */}
      <div className="content-section">
        {activeTab === 'songs' && (
          <div className="songs-section">
            <div className="section-header">
              <h2 className="section-title">Songs</h2>
              <span className="see-all">See all</span>
            </div>
            <div className="songs-list">
              {artist.songs.map((song, index) => (
                <div key={song.id} className="song-item">
                  <div className="song-number">{index + 1}</div>
                  <div className="song-info">
                    <h3 className="song-title">{song.title}</h3>
                    <p className="song-album">Midnights • {song.year}</p>
                  </div>
                  <span className="song-duration">{song.duration}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'albums' && (
          <div className="albums-section">
            <div className="section-header">
              <h2 className="section-title">Albums</h2>
              <span className="see-all">See all</span>
            </div>
            <div className="albums-grid">
              {artist.albums.map(album => (
                <div key={album.id} className="album-card">
                  <div className="album-image-container">
                    <img src={album.imageUrl} alt={album.title} className="album-cover" />
                    <button className="album-play-btn">▶</button>
                  </div>
                  <div className="album-info">
                    <h3 className="album-title">{album.title}</h3>
                    <p className="album-year">{album.year} • Album</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'awards' && (
          <div className="awards-section">
            <div className="section-header">
              <h2 className="section-title">Awards & Achievements</h2>
            </div>
            <div className="awards-list">
              {artist.awards.map((award, index) => (
                <div key={index} className="award-item">
                  <span className="award-icon">🏆</span>
                  <p className="award-text">{award}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistDetails;