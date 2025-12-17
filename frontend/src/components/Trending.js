import React, { useState } from 'react';
import '../css/Trending.css';
import { FaMusic, FaChevronLeft, FaChevronRight, FaPodcast, FaNewspaper } from 'react-icons/fa';
import Footer from './Footer';

function Trending() {
  // Categories of trending content
  const trendingCategories = [
    {
      title: 'Celebrity News',
      icon: <FaNewspaper className="category-icon" />,
      items: [
        {
          id: "1",
          title: "Beyoncé Announces World Tour",
          description: "The superstar reveals dates for her 2023 Renaissance World Tour",
          imageUrl: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-227248-508986022.jpg?w=1401&h=934&crop=1",
          date: "2 hours ago"
        },
        {
          id: "2",
          title: "Drake Buys $100M Mansion",
          description: "Rapper purchases Beverly Hills estate with recording studio",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMoirfF_ugfWIxaYnbAT47ozghRvXW5T7qQ&s",
          date: "5 hours ago"
        },
        {
          id: "3",
          title: "Taylor Swift Wins Album of the Year",
          description: "Historic win at the Grammys for 'Midnights' album",
          imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/202414/rs_1024x759-240204191643-634-taylor-swift-2024-grammys.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
          date: "1 day ago"
        },
        {
          id: "4",
          title: "Kendrick Lamar's New Documentary",
          description: "Behind-the-scenes look at 'Mr. Morale & The Big Steppers' coming soon",
          imageUrl: "https://www.rollingstone.com/wp-content/uploads/2022/06/lamarghana.jpg",
          date: "2 days ago"
        },
        {
          id: "5",
          title: "Rihanna's Fashion Line Expands",
          description: "Savage X Fenty announces new summer collection",
          imageUrl: "https://static01.nyt.com/images/2019/04/28/admin/17tmag-conversation-4/17tmag-conversation-4-superJumbo-v2.jpg",
          date: "3 days ago"
        }
      ]
    },
    {
      title: 'New Releases',
      icon: <FaMusic className="category-icon" />,
      items: [
        {
          id: "6",
          title: "Metro Boomin - Heroes & Villains",
          description: "Star-studded album featuring Weeknd, Future, and more",
          imageUrl: "https://i.scdn.co/image/ab67616d00001e028b1c1ed89416696a71a8ae4f",
          date: "New this week"
        },
        {
          id: "7",
          title: "SZA - SOS",
          description: "Highly anticipated sophomore album finally drops",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuz41PH_ldL7RoqvYU6Qy6fS2Wxzd1B0h_w&s",
          date: "New this week"
        },
        {
          id: "8",
          title: "The Weeknd - Dawn FM (Deluxe)",
          description: "Expanded edition with 5 new tracks",
          imageUrl: "https://lastfm.freetls.fastly.net/i/u/ar0/6d2a0a6e85a485f7d2d2edd97641c87f.jpg",
          date: "Just released"
        },
        {
          id: "9",
          title: "Bad Bunny - Un Verano Sin Ti (Bachata Version)",
          description: "Surprise release of album reimagined",
          imageUrl: "https://www.billboard.com/wp-content/uploads/2022/05/Bad-Bunny-cr-Eric-Rojas-press-2022-billboard-1548.jpg?w=942&h=623&crop=1",
          date: "Just released"
        },
        {
          id: "10",
          title: "Burna Boy - Love, Damini (Live)",
          description: "Recorded at Madison Square Garden",
          imageUrl: "https://www.okayafrica.com/media-library/burna-boy-love-damini-album-cover-art.jpg?id=30072842&width=980",
          date: "New this week"
        }
      ]
    },
    {
      title: 'Trending Podcasts',
      icon: <FaPodcast className="category-icon" />,
      items: [
        {
          id: "11",
          title: "Dissect - Beyoncé's Renaissance",
          description: "Deep dive into the musical layers of the album",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGujATVoZkR9HouuhgmwBUqAyhd6krLFd1A&s",
          date: "Trending"
        },
        {
          id: "12",
          title: "Song Exploder: Kendrick Lamar",
          description: "Breaking down 'Father Time' from Mr. Morale",
          imageUrl: "https://img-www.tf-cdn.com/show/2/song-exploder.jpeg?auto=compress&fm=pjpg&fit=crop&crop=faces%2Centropy%20312&dpr=1&w=500&h=360&auto=format",
          date: "Trending"
        },
        {
          id: "13",
          title: "Popcast: The State of Hip-Hop",
          description: "NY Times music critics debate rap's direction",
          imageUrl: "https://i.scdn.co/image/ab6765630000ba8ad59eb2aa9e27d2883aa85d51",
          date: "Hot topic"
        },
        {
          id: "14",
          title: "Broken Record: Pharrell Williams",
          description: "The hitmaker reflects on 20 years of production",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgwJFfYn5FXerlhDcWoVCyYKCRsVpbqjS4g&s",
          date: "New episode"
        },
        {
          id: "15",
          title: "Questlove Supreme",
          description: "Special episode on 50 years of hip-hop",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/QuestloveSupreme.jpg",
          date: "Trending"
        }
      ]
    },
    {
      title: 'Artist Updates',
      icon: <FaMusic className="category-icon" />,
      items: [
        {
          id: "16",
          title: "Tyler, The Creator Announces Festival",
          description: "Camp Flog Gnaw returns after 3-year hiatus",
          imageUrl: "https://people.com/thmb/9Ia87sbmXRWBRnJqCMqR_ceI0FA=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/tyler-the-creator-CHROMAKOPIA-102324-3-0b563d94eb384b928c9cfc4a39dfc26b.jpg",
          date: "Breaking"
        },
        {
          id: "17",
          title: "Billie Eilish Working on New Album",
          description: "Teases 'darker' direction in studio updates",
          imageUrl: "https://i8.amplience.net/i/naras/Billie-Eilish-2024-GettyImages-2153227184",
          date: "2 hours ago"
        },
        {
          id: "18",
          title: "Drake's OVO Sound Radio Returns",
          description: "Monthly show coming back to Apple Music",
          imageUrl: "https://www.hotnewhiphop.com/i/v1/228x152-cover-81-auto/cover/88/23/1645922388_687809ad7a4b68a46ea0a1fa1aa72e24.jpg",
          date: "Just announced"
        },
        {
          id: "19",
          title: "BTS Members Begin Military Service",
          description: "Group to take hiatus during enlistment period",
          imageUrl: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5522x3682+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fb6%2F37%2F5e601daf44da9af5ba7189e3ddbf%2Fap25161309284360.jpg",
          date: "Breaking news"
        },
        {
          id: "20",
          title: "Lizzo Launches Shapewear Line",
          description: "Yitty expands with new summer collection",
          imageUrl: "https://www.optionstheedge.com/sites/default/files/field/featured-image/2022/yitty-lizzo.jpg",
          date: "3 hours ago"
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

  // Filter all items if search is active
  if (searchTerm) {
    const allItems = trendingCategories.flatMap(category => category.items);
    const filteredItems = allItems.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="Trending-main">
        <div className="Trending-container">
          {filteredItems.map((item) => (
            <div className="Trending-item" key={item.id}>
              <div className="Trending-img" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                <div className="Trending-overlay">
                  <span className="trending-badge">{item.date}</span>
                  <h5 className="Trending-title">{item.title}</h5>
                  <p className="Trending-description">{item.description}</p>
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
    <div className="Trending-main">
      {trendingCategories.map((category, index) => (
        <div key={index} className="category-section">
          <div className="category-header">
            {category.icon}
            <h2 style={{ color: '#FFFFFF' }}>{category.title}</h2>
          </div>
          <div className="scroll-wrapper">
            <div id={`trending-container-${index}`} className="card-container">
              {category.items.map((item) => (
                <div key={item.id} className="card">
                  <span className="trending-badge">{item.date}</span>
                  <img src={item.imageUrl} className="card-img" alt={item.title} />
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="scroll-button left" 
              onClick={() => scrollLeft(`trending-container-${index}`)}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="scroll-button right" 
              onClick={() => scrollRight(`trending-container-${index}`)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Trending;