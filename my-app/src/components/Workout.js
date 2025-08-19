import React from 'react';    
import '../css/Music.css';  
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PopularRadio() { 
  const navigate = useNavigate();
  
  // Define your categories with artists data
  const categories = [
    {
      title: 'Recomended Genres for you',
      artists: [
        {
          title: 'Chris Brown',
          imageUrl: 'https://s1.ticketm.net/dam/a/c02/93faea5e-ee33-411f-a8e6-6df0bb884c02_RETINA_PORTRAIT_3_2.jpg',
          details: 'R&B superstar with multiple Grammy awards'
        },
        {
          title: 'Kendrick Lamar',
          imageUrl: "https://images6.alphacoders.com/909/909094.jpg",
          details: 'Pulitzer Prize-winning rap artist and lyricist'
        },
        {
          title: 'Ariana Grande',
          imageUrl: 'https://i.pinimg.com/236x/0e/dc/58/0edc58bdb4ab0a333ebd396550c75a32.jpg',
          details: 'Pop sensation with a four-octave vocal range'
        },
        {
          title: 'Coldplay',
          imageUrl: 'https://artist99.cdn107.com/f7d/f7df8504d3756b4052c381941d684a51_xl.jpg',
          details: 'British rock band known for anthemic hits'
        },
        {
          title: 'The Weeknd',
          imageUrl: 'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
          details: 'Canadian singer blending R&B and pop with dark themes'
        },
        {
          title: 'Future',
          imageUrl: 'https://static.standard.co.uk/2024/05/08/11/59/Future_3vqmbcm4.jpeg?width=1200&auto=webp&quality=75',
          details: 'Influential trap artist and prolific hitmaker'
        }
      ]
    },
    {
      title: 'Podcasts for you ',
      artists: [
        {
          title: 'Drake',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2025/01/Drake-2019-red-carpet-billboard-pro-1260.jpg',
          details: 'Chart-topping rap superstar'
        },
        {
          title: 'Travis Scott',
          imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/211212152053-travis-scott-cacti-seltzer-discontinued.jpg',
          details: 'Astroworld architect'
        },
        {
          title: 'J. Cole',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvNnfnOFzqbbN1UcaHgzw3hYrxH84brmbRw&s',
          details: 'Conscious rap heavyweight'
        },
         {
          title: 'Travis Scott',
          imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/211212152053-travis-scott-cacti-seltzer-discontinued.jpg',
          details: 'Astroworld architect'
        },
        {
          title: 'J. Cole',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvNnfnOFzqbbN1UcaHgzw3hYrxH84brmbRw&s',
          details: 'Conscious rap heavyweight'
        }, 
          {
          title: 'Travis Scott',
          imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/211212152053-travis-scott-cacti-seltzer-discontinued.jpg',
          details: 'Astroworld architect'
        }
      ]
    }
  ];

  const scrollLeft = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Check if categories exists before mapping
  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Gmain">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 style={{ textAlign: 'left', color: '#FFFFFF' }}>{category.title}</h2>
          <div className="scroll-wrapper">
            <div id={`artist-container-${index}`} className="card-container">
              {category.artists.map((artist, artistIndex) => (
                <div key={artistIndex} className="artist-card">
                  <div className="artist-image-container">
                    <span className="groovora-tag">
                      <FaMusic style={{ marginRight: 4 }} />
                      Groovora
                    </span>
                    <img 
                      src={artist.imageUrl} 
                      className="artist-image" 
                      alt={artist.title} 
                    />
                    <button 
                      className="play-button" 
                      onClick={() => console.log(`Playing ${artist.title}`)}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="artist-details">
                    <h5 className="artist-title">{artist.title}</h5>
                    <p className="artist-info">{artist.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft(`artist-container-${index}`)}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="scroll-button right" 
              onClick={() => scrollRight(`artist-container-${index}`)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularRadio;