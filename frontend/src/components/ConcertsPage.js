import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ConcertsPage.css';

const ConcertsPage = () => {
  const [concerts] = useState([
    {
      id: 1,
      title: "Electric Dreams Festival",
      artist: "Various Artists",
      date: "2023-08-15",
      time: "7:00 PM",
      location: "Central Park, New York",
      country: "USA",
      price: "$75 - $200",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Electronic",
      isFeatured: true,
      ticketsAvailable: 124
    },
    {
      id: 2,
      title: "Rock the City",
      artist: "The Rolling Stones",
      date: "2023-09-22",
      time: "8:30 PM",
      location: "Madison Square Garden",
      country: "USA",
      price: "$120 - $350",
      image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Rock",
      isFeatured: false,
      ticketsAvailable: 56
    },
    {
      id: 3,
      title: "Jazz Under the Stars",
      artist: "Diana Krall & Special Guests",
      date: "2023-08-30",
      time: "9:00 PM",
      location: "Hollywood Bowl, LA",
      country: "USA",
      price: "$90 - $250",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Jazz",
      isFeatured: true,
      ticketsAvailable: 42
    },
    {
      id: 4,
      title: "Hip Hop Nation",
      artist: "Kendrick Lamar, Travis Scott",
      date: "2023-10-05",
      time: "8:00 PM",
      location: "Banc of California Stadium",
      country: "USA",
      price: "$85 - $300",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Hip Hop",
      isFeatured: false,
      ticketsAvailable: 231
    },
    {
      id: 5,
      title: "Classical Nights",
      artist: "New York Philharmonic",
      date: "2023-11-18",
      time: "6:00 PM",
      location: "Carnegie Hall",
      country: "USA",
      price: "$65 - $180",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Classical",
      isFeatured: false,
      ticketsAvailable: 89
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchType, setSearchType] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const genres = [...new Set(concerts.map(concert => concert.genre))];

  const filteredConcerts = concerts.filter(concert => {
    const matchesFilter = filter === 'all' || concert.genre.toLowerCase() === filter.toLowerCase();

    if (!searchType) return matchesFilter;

    switch (searchType) {
      case 'genre':
        return matchesFilter && concert.genre.toLowerCase().includes(searchValue.toLowerCase());
      case 'country':
        return matchesFilter && concert.country.toLowerCase().includes(searchValue.toLowerCase());
      case 'location':
        return matchesFilter && concert.location.toLowerCase().includes(searchValue.toLowerCase());
      case 'nearby':
        return matchesFilter && concert.location.toLowerCase().includes('new york');
      default:
        return matchesFilter;
    }
  });

  const handleSearchBy = (type) => {
    setSearchType(type);
    setShowSearchDropdown(false);
    setSearchValue('');
  };

  return (
    <div className="concerts-page">
      <header className="concerts-header">
        <h1>Live Music Experiences</h1>
        <p>Find your next unforgettable concert experience</p>
      </header>

      <div className="filter-container">
        <div className="filter-buttons">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Genres
          </button>
          {genres.map(genre => (
            <button
              key={genre}
              className={filter === genre.toLowerCase() ? 'active' : ''}
              onClick={() => setFilter(genre.toLowerCase())}
            >
              {genre}
            </button>
          ))}

          <div className="search-by-container">
            <button
              className="search-by-button"
              onClick={() => setShowSearchDropdown(!showSearchDropdown)}
            >
              Search Concerts By <i className={`fas fa-chevron-${showSearchDropdown ? 'up' : 'down'}`}></i>
            </button>
            {showSearchDropdown && (
              <div className="search-dropdown">
                <button onClick={() => handleSearchBy('country')}>By Country</button>
                <button onClick={() => handleSearchBy('location')}>By Location</button>
                <button onClick={() => handleSearchBy('genre')}>By Genre</button>
                <button onClick={() => handleSearchBy('nearby')}>Concerts Near You</button>
              </div>
            )}
          </div>
        </div>

        {searchType && (
          <div className="search-input-container">
            <input
              type="text"
              placeholder={`Search by ${searchType}...`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="clear-search"
              onClick={() => {
                setSearchType(null);
                setSearchValue('');
              }}
            >
              Clear
            </button>
          </div>
        )}
      </div>

      <section className="featured-concerts">
        <h2>Featured Concerts</h2>
        <div className="concert-cards-container">
          {concerts
            .filter(concert => concert.isFeatured)
            .map(concert => (
              <ConcertCard key={concert.id} concert={concert} />
            ))}
        </div>
      </section>

      <section className="all-concerts">
        <h2>Upcoming Concerts</h2>
        {filteredConcerts.length > 0 ? (
          <div className="concert-cards-container">
            {filteredConcerts.map(concert => (
              <ConcertCard key={concert.id} concert={concert} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No concerts match your search criteria. Try a different filter or search term.</p>
          </div>
        )}
      </section>
    </div>
  );
};

const ConcertCard = ({ concert }) => {
  const formattedDate = new Date(concert.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="concert-card">
      <Link to={`/concerts/${concert.id}`} className="concert-link">
        <div className="concert-image-container">
          <img
            src={concert.image}
            alt={concert.title}
            className="concert-image"
          />
          <div className="tickets-badge">
            {concert.ticketsAvailable} tickets left
          </div>
          <div className="genre-badge">{concert.genre}</div>
        </div>
        <div className="concert-info">
          <h3 className="concert-title">{concert.title}</h3>
          <p className="concert-artist">{concert.artist}</p>
          <div className="concert-details">
            <p><strong>Date:</strong> {formattedDate}</p>
            <p><strong>Time:</strong> {concert.time}</p>
            <p><strong>Venue:</strong> {concert.location}</p>
            <p><strong>Price:</strong> {concert.price}</p>
          </div>
          <button className="book-now-btn">Get Tickets</button>
        </div>
      </Link>
    </div>
  );
};

export default ConcertsPage;
