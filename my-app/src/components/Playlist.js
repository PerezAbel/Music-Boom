import React, { useState, useEffect } from "react";    
import '../css/Playlist.css';  
import SearchBar from './NavBar'; // Import the SearchBar component
import Footer from './Footer';

const defaultImages = [
  "https://dsd-guide.com/sites/default/files/images/blogs/Female-performer-songs-in-audio-recording-studioNomad_Souls.jpg",
  "https://cdn.prod.website-files.com/5fac161927bf86485ba43fd0/6470607db5ddc9c102ef4a14_How-to-Start-a-Podcast-(1).jpeg",
  "https://i.ytimg.com/vi/PohpFZZ-bMI/maxresdefault.jpg",
];

function ImageDisplay({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (   
    <div className="Playlist-page">  
    <SearchBar/>
       
      <div
        className="slider-container"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "800px",
        }}
      >
        {/* Image */}
        <img
          src={images[currentImageIndex]}
          alt="Grammy Awards"
          style={{
            width: "100%",
            height: "800px",
            objectFit: "cover",  
            marginBottom:'40px',
            transition: "opacity 2s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
          }}  
        />
      </div>  
{/* 
      <h1>START YOUR JOURNEY</h1> */}
      
      {/* Container with Two Cards */}
      <div
        className="Playlist-container"
        style={{
          display: "flex",
          justifyContent: "center",  
          gap: "20px",
          marginTop: '30px',
          marginBottom: "30px" ,
        }}
      >
        <div
          className="Playlist-card"
          style={{
            width: "700px",  
            height: "700px",  
            paiding: "10px",
            backgroundColor: "rgba(163, 158, 158, 0.58);",
            borderRadius: "10px",   
          
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}      
        >   
          <img 
            src="https://fresh50.com/wp-content/uploads/2020/08/images2638-5f43b96a21d0f.jpg" 
            alt="Record Label" 
            
          />
          <h3>Start Your Music Carrer</h3>
          <p>Get the best tools and tutorials to start composing today, explore opportunities to sign with top music labels & create a platform where ypu post music for others to listen and enjoy
          </p>  
          <button> Get Started </button>
        </div>
        <div
          className="Playlist"
          style={{
            width: "700px", 
            height: "700px",
            backgroundColor: "rgba(163, 158, 158, 0.58)",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <img 
            src="https://t4.ftcdn.net/jpg/06/35/14/93/360_F_635149317_T9CWM1j0wlxu49MASHflvkwXlIzZdh8a.jpg" 
            alt="Compose Music" 
            
          />
          <h3>Start Your Own Podcast</h3>
          <p>Get an Opportunity to create a platform where poeople share experieneces and inspire people and develop relationshps with hard-to-reach people.  </p>
        
          <button> Get Started </button>

        </div>
      </div>  
      <Footer/>
      </div>  

      
  ); 
  
}

// Default prop to ensure 'images' is never undefined
ImageDisplay.defaultProps = {
  images: defaultImages,
};   

export default ImageDisplay;   


