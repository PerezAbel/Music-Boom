import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Podcasts.css';
import SearchBar from './NavBar'; 
import Footer from './Footer';      

function Podcasts() {    
  const navigate = useNavigate();
  
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
  
  const sliderImages = [
    'https://www.hollywoodreporter.com/wp-content/uploads/2022/09/29bob_podcast-main-H-2022.jpg', 
    'https://hips.hearstapps.com/hmg-prod/images/the-black-tapes-best-horror-podcasts-1658769817.jpeg',
    'https://variety.com/wp-content/uploads/2022/12/Best-New-Podcasts-of-2022-Variety.jpg?w=1000&h=562&crop=1',
  ];
  
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSliderIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);
  
  const podcasts = [
    { id: "1", Title: "Darknet Diaries", imageurl: "https://dp6mhagng1yw3.cloudfront.net/entries/12th/b1952c0e-a099-4446-be70-bdae452e25a9.jpg" },
    { id: "2", Title: "The Joe Rogan Experience", imageurl: "https://i.scdn.co/image/ab6765630000ba8ae53253eeb75fc4f0176dccc8" },  
    { id: "3", Title: "Smartless", imageurl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/4f/e6/a4/4fe6a437-d995-4cb3-8ae1-6a1964c784e6/mza_3757738654304222645.jpg/1200x1200bf.webp" },   
    { id: "4", Title: "You Didn't See Nothin", imageurl: "https://i.scdn.co/image/ab6765630000ba8a17a0f0439f595255006c84c1" },    
    { id: "5", Title: "Hard Fork", imageurl: "https://i.scdn.co/image/ab6765630000ba8a37a4c8e5a5f95c3a81f36eb7" },    
    { id: "6", Title: "Sold a Story", imageurl: "https://lh4.googleusercontent.com/proxy/vo-p8sRd7SjlL-tm29CyVRv24nquYKOMSbPG6SHxBYNAZ7KnJ_fhBChuUp71533BCc1rWTrTkMwuZ8WbL4DVcxQTdhmRWlkqV_c" },   
    { id: "7", Title: "Serial", imageurl: "https://granitebaytoday.org/wp-content/uploads/2015/02/logo2-900x506.jpg" },    
    { id: "8", Title: "Talking Sopranos", imageurl: "https://i.scdn.co/image/ab6765630000ba8a01faa5363f7406bd60aaad42" },    
    { id: "9", Title: "Diary of a CEO", imageurl: "https://megaphone.imgix.net/podcasts/0d8f9f54-48cd-11ee-ab9b-c7fa92fe264e/image/doac-yt-logo.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" },
    { id: "10", Title: "This is Dating", imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jZlL22hd1Fq_PxlULe-iIDNFNrw4wlQXRA&s" },  
    { id: "11", Title: "Bobby Nightmare", imageurl: "https://ntvb.tmsimg.com/assets/p28411836_v_h10_ae.jpg?w=960&h=540" },   
    { id: "12", Title: "Call Her Daddy", imageurl: "https://m.media-amazon.com/images/M/MV5BZDQyYjljNDktMjAyMi00MmZiLTgxNmYtZjBlYzYwNDJkZTNkXkEyXkFqcGc@._V1_QL75_UX500_CR0,109,500,281_.jpg" },    
    { id: "13", Title: "Crime Junkie", imageurl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8c/35/04/8c350430-2fbf-98d0-0a25-00b76550ffeb/mza_13445204151221888086.jpg/1200x1200bf-60.jpg" },    
    { id: "14", Title: "Morbid", imageurl: "https://content.production.cdn.art19.com/images/58/4e/4c/d8/584e4cd8-ffd2-46e0-83c6-72ad91a4b84a/a4d289289f109b0c765e5848a7263a6cfe11bd78b244aa5ae75546e80b0961e082b632241a515eda402f44c79e09b0cf6083dcd6be4390051c38ba01a2b9b80e.jpeg" },
    { id: "15", Title: "The New Yorker", imageurl: "https://f.prxu.org/5770/images/91cea5bd-b0d3-459e-8aab-ffe6188ad6a0/In_the_Dark_S2_3000x3000-TNY_1__2_.png" }
  ];
  
  const [searchTerm, setSearchTerm] = useState('');              

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPodcasts = podcasts.filter((item) =>
    item.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );  

  const handlePodcastClick = (podcastId) => {
    navigate(`/podcast/${podcastId}`);
  };

  return (    
    <div className="Gmain">
      {/* Podcast Slider Container */}
      <div className="podcast-slider-container">
        {sliderImages.map((image, index) => (
          <div 
            key={index}
            className={`slider-slide ${index === currentSliderIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="slider-overlay">
              <h2>Discover Amazing Podcasts</h2>
              <p>Listen to the best content from around the world</p>
            </div>
          </div>
        ))}
        
        <div className="slider-indicators">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`slider-indicator ${index === currentSliderIndex ? 'active' : ''}`}
              onClick={() => setCurrentSliderIndex(index)}
            />
          ))}
        </div>
        
        <button 
          className="slider-nav slider-prev"
          onClick={() => setCurrentSliderIndex(
            currentSliderIndex === 0 ? sliderImages.length - 1 : currentSliderIndex - 1
          )}
        >
          &#10094;
        </button>
        
        <button 
          className="slider-nav slider-next"
          onClick={() => setCurrentSliderIndex(
            currentSliderIndex === sliderImages.length - 1 ? 0 : currentSliderIndex + 1
          )}
        >
          &#10095;
        </button>
      </div>
      
      <div className="Podcasts-container">
        {filteredPodcasts.map((item) => (
          <div 
            className="Podcasts" 
            key={item.id}
            onClick={() => handlePodcastClick(item.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="Podcasts-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
              <button 
                className="play-button" 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking play button
                  console.log(`Play ${item.Title}`);
                }}
              >
                ▶
              </button>
              <div className="Podcasts-overlay">
                <h5 className="Podcasts-title">{item.Title}</h5>
              </div>
            </div>
          </div> 
        ))}   
      </div>            
    </div>  
  );
}

export default Podcasts;