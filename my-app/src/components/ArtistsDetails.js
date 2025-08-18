import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import '../css/ArtistsDetails.css';

const ArtistDetails = ({ artistData }) => {
  const [activeTab, setActiveTab] = useState('songs');
  const { artistName } = useParams();
  // Sample artist data - in a real app this would come from props or API
  const artist = {
    id: "1",
    name: "Taylor Swift",
    imageUrl: "https://www.vinylchapters.com/wp-content/uploads/2022/10/tay1-750x420.jpg",
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
    ]           
  };      

  

  return (
    <div className="artist-detail-page">
      {/* Artist Header Section */}
      <div className="artist-header">
        <div className="artist-image-container">
          <img src={artist.imageUrl} alt={artist.name} className="artist-image" />
          <div className="artist-overlay"></div>
        </div>
        <div className="artist-info">
          <h1 className="artist-name">{artist.name}</h1>
          <p className="artist-genre">{artist.genre}</p>
          <div className="artist-meta">
            <span className="meta-item">{artist.activeYears}</span>
            <span className="meta-item">{artist.labels}</span>
          </div>
          <p className="artist-bio">{artist.bio}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-chips">
        <button 
          className={`nav-chip ${activeTab === 'songs' ? 'active' : ''}`}
          onClick={() => setActiveTab('songs')}
        >
          Songs
        </button>
        <button 
          className={`nav-chip ${activeTab === 'albums' ? 'active' : ''}`}
          onClick={() => setActiveTab('albums')}
        >
          Albums
        </button>
        <button 
          className={`nav-chip ${activeTab === 'awards' ? 'active' : ''}`}
          onClick={() => setActiveTab('awards')}
        >
          Awards
        </button>
      </div>

      {/* Content Sections */}
      <div className="content-section">
        {activeTab === 'songs' && (
          <div className="songs-section">
            <h2 className="section-title">Popular Songs</h2>
            <div className="songs-list">
              {artist.songs.map(song => (
                <div key={song.id} className="song-item">
                  <div className="song-info">
                    <h3 className="song-title">{song.title}</h3>
                    <p className="song-year">{song.year}</p>
                  </div>
                  <span className="song-duration">{song.duration}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'albums' && (
          <div className="albums-section">
            <h2 className="section-title">Discography</h2>
            <div className="albums-grid">
              {artist.albums.map(album => (
                <div key={album.id} className="album-card">
                  <img src={album.imageUrl} alt={album.title} className="album-cover" />
                  <div className="album-info">
                    <h3 className="album-title">{album.title}</h3>
                    <p className="album-year">{album.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'awards' && (
          <div className="awards-section">
            <h2 className="section-title">Awards & Achievements</h2>
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