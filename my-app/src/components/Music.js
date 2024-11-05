import React from 'react';  
import '../css/Music.css'

function Music() {
  const cardsData = [
    {
      title: 'ChrisBrown',
      text: 'Arist',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8yQFNZ1i6DF8e68OKN3Ggx4SHsATve2nr-6OSAS0zDxnH8N5-k-kGY8vuC81_aCNMCM&usqp=CAU',
      link: ''
    },
    {
      title: 'Kendrick Lamar',
      text: 'Artist',
      imageUrl: 'https://yt3.googleusercontent.com/V4FqOieQ9y9dnErXPUZNWl1hyLafxIK7F55n5M8LVhPBmEou8kAbNuMlUZx23DoJHvH1sWG56No=s900-c-k-c0x00ffffff-no-rj',
      link: ''
    },
    {
      title: 'Ariana Grande',
      text: 'Artist.',
      imageUrl: 'https://i.pinimg.com/236x/0e/dc/58/0edc58bdb4ab0a333ebd396550c75a32.jpg',
      link: '#'
    },
    {
      title: 'ColdPlay',
      text: 'Artist',
      imageUrl: 'https://dynamicmedia.livenationinternational.com/t/u/f/09056261-24d3-4099-93b1-df792e152dab.jpg',
      link: '#'
    },
    {
      title: 'The weekend',
      text: 'Artist',
      imageUrl: 'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
      link: '#'
    }, 
    {
      title: 'Future',
      text: 'Artist',
      imageUrl: 'https://static.standard.co.uk/2024/05/08/11/59/Future_3vqmbcm4.jpeg?width=1200&auto=webp&quality=75',
      link: '#'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'left'  ,color:'#FFFFFF'}}>Featured Artists</h2>
      <div className="card-container" style={{ display: 'flex',  flexWrap: 'wrap' }}>       
        {cardsData.map((card, index) => (    
          <div key={index} className="card" >
            <img src={card.imageUrl} className="card-img-top" alt={card.title} />    
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href={card.link} >Explore</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
