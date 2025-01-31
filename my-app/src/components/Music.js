import React from 'react';  
import '../css/Music.css';

function Music() {
  const cardsData = [
    {
      title: 'Chris Brown',
      text: 'Artist',
      imageUrl: 'https://s1.ticketm.net/dam/a/c02/93faea5e-ee33-411f-a8e6-6df0bb884c02_RETINA_PORTRAIT_3_2.jpg',
      link: ''
    },
    {
      title: 'Kendrick Lamar',
      text: 'Artist',
      imageUrl: "https://images6.alphacoders.com/909/909094.jpg"
    },
    {
      title: 'Ariana Grande',
      text: 'Artist',
      imageUrl: 'https://i.pinimg.com/236x/0e/dc/58/0edc58bdb4ab0a333ebd396550c75a32.jpg',
      link: '#'
    },
    {
      title: 'Coldplay',
      text: 'Artist',
      imageUrl: 'https://artist99.cdn107.com/f7d/f7df8504d3756b4052c381941d684a51_xl.jpg',
      link: '#'
    },
    {
      title: 'The Weeknd',
      text: 'Artist',
      imageUrl: 'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
      link: '#'
    }, 
    {
      title: 'Future',
      text: 'Artist',
      imageUrl: 'https://static.standard.co.uk/2024/05/08/11/59/Future_3vqmbcm4.jpeg?width=1200&auto=webp&quality=75',
      link: '#'
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'left', color:'#FFFFFF' }}>Featured Artists</h2>
      <div className="card-container">   
        {cardsData.map((card, index) => (    
          <div key={index} className="card">
            <img src={card.imageUrl} className="card-img" alt={card.title} />    
            <div className="card-title">{card.title}</div> {/* Artist Name */}
            <button className="play-button" onClick={() => console.log()}>
                ▶
            </button>         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
