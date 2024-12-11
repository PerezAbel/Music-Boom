import React, { useState } from 'react';
import '../css/Artists.css';
import SearchBar from './SearchBar'; // Import the SearchBar component
import Footer from './Footer';


function Artists({ artists = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredArtists = artists.filter((item) =>
    (item.Title && typeof item.Title === 'string' ? item.Title.toLowerCase() : '').includes(searchTerm.toLowerCase())
  );

  if (!filteredArtists.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Gmain">
      <SearchBar data={artists} onSearch={handleSearch} />
      <div className="Artists-container">
        {filteredArtists.map((item) => (
          <div className="Artists" key={item.id}>
            <div className="Artists-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
              <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
                ▶
              </button>
              <div className="Artists-overlay">
                <h5 className="Artists-title">{item.Title}</h5>
                <p className="Artists-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Artists;
