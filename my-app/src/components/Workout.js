import React from 'react';


function Workout() {
  const cardsData = [
    {
      title: 'Workout',
      text: '',
      imageUrl: 'https://images.pexels.com/photos/1557251/pexels-photo-1557251.jpeg?cs=srgb&dl=pexels-yungsaac-1557251.jpg&fm=jpg',
      link: ''
    },
    {
      title: 'Sleep',
      text: '',
      imageUrl: 'https://i.ytimg.com/vi/Zb8Kjr_MDI0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNXW53CagtQR7Fhxsn2FcDwzzC3Q',
      link: '#'
    },
    {
      title: 'Workout',
      text: '',
      imageUrl: 'https://advancedbodymetrics.com/wp-content/uploads/2024/02/best-5-day-workout-spli-for-muscle-and-fitness.jpg',
      link: '#'
    },
    {
      title: 'Nature',
      text: '',
      imageUrl: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88',
      link: '#'
    },
    {
      title: 'Outdorr Walks',
      text: '',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/121/590/416/anime-girlfriend-beta-walking-music-road-hd-wallpaper-preview.jpg',
      link: '#'
    }, 
    {
      title: 'Roadtrip',
      text: '',
      imageUrl: 'https://i.pinimg.com/originals/b4/8d/4c/b48d4c7166f4927b2a02cb9580962617.jpg',
      link: '#'
    }
  ];


  return (
    <div>
      <h2 style={{ textAlign: 'left', color:'#FFFFFF' }}>Popular Everday Tunez</h2>
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



export default Workout;  
