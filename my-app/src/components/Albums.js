import React from 'react';


function Albums() {
  const Albums = [
    {
      title: '',
      text: 'Arist',
      imageUrl: 'https://media.pitchfork.com/photos/65dcad7c49d75ec68d09c8fa/1:1/w_450%2Cc_limit/yeat-2093.jpg',
      link: ''
    },
    {
      title: 'Card 2',
      text: 'Some quick example text for Card 2.',
      imageUrl: 'https://assets.teenvogue.com/photos/65f9caf030fe5f7e3b08d294/16:9/w_2560%2Cc_limit/GJC5ZPXXIAAPfLA.jpeg',
      link: '#'
    },
    {
      title: 'Card 3',
      text: 'Some quick example text for Card 3.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Rema_-_Heis.png',
      link: '#'
    },
    {
      title: 'Card 4',
      text: 'Some quick example text for Card 4.',
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b273454a4fb74aa36c7cb57b9153',
      link: '#'
    },
    {
      title: 'Card 5',
      text: 'Some quick example text for Card 5.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/87/Tems_-_Born_in_the_Wild_album_cover.jpg',
      link: '#'
    }, 
    {
      title: 'Card 5',
      text: 'Some quick example text for Card 5.',
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a46b07c291e6dfdee13b3ee8',
      link: '#'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'left', color:'#FFFFFF' }}>Popular Albums</h2>
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

export default Albums;  