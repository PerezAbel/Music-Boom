import React from 'react';  
import '../css/Music.css'; 

import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Music() {
  const cardsData = [
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
    },
  ];

  const scrollLeft = () => {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="music-section">
      <h2 style={{ textAlign: 'left', color:'#FFFFFF' }}>Featured Artists</h2>
      <div className="scroll-wrapper">
        <div className="card-container">   
          {cardsData.map((card, index) => (    
            <div key={index} className="card">
              <span className="groovora-tag">
                <FaMusic style={{ marginRight: 4 }} />
                Groovora
              </span>
              <img src={card.imageUrl} className="card-img" alt={card.title} />    
              <div className="card-title">{card.title}</div>
              <div className="card-details">{card.details}</div>
              <button className="play-button" onClick={() => console.log(`Playing ${card.title}`)}>
                ▶
              </button>         
            </div>
          ))}
        </div>
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <button className="scroll-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Music;   