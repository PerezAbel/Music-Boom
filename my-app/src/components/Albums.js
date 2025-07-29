import React, { useState } from 'react';
import '../css/Albums.css';
import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from './Footer';

function Albums() {
  // Categories of albums
  const albumCategories = [
    {
      title: 'New Releases',
      albums: [
        {
          id: "1",
          title: "Midnights",
          artist: "Taylor Swift",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
          year: "2022"
        },
        {
          id: "2",
          title: "Renaissance",
          artist: "Beyoncé",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dc/Beyonc%C3%A9_-_Renaissance.png",
          year: "2022"
        },
        {
          id: "3",
          title: "Mr. Morale & The Big Steppers",
          artist: "Kendrick Lamar",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png",
          year: "2022"
        },
        {
          id: "4",
          title: "Un Verano Sin Ti",
          artist: "Bad Bunny",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Bad_Bunny_-_Un_Verano_Sin_Ti.png",
          year: "2022"
        },
        {
          id: "5",
          title: "Harry's House",
          artist: "Harry Styles",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Styles_-_Harry%27s_House.png",
          year: "2022"
        }
      ]
    },
    {
      title: 'Classic Albums',
      albums: [
        {
          id: "6",
          title: "Thriller",
          artist: "Michael Jackson",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
          year: "1982"
        },
        {
          id: "7",
          title: "The Dark Side of the Moon",
          artist: "Pink Floyd",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
          year: "1973"
        },
        {
          id: "8",
          title: "Back in Black",
          artist: "AC/DC",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6c/ACDC_Back_in_Black.png",
          year: "1980"
        },
        {
          id: "9",
          title: "The Bodyguard",
          artist: "Whitney Houston",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/The_Bodyguard_-_Whitney_Houston.png",
          year: "1992"
        },
        {
          id: "10",
          title: "Rumours",
          artist: "Fleetwood Mac",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.png",
          year: "1977"
        }
      ]
    },
    {
      title: 'International Hits',
      albums: [
        {
          id: "11",
          title: "Map of the Soul: 7",
          artist: "BTS",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Map_of_the_Soul_7.png",
          year: "2020"
        },
        {
          id: "12",
          title: "Made in Lagos",
          artist: "Wizkid",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/Wizkid_-_Made_in_Lagos.png",
          year: "2020"
        },
        {
          id: "13",
          title: "El Dorado",
          artist: "Shakira",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6c/Shakira_-_El_Dorado.png",
          year: "2017"
        },
        {
          id: "14",
          title: "Aya",
          artist: "Aya Nakamura",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5f/Aya_Nakamura_-_AYA.png",
          year: "2020"
        },
        {
          id: "15",
          title: "Supermarket",
          artist: "Sauti Sol",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3f/Sauti_Sol_-_Supermarket.png",
          year: "2019"
        }
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const scrollLeft = (containerId) => {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: 200, behavior: 'smooth' });
  };

  // Filter all albums if search is active
  if (searchTerm) {
    const allAlbums = albumCategories.flatMap(category => category.albums);
    const filteredAlbums = allAlbums.filter(album =>
      album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="Albums-main">
        <div className="Albums-container">
          {filteredAlbums.map((album) => (
            <div className="Album" key={album.id}>
              <div className="Album-img" style={{ backgroundImage: `url(${album.imageUrl})` }}>
                <button className="play-button" onClick={() => console.log(`Play ${album.title}`)}>
                  ▶
                </button>
                <div className="Album-overlay">
                  <h5 className="Album-title">{album.title}</h5>
                  <p className="Album-artist">{album.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="Albums-main">
      {albumCategories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 style={{ textAlign: 'left', color: '#FFFFFF' }}>{category.title}</h2>
          <div className="scroll-wrapper">
            <div id={`album-container-${index}`} className="card-container">
              {category.albums.map((album) => (
                <div key={album.id} className="card">
                  <span className="groovora-tag">
                    <FaMusic style={{ marginRight: 4 }} />
                    {album.year}
                  </span>
                  <img src={album.imageUrl} className="card-img" alt={album.title} />
                  <div className="card-title">{album.title}</div>
                  <div className="card-details">{album.artist}</div>
                  <button 
                    className="play-button" 
                    onClick={() => console.log(`Playing ${album.title}`)}
                  >
                    ▶
                  </button>
                </div>
              ))}
            </div>
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft(`album-container-${index}`)}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="scroll-button right" 
              onClick={() => scrollRight(`album-container-${index}`)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Albums;