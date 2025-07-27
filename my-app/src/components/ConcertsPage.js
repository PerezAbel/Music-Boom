import React, { useState } from 'react';
import '../css/ConcertsPage.css'; // We'll create this CSS file next

const ConcertsPage = () => {
  const [concerts, setConcerts] = useState([
    {
      id: 1,
      title: "Electric Dreams Festival",
      artist: "Various Artists",
      date: "2023-08-15",
      location: "Central Park, New York",
      price: "$75 - $200",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Electronic",
      isFeatured: true
    },
    {
      id: 2,
      title: "Rock the City",
      artist: "The Rolling Stones",
      date: "2023-09-22",
      location: "Madison Square Garden",
      price: "$120 - $350",
      image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Rock",
      isFeatured: false
    },
    {
      id: 3,
      title: "Jazz Under the Stars",
      artist: "Diana Krall & Special Guests",
      date: "2023-08-30",
      location: "Hollywood Bowl, LA",
      price: "$90 - $250",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Jazz",
      isFeatured: true
    },
    {
      id: 4,
      title: "Hip Hop Nation",
      artist: "Kendrick Lamar, Travis Scott",
      date: "2023-10-05",
      location: "Banc of California Stadium",
      price: "$85 - $300",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Hip Hop",
      isFeatured: false
    },
    {
      id: 5,
      title: "Classical Nights",
      artist: "New York Philharmonic",
      date: "2023-11-18",
      location: "Carnegie Hall",
      price: "$65 - $180",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Classical",
      isFeatured: false
    },
    {
      id: 6,
      title: "Country Roads",
      artist: "Luke Combs, Miranda Lambert",
      date: "2023-09-10",
      location: "Nissan Stadium, Nashville",
      price: "$70 - $220",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      genre: "Country",
      isFeatured: true
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConcerts = concerts.filter(concert => {
    const matchesFilter = filter === 'all' || concert.genre.toLowerCase() === filter.toLowerCase();
    const matchesSearch = concert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          concert.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          concert.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const genres = [...new Set(concerts.map(concert => concert.genre))];

  return (
    <div className="concerts-page">
      <header className="concerts-header">
        <h1>Live Music Experiences</h1>
        <p>Find your next unforgettable concert experience</p>
      </header>

      <div className="search-filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search concerts, artists, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>

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
        </div>
      </div>

      <section className="featured-concerts">
        <h2>Featured Concerts</h2>
        <div className="concert-cards">
          {concerts
            .filter(concert => concert.isFeatured)
            .map(concert => (
              <ConcertCard key={concert.id} concert={concert} featured={true} />
            ))}
        </div>
      </section>

      <section className="all-concerts">
        <h2>Upcoming Concerts</h2>
        {filteredConcerts.length > 0 ? (
          <div className="concert-cards">
            {filteredConcerts.map(concert => (
              <ConcertCard key={concert.id} concert={concert} featured={false} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No concerts match your search criteria. Try a different filter or search term.</p>
          </div>
        )}
      </section>

      <footer className="concerts-footer">
        <p>Sign up for our newsletter to get concert updates</p>
        <div className="newsletter-signup">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-spotify"></i></a>
        </div>
      </footer>
    </div>
  );
};

const ConcertCard = ({ concert, featured }) => {
  const formattedDate = new Date(concert.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={`concert-card ${featured ? 'featured' : ''}`}>
      <div className="card-image">
        <img src={concert.image} alt={concert.title} />
        {featured && <div className="featured-badge">Featured</div>}
        <div className="genre-badge">{concert.genre}</div>
      </div>
      <div className="card-content">
        <h3>{concert.title}</h3>
        <p className="artist">{concert.artist}</p>
        <div className="details">
          <p><i className="fas fa-calendar-alt"></i> {formattedDate}</p>
          <p><i className="fas fa-map-marker-alt"></i> {concert.location}</p>
          <p><i className="fas fa-tag"></i> {concert.price}</p>
        </div>
        <button className="buy-button">Get Tickets</button>
      </div>
    </div>
  );
};

export default ConcertsPage;