import React, { useState, useEffect } from "react";

const defaultImages = [
  "https://i8.amplience.net/i/naras/2025_grammys_nominations_67_grammy_awards_Nom-Watch-Hero_1644x925%202",
];

const grammyTrailer =
  "https://www.example.com/grammy-awards-trailer.mp4"; // Replace with the actual Grammy trailer URL

function ImageDisplay({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setShowVideo((prev) => !prev); // Toggle between image and video
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
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
          opacity: showVideo ? 0 : 1,
          transition: "opacity 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Video */}
      <video
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
      />
    </div>
  );
}

// Default prop to ensure 'images' is never undefined
ImageDisplay.defaultProps = {
  images: defaultImages,
};

export default ImageDisplay;
