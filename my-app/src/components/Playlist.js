import React, { useState, useEffect } from "react";    
import '../css/Playlist.css';

const defaultImages = [
  "https://dsd-guide.com/sites/default/files/images/blogs/Female-performer-songs-in-audio-recording-studioNomad_Souls.jpg",
  "https://cdn.prod.website-files.com/5fac161927bf86485ba43fd0/6470607db5ddc9c102ef4a14_How-to-Start-a-Podcast-(1).jpeg",
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
   
      <div
        className="slider-container"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "900px",
        }}
      >
        {/* Image */}
        <img
          src={images[currentImageIndex]}
          alt="Grammy Awards"
          style={{
            width: "100%",
            height: "900px",
            objectFit: "cover",
            transition: "opacity 2s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
          }}  
        />
      </div>
      
      {/* Container with Two Cards */}
      <div
        className="Playlist-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          className="Playlist"
          style={{
            width: "300px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}      
        >   
          <img 
            src="https://fresh50.com/wp-content/uploads/2020/08/images2638-5f43b96a21d0f.jpg" 
            alt="Record Label" 
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} 
          />
          <h3>Join a Record Label</h3>
          <p>Explore opportunities to sign with top music labels.</p>
        </div>
        <div
          className="Playlist"
          style={{
            width: "300px",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <img 
            src="https://t4.ftcdn.net/jpg/06/35/14/93/360_F_635149317_T9CWM1j0wlxu49MASHflvkwXlIzZdh8a.jpg" 
            alt="Compose Music" 
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} 
          />
          <h3>Compose Your Own Music</h3>
          <p>Get the best tools and tutorials to start composing today.</p>
        </div>
      </div>
      </div>
  );
}

// Default prop to ensure 'images' is never undefined
ImageDisplay.defaultProps = {
  images: defaultImages,
};   

export default ImageDisplay;
