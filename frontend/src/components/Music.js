import React from 'react';    
import '../css/Music.css';  
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Music() { 
  const navigate = useNavigate();
  
  // Define your categories with artists data
  const categories = [
    {
      title: 'Popular Artists ',
      artists: [
        {
          id: 1,
          title: 'Chris Brown',
          imageUrl: 'https://s1.ticketm.net/dam/a/c02/93faea5e-ee33-411f-a8e6-6df0bb884c02_RETINA_PORTRAIT_3_2.jpg',
          details: 'R&B superstar with multiple Grammy awards'
        },
        {
          id: 2,
          title: 'Kendrick Lamar',
          imageUrl: "https://images6.alphacoders.com/909/909094.jpg",
          details: 'Pulitzer Prize-winning rap artist and lyricist'
        },
        {
          id: 3,
          title: 'Ariana Grande',
          imageUrl: 'https://i.pinimg.com/236x/0e/dc/58/0edc58bdb4ab0a333ebd396550c75a32.jpg',
          details: 'Pop sensation with a four-octave vocal range'
        },
        {
          id: 4,
          title: 'Coldplay',
          imageUrl: 'https://artist99.cdn107.com/f7d/f7df8504d3756b4052c381941d684a51_xl.jpg',
          details: 'British rock band known for anthemic hits'
        },
        {
          id: 5,
          title: 'The Weeknd',
          imageUrl: 'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
          details: 'Canadian singer blending R&B and pop with dark themes'
        },
        {
          id: 6,
          title: 'Future',
          imageUrl: 'https://static.standard.co.uk/2024/05/08/11/59/Future_3vqmbcm4.jpeg?width=1200&auto=webp&quality=75',
          details: 'Influential trap artist and prolific hitmaker'
        }
      ]
    },
    {
      title: 'Rising Artists',
      artists: [
        {
          id: 7,
          title: 'Dooechi',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/doechii-at-the-variety-hitmakers-brunch-held-at-nya-west-on-news-photo-1744655983.pjpeg?crop=0.612xw:0.918xh;0.211xw,0.0816xh&resize=640:*',
          details: 'Chart-topping rap superstar'
        },
        {
          id: 8,
          title: 'Myles Smith',
          imageUrl: 'https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2024/07/Myles-Smith-1.png',
          details: 'Astroworld architect'
        },
        {
          id: 9,
          title: 'ceechynaa',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSfomsCxkYWxIh_MD4q7GuJltvZNwU0P9EA&s',
          details: 'Conscious rap heavyweight'
        },
        {
          id: 10,
          title: 'Mitch Uta',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2x22KIpvD1iD3Noeks76BSzNphqQg02Nkw&s',
          details: 'Astroworld architect'
        },
        {
          id: 11,
          title: 'Lola Young',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiHG_-jVlVBE1gzR2HCoJETfNLV25o_lXew&s',
          details: 'Conscious rap heavyweight'
        }, 
        {
          id: 12,
          title: 'Fuckers',
          imageUrl: 'https://www.nme.com/wp-content/uploads/2025/04/NMEAR_NME-FCUKERS-THE-COVER-2024-5-CREDIT-MARISA-BAZAN@2000x1270.jpg',
          details: 'Astroworld architect'
        }
      ]
    }
  ];

  const scrollLeft = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to navigate to artist details page
  const navigateToArtistDetails = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  // Check if categories exists before mapping
  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Gmain">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 style={{color:'white'}}className="category-title">{category.title}</h2>
          <div className="scroll-wrapper">
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft(`artist-container-${index}`)}
            >
              <FaChevronLeft />
            </button>
            <div id={`artist-container-${index}`} className="card-container">
              {category.artists.map((artist) => (
                <div 
                  key={artist.id} 
                  className="artist-card"
                  onClick={() => navigateToArtistDetails(artist.id)}
                >
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
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent navigation when clicking play
                        console.log(`Playing ${artist.title}`);
                      }}
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

export default Music;