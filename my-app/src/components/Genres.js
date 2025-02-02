import React, { useState, useEffect } from 'react';
import '../css/Genres.css';  
import SearchBar from './SearchBar'; // Import the SearchBar component
import Footer from './Footer';

function Genres({ genres = [] }) {  
  
  
   const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
      maxWidth: '100%',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const contentStyle = {
      flex: '1 1 60%',
      padding: '20px',
  };
  
  const heading1Style = {
      fontSize: '2.5em',
      marginBottom: '20px',
      color: '#333',
  };
  
  const heading2Style = {
      fontSize: '1.8em',
      marginBottom: '10px',
      color: '#333',
  };
  
  const paragraphStyle = {
      fontSize: '1.1em',
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '20px',
  };
  
  const imageContainerStyle = {
      flex: '1 1 40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
  };
  
  const imageStyle = {
      maxWidth: '100%',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };       
  
    const images = [
          'https://www.billboard.com/wp-content/uploads/media/travis-scott-acl-live-2018-billboard-1548.jpg',
        
        ];
           
  
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }, 3000); // Change slide every 3 seconds (adjust as needed)
      
          return () => clearInterval(interval);
        }, [images.length]);
      
    

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

      <div className="slider-container">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index + 1}`}
        style={{
          display: index === currentImageIndex ? 'block' : 'none',
          width: '100%', // Change width here (e.g., 80%)
          height: '800px', // Change height here (e.g., 300px)
          objectFit: 'cover', // Maintain the aspect ratio of the image    
          marginBottom: '30px'
        }}
      />
    ))}


   
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
      </div>  
      <Footer/>
    </div>
  );
}

export default Genres;




