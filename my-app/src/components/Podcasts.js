import React, { useState } from 'react';
import '../css/Podcasts.css';
import SearchBar from './SearchBar'; // Import the SearchBar component
import Footer from './Footer';

function Podcasts({ podcasts = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Update the search term state
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter items based on searchTerm
  const filteredPodcasts = podcasts.filter((item) =>
    (item.Title && typeof item.Title === 'string' ? item.Title.toLowerCase() : '').includes(searchTerm.toLowerCase())
  );

  // Show loading message if Podcasts array is empty
  if (!filteredPodcasts.length) { // Corrected variable name
    return <div>Loading...</div>;
  }

  return (
    <div className="Gmain">
      {/* SearchBar Component */}
      <SearchBar data={podcasts} onSearch={handleSearch} />

      <div className="Podcasts-container">
        {filteredPodcasts.map((item) => (
          <div className="Podcasts" key={item.id}> {/* Ensure the key is unique, using item.id */}
            <div className="Podcasts-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
            <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
                ▶
              </button>
              <div className="Podcasts-overlay">
                <h5 className="Podcasts-title">{item.Title}</h5>
                <p className="Podcasts-text">{item.text}</p> {/* Correct reference */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Podcasts;
