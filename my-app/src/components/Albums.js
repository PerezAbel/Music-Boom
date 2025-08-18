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
          imageUrl: "https://www.vinylchapters.com/wp-content/uploads/2022/10/tay1-750x420.jpg",
          year: "2022"
        },
        {
          id: "2",
          title: "Renaissance",
          artist: "Beyoncé",
          imageUrl: "https://consequence.net/wp-content/uploads/2022/07/beyonce-renaissance-review.jpeg?quality=80&w=590&h=332&crop=1",
          year: "2022"
        },
        {
          id: "3",
          title: "Mr. Morale & The Big Steppers",
          artist: "Kendrick Lamar",
          imageUrl: "https://atwoodmagazine.com/wp-content/uploads/2022/05/Mr.-Morale-the-Big-Steppers-Kendrick-Lamar-%C2%A9-Renell-Medrano-1-1170x838.jpeg",
          year: "2022"
        },
        {
          id: "4",
          title: "Un Verano Sin Ti",
          artist: "Bad Bunny",
          imageUrl: "https://trend.usao.edu/wp-content/uploads/2023/01/Un-Verno-Sin-Ti-Bad-Bunny-Album.jpg",
          year: "2022"
        },
        {
          id: "5",
          title: "Harry's House",
          artist: "Harry Styles",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png",
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
          imageUrl: "https://m.media-amazon.com/images/M/MV5BNDZlYWI2MGQtZmQzMS00NDU4LTg2NjQtOTBjYjdhM2I2NWM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          year: "1980"
        },
        {
          id: "9",
          title: "The Bodyguard",
          artist: "Whitney Houston",
          imageUrl: "https://m.media-amazon.com/images/M/MV5BNTM4ZWNjZmItMmUxNy00Y2M2LTlhZmItMjc0NjQzZmNiOWY5XkEyXkFqcGc@._V1_.jpg",
          year: "1992"
        },
        {
          id: "10",
          title: "Rumours",
          artist: "Fleetwood Mac",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
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
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/BTS_-_Map_of_the_Soul_7.png",
          year: "2020"
        },
        {
          id: "12",
          title: "Made in Lagos",
          artist: "Wizkid",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c2/Wizkid_-_Made_in_Lagos.png",
          year: "2020"
        },
        {
          id: "13",
          title: "El Dorado",
          artist: "Shakira",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Shakira_El_Dorado_cover.png/250px-Shakira_El_Dorado_cover.png",
          year: "2017"
        },
        {
          id: "14",
          title: "Aya",
          artist: "Aya Nakamura",
          imageUrl: "https://cdn-images.dzcdn.net/images/cover/41fc3e7a3430f3a5e1c1780b57c3147f/0x1900-000000-80-0-0.jpg",
          year: "2020"
        },
        {
          id: "15",
          title: "Supermarket",
          artist: "Sauti Sol",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQATrYaC5ycs5_acq6ADJp24s_RW7QSsN9Lg&s",
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
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
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
            <div className="album-card" key={album.id}>
              <div className="album-image-container">
                <span className="groovora-tag">
                  <FaMusic style={{ marginRight: 4 }} />
                  {album.year}
                </span>
                <img 
                  src={album.imageUrl} 
                  className="album-image" 
                  alt={album.title} 
                />
                <button 
                  className="play-button" 
                  onClick={() => console.log(`Play ${album.title}`)}
                >
                  ▶
                </button>
              </div>
              <div className="album-details">
                <h5 className="album-title">{album.title}</h5>
                <p className="album-artist">{album.artist}</p>
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
                <div key={album.id} className="album-card">
                  <div className="album-image-container">
                    <span className="groovora-tag">
                      <FaMusic style={{ marginRight: 4 }} />
                      {album.year}
                    </span>
                    <img 
                      src={album.imageUrl} 
                      className="album-image" 
                      alt={album.title} 
                    />
                    <button 
                      className="play-button" 
                      onClick={() => console.log(`Playing ${album.title}`)}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="album-details">
                    <h5 className="album-title">{album.title}</h5>
                    <p className="album-artist">{album.artist}</p>
                  </div>
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