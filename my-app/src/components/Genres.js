import React, { useState } from 'react';
import '../css/Genres.css';  
import SideNav from "../components/SideNav"; // adjust the path

import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from './Footer';

function Genres() {
  // Categories of genres
  const genreCategories = [
    {
      title: 'Popular Genres',
      genres: [
        {
          id: "1",
          Title: "HipHop",
          imageurl: "https://images6.alphacoders.com/909/909094.jpg",
          description: "The culture and sound of urban expression"
        },
        {
          id: "2",
          Title: "R&B",
          imageurl: "https://i.pinimg.com/originals/fe/0b/bb/fe0bbbfa8157c7c96e59d0a9ced850c5.jpg",
          description: "Soulful rhythms and smooth vocals"
        },
        {
          id: "3",
          Title: "Pop",
          imageurl: "https://static01.nyt.com/images/2018/12/30/arts/30yearend-pop2/merlin_147857643_8e0c5c65-4549-4946-b51d-49425b9dcf24-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          description: "Catchy melodies and mainstream hits"
        },
        {
          id: "4",
          Title: "Reggaeton",
          imageurl: "https://i.pinimg.com/736x/f7/d4/e1/f7d4e12908232c4f7926ffb5102d42ff.jpg",
          description: "Latin urban beats with global appeal"
        },
        {
          id: "5",
          Title: "Reggae",
          imageurl: "https://wallpapercave.com/wp/SosBVD6.jpg",
          description: "Jamaican rhythms with positive vibrations"
        }, 
        {
          id: "1",
          Title: "HipHop",
          imageurl: "https://images6.alphacoders.com/909/909094.jpg",
          description: "The culture and sound of urban expression"
        },
        {
          id: "2",
          Title: "R&B",
          imageurl: "https://i.pinimg.com/originals/fe/0b/bb/fe0bbbfa8157c7c96e59d0a9ced850c5.jpg",
          description: "Soulful rhythms and smooth vocals"
        },
        {
          id: "3",
          Title: "Pop",
          imageurl: "https://static01.nyt.com/images/2018/12/30/arts/30yearend-pop2/merlin_147857643_8e0c5c65-4549-4946-b51d-49425b9dcf24-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          description: "Catchy melodies and mainstream hits"
        },
        {
          id: "4",
          Title: "Reggaeton",
          imageurl: "https://i.pinimg.com/736x/f7/d4/e1/f7d4e12908232c4f7926ffb5102d42ff.jpg",
          description: "Latin urban beats with global appeal"
        },
        {
          id: "5",
          Title: "Reggae",
          imageurl: "https://wallpapercave.com/wp/SosBVD6.jpg",
          description: "Jamaican rhythms with positive vibrations"
        }
      ]
    },
    {
      title: 'Global Sounds',
      genres: [
        {
          id: "6",
          Title: "K-Pop",
          imageurl: "https://images4.alphacoders.com/116/thumb-1920-1167338.jpg",
          description: "Korean pop music phenomenon"
        },
        {
          id: "7",
          Title: "Afro Beats",
          imageurl: "https://wallpapercave.com/wp/wp11603673.jpg",
          description: "West African rhythms meets modern pop"
        },
        {
          id: "15",
          Title: "Arab Music",
          imageurl: "https://timtaj.com/wp-content/uploads/2020/06/Arabic-Trap-Music.jpg",
          description: "Rich melodies from the Middle East"
        },
        {
          id: "9",
          Title: "Anime",
          imageurl: "https://preview.redd.it/new-key-visual-season-2-v0-p66ys0qw4ppa1.png?auto=webp&s=dbebf95a0a830d262a81b4ca5dca9e9e0cf99bd2",
          description: "Soundtracks from Japanese animation"
        },
        {
          id: "10",
          Title: "Christian Music",
          imageurl: "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-lstan-2147029.jpg&fm=jpg",
          description: "Inspirational and worship music"
        }, 
                {
          id: "6",
          Title: "K-Pop",
          imageurl: "https://images4.alphacoders.com/116/thumb-1920-1167338.jpg",
          description: "Korean pop music phenomenon"
        },
        {
          id: "7",
          Title: "Afro Beats",
          imageurl: "https://wallpapercave.com/wp/wp11603673.jpg",
          description: "West African rhythms meets modern pop"
        },
        {
          id: "15",
          Title: "Arab Music",
          imageurl: "https://timtaj.com/wp-content/uploads/2020/06/Arabic-Trap-Music.jpg",
          description: "Rich melodies from the Middle East"
        },
        {
          id: "9",
          Title: "Anime",
          imageurl: "https://preview.redd.it/new-key-visual-season-2-v0-p66ys0qw4ppa1.png?auto=webp&s=dbebf95a0a830d262a81b4ca5dca9e9e0cf99bd2",
          description: "Soundtracks from Japanese animation"
        },
      
      ]
    },
    {
      title: 'Specialty Genres',
      genres: [
        {
          id: "11",
          Title: "Phonk",
          imageurl: "https://i.redd.it/why-is-this-style-of-cover-art-so-popular-among-phonk-v0-4bcz4bezfova1.jpg?width=640&format=pjpg&auto=webp&s=9d80ee33fb9e635835438b8921822b9c73972263",
          description: "Memphis rap meets lo-fi aesthetics"
        },
        {
          id: "12",
          Title: "Jazz",
          imageurl: "https://www.datocms-assets.com/66357/1718176885-0o0a9177.webp?auto=format&fit=max&w=3840&q=75",
          description: "Improvisation and complex harmonies"
        },
        {
          id: "13",
          Title: "Disco",
          imageurl: "https://wallup.net/wp-content/uploads/2019/10/458685-disco-dance-music-club.jpg",
          description: "Dancefloor classics from the 70s/80s"
        },
        {
          id: "14",
          Title: "Electronic",
          imageurl: "https://wallpapers.com/images/featured/electronic-dance-music-ggf56eubs12efkdd.jpg",
          description: "Synthesized beats for the digital age"
        },
        {
          id: "8",
          Title: "Country Music",
          imageurl: "https://e1.pxfuel.com/desktop-wallpaper/141/671/desktop-wallpaper-music-toby-keith-thumbnail.jpg",
          description: "Storytelling with a southern twang"
        },  
         {
          id: "11",
          Title: "Phonk",
          imageurl: "https://i.redd.it/why-is-this-style-of-cover-art-so-popular-among-phonk-v0-4bcz4bezfova1.jpg?width=640&format=pjpg&auto=webp&s=9d80ee33fb9e635835438b8921822b9c73972263",
          description: "Memphis rap meets lo-fi aesthetics"
        },
        {
          id: "12",
          Title: "Jazz",
          imageurl: "https://www.datocms-assets.com/66357/1718176885-0o0a9177.webp?auto=format&fit=max&w=3840&q=75",
          description: "Improvisation and complex harmonies"
        },
        {
          id: "13",
          Title: "Disco",
          imageurl: "https://wallup.net/wp-content/uploads/2019/10/458685-disco-dance-music-club.jpg",
          description: "Dancefloor classics from the 70s/80s"
        },
        {
          id: "14",
          Title: "Electronic",
          imageurl: "https://wallpapers.com/images/featured/electronic-dance-music-ggf56eubs12efkdd.jpg",
          description: "Synthesized beats for the digital age"
        },
        {
          id: "8",
          Title: "Country Music",
          imageurl: "https://e1.pxfuel.com/desktop-wallpaper/141/671/desktop-wallpaper-music-toby-keith-thumbnail.jpg",
          description: "Storytelling with a southern twang"
        }, 
        
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

  // Filter all genres if search is active
  if (searchTerm) {
    const allGenres = genreCategories.flatMap(category => category.genres);
    const filteredGenres = allGenres.filter(genre =>
      genre.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="Gmain"> 
        <div className="Genres-container">
          {filteredGenres.map((item) => (
            <div className="genre-card" key={item.id}>
              <div className="genre-image-container">
                <span className="groovora-tag">
                  <FaMusic style={{ marginRight: 4 }} />
                  Groovora
                </span>
                <img 
                  src={item.imageurl} 
                  className="genre-image" 
                  alt={item.Title} 
                />
                <button 
                  className="play-button" 
                  onClick={() => console.log(`Play ${item.Title}`)}
                >
                  ▶
                </button>
              </div>
              <div className="genre-details">
                <h5 className="genre-title">{item.Title}</h5>
                <p className="genre-info">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="Gmain">
      {genreCategories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 style={{ textAlign: 'left', color: '#FFFFFF' }}>{category.title}</h2>
          <div className="scroll-wrapper">
            <div id={`genre-container-${index}`} className="card-container">
              {category.genres.map((genre) => (
                <div key={genre.id} className="genre-card">
                  <div className="genre-image-container">
                    <span className="groovora-tag">
                      <FaMusic style={{ marginRight: 4 }} />
                      Groovora
                    </span>
                    <img 
                      src={genre.imageurl} 
                      className="genre-image" 
                      alt={genre.Title} 
                    />
                    <button 
                      className="play-button" 
                      onClick={() => console.log(`Playing ${genre.Title}`)}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="genre-details">
                    <h5 className="genre-title">{genre.Title}</h5>
                    <p className="genre-info">{genre.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft(`genre-container-${index}`)}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="scroll-button right" 
              onClick={() => scrollRight(`genre-container-${index}`)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Genres;