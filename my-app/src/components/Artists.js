import React from 'react';
import '../css/Music.css';   
import SideNav from "../components/SideNav"; // adjust the path
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Music() {  
   const navigate = useNavigate();
  // Categories data
  const categories = [
    {
      title: 'Top 10 Artists',
      artists: [
        {
          title: 'Taylor Swift',
          imageUrl: 'https://publish.purewow.net/wp-content/uploads/sites/2/2024/10/taylor-swift-hub.jpg?resize=720%2C780',
          details: 'Global pop phenomenon and songwriter'
        },
        {
          title: 'Drake',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2025/01/Drake-2019-red-carpet-billboard-pro-1260.jpg?w=942&h=623&crop=1',
          details: 'Chart-topping rap superstar'
        },
        {
          title: 'BTS',
          imageUrl: 'https://wallpapers.com/images/featured/bts-pictures-0ynzwrpbewd63qlf.jpg',
          details: 'Record-breaking K-pop group'
        },
        {
          title: 'Beyoncé',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/Beyonce-cr-Courtesy-of-Parkwood-Entertainment-press-2022-billboard-1548.jpg',
          details: 'Queen of R&B and pop'
        },
        {
          title: 'The Weeknd',
          imageUrl: 'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
          details: 'Canadian singer blending R&B and pop'
        },
        {
          title: 'Bad Bunny',
          imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020410/rs_819x1024-200510121755-92516570_1511618529020001_4571246911942488617_n.jpg?fit=around%7C819:1024&output-quality=90&crop=819:1024;center,top',
          details: 'Latin trap and reggaeton superstar'
        },
        {
          title: 'BTS',
          imageUrl: 'https://wallpapers.com/images/featured/bts-pictures-0ynzwrpbewd63qlf.jpg',
          details: 'Record-breaking K-pop group'
        },
        {
          title: 'Beyoncé',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/Beyonce-cr-Courtesy-of-Parkwood-Entertainment-press-2022-billboard-1548.jpg',
          details: 'Queen of R&B and pop'
        },
        {
          title: 'The Weeknd',
          imageUrl: 'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
          details: 'Canadian singer blending R&B and pop'
        },
        {
          title: 'Bad Bunny',
          imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020410/rs_819x1024-200510121755-92516570_1511618529020001_4571246911942488617_n.jpg?fit=around%7C819:1024&output-quality=90&crop=819:1024;center,top',
          details: 'Latin trap and reggaeton superstar'
        }
      ]
    },
    {
      title: 'Afro Artists',
      artists: [
        {
          title: 'Burna Boy',
          imageUrl: 'https://i.pinimg.com/550x/48/81/89/488189b5f15feb07717a601e8e71db59.jpg',
          details: 'Afrofusion pioneer from Nigeria'
        },
        {
          title: 'Wizkid',
          imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2024/11/wizkid-album-review.jpg',
          details: 'Afrobeats global ambassador'
        },
        {
          title: 'Tems',
          imageUrl: 'https://wallpapercat.com/w/full/9/d/9/2053854-1707x2560-mobile-hd-tems-singer-background-photo.jpg',
          details: 'Grammy-winning Nigerian singer'
        },
        {
          title: 'Davido',
          imageUrl: 'https://i.guim.co.uk/img/media/10470940704403920dd283f0fea8b27bed013eef/0_119_1428_857/master/1428.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0ffc2932bb9a69c0ef29f449132bbc80',
          details: 'Afrobeats superstar'
        },
        {
          title: 'Ayra Starr',
          imageUrl: 'https://mixbeep.com/media/singerpics/mixbayra-starkrinlvs.jpg',
          details: 'Rising Afro-pop sensation'
        }, 
        {
          title: 'Burna Boy',
          imageUrl: 'https://i.pinimg.com/550x/48/81/89/488189b5f15feb07717a601e8e71db59.jpg',
          details: 'Afrofusion pioneer from Nigeria'
        },
        {
          title: 'Wizkid',
          imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2024/11/wizkid-album-review.jpg',
          details: 'Afrobeats global ambassador'
        },
        {
          title: 'Tems',
          imageUrl: 'https://wallpapercat.com/w/full/9/d/9/2053854-1707x2560-mobile-hd-tems-singer-background-photo.jpg',
          details: 'Grammy-winning Nigerian singer'
        },
        {
          title: 'Davido',
          imageUrl: 'https://i.guim.co.uk/img/media/10470940704403920dd283f0fea8b27bed013eef/0_119_1428_857/master/1428.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0ffc2932bb9a69c0ef29f449132bbc80',
          details: 'Afrobeats superstar'
        },
        {
          title: 'Ayra Starr',
          imageUrl: 'https://mixbeep.com/media/singerpics/mixbayra-starkrinlvs.jpg',
          details: 'Rising Afro-pop sensation'
        }
      ]
    },
    {
      title: 'Latin Artists',
      artists: [
        {
          title: 'Bad Bunny',
          imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020410/rs_819x1024-200510121755-92516570_1511618529020001_4571246911942488617_n.jpg?fit=around%7C819:1024&output-quality=90&crop=819:1024;center,top',
          details: 'Global reggaeton phenomenon'
        },
        {
          title: 'J Balvin',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICQCfaec5YZU5yJWWvR2rX-0Vkeglw-q5qA&s',
          details: 'Colombian reggaeton star'
        },
        {
          title: 'Karol G',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2023-11-16_Gala_de_los_Latin_Grammy%2C_15_%28cropped_2%29.jpg/250px-2023-11-16_Gala_de_los_Latin_Grammy%2C_15_%28cropped_2%29.jpg',
          details: 'Reigning queen of reggaeton'
        },
        {
          title: 'Ozuna',
          imageUrl: 'https://variety.com/wp-content/uploads/2022/06/1F7A9595.jpg?w=1000&h=563&crop=1',
          details: 'Puerto Rican trap and reggaeton star'
        },
        {
          title: 'Rosalía',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVlqXeYh_YKZS5nzzM1TTNxAhqdoYxYIiRg&s',
          details: 'Spanish flamenco-pop innovator'
        }, 
        {
          title: 'Bad Bunny',
          imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020410/rs_819x1024-200510121755-92516570_1511618529020001_4571246911942488617_n.jpg?fit=around%7C819:1024&output-quality=90&crop=819:1024;center,top',
          details: 'Global reggaeton phenomenon'
        },
        {
          title: 'J Balvin',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICQCfaec5YZU5yJWWvR2rX-0Vkeglw-q5qA&s',
          details: 'Colombian reggaeton star'
        },
        {
          title: 'Karol G',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2023-11-16_Gala_de_los_Latin_Grammy%2C_15_%28cropped_2%29.jpg/250px-2023-11-16_Gala_de_los_Latin_Grammy%2C_15_%28cropped_2%29.jpg',
          details: 'Reigning queen of reggaeton'
        },
        {
          title: 'Ozuna',
          imageUrl: 'https://variety.com/wp-content/uploads/2022/06/1F7A9595.jpg?w=1000&h=563&crop=1',
          details: 'Puerto Rican trap and reggaeton star'
        },
        {
          title: 'Rosalía',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVlqXeYh_YKZS5nzzM1TTNxAhqdoYxYIiRg&s',
          details: 'Spanish flamenco-pop innovator'
        }
      ]
    },
    {
      title: 'K-Pop Artists',
      artists: [
        {
          title: 'BTS',
          imageUrl: 'https://wallpapers.com/images/featured/bts-pictures-0ynzwrpbewd63qlf.jpg',
          details: 'Global K-pop phenomenon'
        },
        {
          title: 'BLACKPINK',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGsITjdGcMHW5XID9EIoUxw-hCUEn5C6iog&s',
          details: 'Record-breaking girl group'
        },
        {
          title: 'TWICE',
          imageUrl: 'https://rollingstonephilippines.com/wp-content/uploads/2025/05/RSPH-Landscape-2025-05-19T140316325.webp',
          details: 'Bubblegum pop perfection'
        },
        {
          title: 'Stray Kids',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRTDcfB50ezp6R5AreIl36SUDHzSCsPDD2w&s',
          details: 'Self-producing boy group'
        },
        {
          title: 'NewJeans',
          imageUrl: 'https://i.scdn.co/image/ab6761610000517480668ba2b15094d083780ea9',
          details: 'Rookie girl group sensation'
        }, 
        {
          title: 'BTS',
          imageUrl: 'https://wallpapers.com/images/featured/bts-pictures-0ynzwrpbewd63qlf.jpg',
          details: 'Global K-pop phenomenon'
        },
        {
          title: 'BLACKPINK',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGsITjdGcMHW5XID9EIoUxw-hCUEn5C6iog&s',
          details: 'Record-breaking girl group'
        },
        {
          title: 'TWICE',
          imageUrl: 'https://rollingstonephilippines.com/wp-content/uploads/2025/05/RSPH-Landscape-2025-05-19T140316325.webp',
          details: 'Bubblegum pop perfection'
        },
        {
          title: 'Stray Kids',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRTDcfB50ezp6R5AreIl36SUDHzSCsPDD2w&s',
          details: 'Self-producing boy group'
        },
        {
          title: 'NewJeans',
          imageUrl: 'https://i.scdn.co/image/ab6761610000517480668ba2b15094d083780ea9',
          details: 'Rookie girl group sensation'
        }
      ]
    },
    {
      title: 'Popular Rappers',
      artists: [
        {
          title: 'Kendrick Lamar',
          imageUrl: 'https://images6.alphacoders.com/909/909094.jpg',
          details: 'Pulitzer Prize-winning lyricist'
        },
        {
          title: 'Drake',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2025/01/Drake-2019-red-carpet-billboard-pro-1260.jpg?w=942&h=623&crop=1',
          details: 'Chart-dominating rap superstar'
        },
        {
          title: 'Travis Scott',
          imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/211212152053-travis-scott-cacti-seltzer-discontinued.jpg?q=h_1066,w_1600,x_0,y_0',
          details: 'Astroworld architect'
        },
        {
          title: 'J. Cole',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvNnfnOFzqbbN1UcaHgzw3hYrxH84brmbRw&s',
          details: 'Conscious rap heavyweight'
        },
        {
          title: 'Nicki Minaj',
          imageUrl: 'https://umusic.co.nz/wp-content/uploads/sites/44/2018/11/nikkiminaj-article-image-2.jpg',
          details: 'Queen of rap'
        },
         {
          title: 'Kendrick Lamar',
          imageUrl: 'https://images6.alphacoders.com/909/909094.jpg',
          details: 'Pulitzer Prize-winning lyricist'
        },
        {
          title: 'Drake',
          imageUrl: 'https://www.billboard.com/wp-content/uploads/2025/01/Drake-2019-red-carpet-billboard-pro-1260.jpg?w=942&h=623&crop=1',
          details: 'Chart-dominating rap superstar'
        },
        {
          title: 'Travis Scott',
          imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/211212152053-travis-scott-cacti-seltzer-discontinued.jpg?q=h_1066,w_1600,x_0,y_0',
          details: 'Astroworld architect'
        },
        {
          title: 'J. Cole',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvNnfnOFzqbbN1UcaHgzw3hYrxH84brmbRw&s',
          details: 'Conscious rap heavyweight'
        },
        {
          title: 'Nicki Minaj',
          imageUrl: 'https://umusic.co.nz/wp-content/uploads/sites/44/2018/11/nikkiminaj-article-image-2.jpg',
          details: 'Queen of rap'
        }
      ]
    }
  ];


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

   const handleArtistClick = (artistName) => {
    console.log(`Navigating to artist: ${artistName}`);
    navigate(`/artist/${encodeURIComponent(artistName)}`);
  };

 return (
    <div className="music-section"> 
     
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 style={{ textAlign: 'left', color: '#FFFFFF' }}>{category.title}</h2>
          <div className="scroll-wrapper">
            <div id={`container-${index}`} className="card-container">
              {category.artists.map((artist, artistIndex) => (
                <div 
                  key={artistIndex} 
                  className="artist-card"
                  onClick={() => handleArtistClick(artist.title)}
                >
                  <div className="artist-image-container">
                    <span className="groovora-tag">
                      <FaMusic style={{ marginRight: 4 }} />
                      Groovora
                    </span>
                    <img 
                      src={artist.imageUrl} 
                      className="artist-image" 
                      alt={artist.title} 
                    />
                    <button 
                      className="play-button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`Playing ${artist.title}`);
                      }}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="artist-details">
                    <h5 className="artist-title">{artist.title}</h5>
                    <p className="artist-info">{artist.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-button left" onClick={() => scrollLeft(`container-${index}`)}>
              <FaChevronLeft />
            </button>
            <button className="scroll-button right" onClick={() => scrollRight(`container-${index}`)}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Music;