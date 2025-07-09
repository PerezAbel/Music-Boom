import React, { useState, useEffect } from "react";

const defaultImages = [
  "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBsaXN0ZW5pbmclMjB0byUyMG11c2ljfGVufDB8fDB8fHww",
  "https://media.gq-magazine.co.uk/photos/6629390c665e4051c2738957/16:9/w_1920,h_1080,c_limit/Indie_albums_HP.jpg",

]; 

// const grammyTrailer =
//   "https://www.example.com/grammy-awards-trailer.mp4"; // Replace with the actual Grammy trailer URL

function ImageDisplay({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // const interval = setInterval(() => {
    //   setShowVideo((prev) => !prev); // Toggle between image and video
    // }, 5000); // Change every 5 seconds

    // return () => clearInterval(interval);
  }, [images]);

  return (
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
          height: "900px",
          objectFit: "cover",
          // opacity: showVideo ? 0 : 1,
          transition: "opacity 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Video */}
      {/* <video
        src={grammyTrailer}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "900px",
          objectFit: "cover",
          opacity: showVideo ? 1 : 0,
          transition: "opacity 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      /> */}
    </div>
  );
}

// Default prop to ensure 'images' is never undefined
ImageDisplay.defaultProps = {
  images: defaultImages,
};

export default ImageDisplay;
