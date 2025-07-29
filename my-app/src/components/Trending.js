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
          imageUrl: "https://media.npr.org/assets/img/2023/02/01/gettyimages-1246482581-59801b120f5e7d9b0a9a3a3e4a8f3a9f6c3d3e8.jpg",
          date: "2 hours ago"
        },
        {
          id: "2",
          title: "Drake Buys $100M Mansion",
          description: "Rapper purchases Beverly Hills estate with recording studio",
          imageUrl: "https://media.architecturaldigest.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-123456789.jpg",
          date: "5 hours ago"
        },
        {
          id: "3",
          title: "Taylor Swift Wins Album of the Year",
          description: "Historic win at the Grammys for 'Midnights' album",
          imageUrl: "https://media.gq.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-987654321.jpg",
          date: "1 day ago"
        },
        {
          id: "4",
          title: "Kendrick Lamar's New Documentary",
          description: "Behind-the-scenes look at 'Mr. Morale & The Big Steppers' coming soon",
          imageUrl: "https://media.pitchfork.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-567891234.jpg",
          date: "2 days ago"
        },
        {
          id: "5",
          title: "Rihanna's Fashion Line Expands",
          description: "Savage X Fenty announces new summer collection",
          imageUrl: "https://media.vogue.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-345678912.jpg",
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
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Metro_Boomin_-_Heroes_%26_Villains.png",
          date: "New this week"
        },
        {
          id: "7",
          title: "SZA - SOS",
          description: "Highly anticipated sophomore album finally drops",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/SZA_-_SOS.png",
          date: "New this week"
        },
        {
          id: "8",
          title: "The Weeknd - Dawn FM (Deluxe)",
          description: "Expanded edition with 5 new tracks",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9f/The_Weeknd_-_Dawn_FM.png",
          date: "Just released"
        },
        {
          id: "9",
          title: "Bad Bunny - Un Verano Sin Ti (Bachata Version)",
          description: "Surprise release of album reimagined",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Bad_Bunny_-_Un_Verano_Sin_Ti.png",
          date: "Just released"
        },
        {
          id: "10",
          title: "Burna Boy - Love, Damini (Live)",
          description: "Recorded at Madison Square Garden",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5f/Burna_Boy_-_Love%2C_Damini.png",
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
          imageUrl: "https://media.npr.org/assets/img/2022/07/29/dissect_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
          date: "Trending"
        },
        {
          id: "12",
          title: "Song Exploder: Kendrick Lamar",
          description: "Breaking down 'Father Time' from Mr. Morale",
          imageUrl: "https://media.npr.org/assets/img/2020/10/27/songexploder_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
          date: "Trending"
        },
        {
          id: "13",
          title: "Popcast: The State of Hip-Hop",
          description: "NY Times music critics debate rap's direction",
          imageUrl: "https://media.npr.org/assets/img/2018/05/23/popcast_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
          date: "Hot topic"
        },
        {
          id: "14",
          title: "Broken Record: Pharrell Williams",
          description: "The hitmaker reflects on 20 years of production",
          imageUrl: "https://media.npr.org/assets/img/2018/11/14/brokenrecord_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
          date: "New episode"
        },
        {
          id: "15",
          title: "Questlove Supreme",
          description: "Special episode on 50 years of hip-hop",
          imageUrl: "https://media.npr.org/assets/img/2016/09/14/questlovesupreme_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
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
          imageUrl: "https://media.pitchfork.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-123456789.jpg",
          date: "Breaking"
        },
        {
          id: "17",
          title: "Billie Eilish Working on New Album",
          description: "Teases 'darker' direction in studio updates",
          imageUrl: "https://media.npr.org/assets/img/2021/07/30/billieeilish_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
          date: "2 hours ago"
        },
        {
          id: "18",
          title: "Drake's OVO Sound Radio Returns",
          description: "Monthly show coming back to Apple Music",
          imageUrl: "https://media.pitchfork.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-987654321.jpg",
          date: "Just announced"
        },
        {
          id: "19",
          title: "BTS Members Begin Military Service",
          description: "Group to take hiatus during enlistment period",
          imageUrl: "https://media.npr.org/assets/img/2022/06/14/bts_cover_art_sq-7b9a9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
          date: "Breaking news"
        },
        {
          id: "20",
          title: "Lizzo Launches Shapewear Line",
          description: "Yitty expands with new summer collection",
          imageUrl: "https://media.vogue.com/photos/5f4e5b5e5b5e5b5e5b5e5b5e/16:9/w_2560%2Cc_limit/GettyImages-345678912.jpg",
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
      <Footer />
    </div>
  );
}

export default Trending;