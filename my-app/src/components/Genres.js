import React, { useState } from 'react';
import '../css/Genres.css';  
import SearchBar from './SearchBar'; // Import the SearchBar component
import Footer from './Footer';

function Genres({ genres = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Update the search term state
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter items based on searchTerm
  const filteredGenres = genres.filter((item) =>
    (item.Title && typeof item.Title === 'string' ? item.Title.toLowerCase() : '').includes(searchTerm.toLowerCase())
  );

  // Show loading message if genres array is empty
  if (!filteredGenres.length) {
    return <div>Loading...</div>;
  }

  return (      
    <div className='Gmain'>      
      {/* SearchBar Component */}
      <SearchBar data={genres} onSearch={handleSearch} />
   
      <div className='Genres-container'>     
        {filteredGenres.map((item) => (     
          <div className="Genres" key={item.id}> {/* Ensure the key is unique, using item.id */}
            <div className="Genres-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
            <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
                ▶
              </button>
              <div className="Genres-overlay">  
                <h5 className="Genres-title">{item.Title}</h5>
                <p className="Genres-text">{item.text}</p> {/* Correct reference */}
              </div>
            </div>
          </div>  
        ))}
      </div>    
      <Footer/>
    </div>
  );
}

export default Genres;




