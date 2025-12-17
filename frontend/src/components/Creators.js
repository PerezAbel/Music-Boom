import React, { useState, useEffect } from "react";

const defaultImages = [
  "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBsaXN0ZW5pbmclMjB0byUyMG11c2ljfGVufDB8fDB8fHww",
];


function ImageDisplay({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    if (!images || images.length === 0) return;

   
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
