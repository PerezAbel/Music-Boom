import React from 'react';


function PopularRadio() {
  const Albums = [
    {
      title: '',
      text: 'Arist',
      imageUrl: 'https://granitebaytoday.org/wp-content/uploads/2015/02/logo2-900x506.jpg',
      link: ''
    },
    {
      title: 'Card 2',
      text: 'Some quick example text for Card 2.',
      imageUrl: 'https://i.scdn.co/image/ab6765630000ba8a01faa5363f7406bd60aaad42',
      link: '#'
    },
    {
      title: 'Card 3',
      text: 'Some quick example text for Card 3.',
      imageUrl: 'https://megaphone.imgix.net/podcasts/0d8f9f54-48cd-11ee-ab9b-c7fa92fe264e/image/doac-yt-logo.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress',
      link: '#'
    },
    {
      title: 'Card 4',
      text: 'Some quick example text for Card 4.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDQyYjljNDktMjAyMi00MmZiLTgxNmYtZjBlYzYwNDJkZTNkXkEyXkFqcGc@._V1_QL75_UX500_CR0,109,500,281_.jpg',
      link: '#'
    },
    {
      title: 'Card 5',
      text: 'Some quick example text for Card 5.',
      imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8c/35/04/8c350430-2fbf-98d0-0a25-00b76550ffeb/mza_13445204151221888086.jpg/1200x1200bf-60.jpg',
      link: '#'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'left', color:'#FFFFFF'}}>Podcasts</h2>
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

export default PopularRadio;  
