import React from 'react';


function Albums() {
  const cardsData = [
    {
      title: 'Lfystyl',
      text: 'Yeat',
      imageUrl: 'https://media.pitchfork.com/photos/65dcad7c49d75ec68d09c8fa/1:1/w_450%2Cc_limit/yeat-2093.jpg',
      link: ''
    },
    {
      title: 'Country',
      text: 'Beyonce',
      imageUrl: 'https://assets.teenvogue.com/photos/65f9caf030fe5f7e3b08d294/16:9/w_2560%2Cc_limit/GJC5ZPXXIAAPfLA.jpeg',
      link: '#'
    },
    {
      title: 'Heinz',
      text: 'Rema.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Rema_-_Heis.png',
      link: '#'
    },
    {
      title: 'Blue lips',
      text: 'ScHoolboy Q',
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b273454a4fb74aa36c7cb57b9153',
      link: '#'
    },
    {
      title: 'Born in the Wild',
      text: 'Tems',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/87/Tems_-_Born_in_the_Wild_album_cover.jpg',
      link: '#'
    }, 
    {
      title: 'We dont trust you',
      text: 'Future, Metro',
      imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a46b07c291e6dfdee13b3ee8',
      link: '#'
    }
  ];

 
  return (
    <div>
      <h2 style={{ textAlign: 'left', color:'#FFFFFF' }}>Popular Albums</h2>
      <div className="card-container">   
        {cardsData.map((card, index) => (    
          <div key={index} className="card">
            <img src={card.imageUrl} className="card-img"  />    
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

export default Albums;  
