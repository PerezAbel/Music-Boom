import React from 'react';


function Workout() {
  const Albums = [
    {
      title: '',
      text: 'Arist',
      imageUrl: 'https://images.pexels.com/photos/1557251/pexels-photo-1557251.jpeg?cs=srgb&dl=pexels-yungsaac-1557251.jpg&fm=jpg',
      link: ''
    },
    {
      title: 'Card 2',
      text: 'Some quick example text for Card 2.',
      imageUrl: 'https://i.ytimg.com/vi/Zb8Kjr_MDI0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNXW53CagtQR7Fhxsn2FcDwzzC3Q',
      link: '#'
    },
    {
      title: 'Card 3',
      text: 'Some quick example text for Card 3.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzwHpfYjUwgyZablAXTQKONGWA0TFWvu4yw&s',
      link: '#'
    },
    {
      title: 'Card 4',
      text: 'Some quick example text for Card 4.',
      imageUrl: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88',
      link: '#'
    },
    {
      title: 'Card 5',
      text: 'Some quick example text for Card 5.',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/121/590/416/anime-girlfriend-beta-walking-music-road-hd-wallpaper-preview.jpg',
      link: '#'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'left' ,color:'#FFFFFF'}}>Tunez</h2>
      <div className="card-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>       
        {Albums.map((albums, index) => (    
          <div key={index} className="card" style={{ width: '100rem' }}>
            <img src={albums.imageUrl} className="card-img-top" alt={albums.title} />    
            <div className="card-body">
              <h5 className="card-title">{albums.title}</h5>
              <p className="card-text">{albums.text}</p>
              <a href={albums.link} >Explore</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workout;  
