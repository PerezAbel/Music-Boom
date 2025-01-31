import React, { useState, useEffect } from 'react';

const defaultImages = [
  'https://cdn.britannica.com/65/257465-050-7891B2A8/Rapper-Cardi-B-at-2019-Met-gala.jpg',
  'https://d.newsweek.com/en/full/2344469/2024-grammys-jay-z.jpg?w=1200&f=75d4c279df49e11c749e1f0b9753e2fd',
  'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/JBF5NPFZ6JFY3OVXUMGNOKVAI4.jpg'
];   

// const defaultOverlayText = [
//   "Delicious Meals Await You",
//   "Experience Fine Dining Like Never Before",
//   "Convenient and Quick Food Delivery"
// ];


function ImageDisplay({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return; // Avoid setting interval if no images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="slider-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            display: index === currentImageIndex ? 'block' : 'none',
            width: '100%',
            height: '900px', 
            objectFit: 'cover',
            // filter: 'blur(8px)', // Apply blur effect
          }}
        />
      ))}
      {/* Overlay content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',    
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 2,
        }}
      >
        {/* <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Foodie Paradise</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          Discover delicious meals and unforgettable dining experiences.
        </p> */}
        {/* <button
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: '#228B22',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Explore Now!')}
        >
          Explore Now                   
        </button> */}
      </div>
    </div>
  );
}

// Default prop to ensure 'images' is never undefined
ImageDisplay.defaultProps = {
  images: defaultImages,
};

export default ImageDisplay;
