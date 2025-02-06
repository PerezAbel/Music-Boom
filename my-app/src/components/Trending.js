import React, { useState, useEffect } from 'react';  
import SearchBar from './SearchBar';


function Trending() {  

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
          'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2025-02/250202-beyonce-ew-1150p-2af9d3.jpg',  
          'https://www.allegiantstadium.com/assets/img/Credit-Anna-Lee-20240712-0568-8aa21114aa.jpg', 
          'https://www.billboard.com/wp-content/uploads/2024/06/GloRilla-and-Megan-Thee-Stallion-award-bet-awards-show-2024-billboard-1548.jpg'
        
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
      
  return (   

<div className="Gmain">
      <SearchBar/>
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
  </div> 
  </div>
  
  );
}

export default Trending;
