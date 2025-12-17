import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ConcertDetails.css";

// Sample data
const concerts = [
  {
    id: 1,
    title: "Electric Dreams Festival",
    artist: "Various Artists",
    date: "2023-08-15",
    time: "7:00 PM",
    location: "Central Park, New York",
    venue: "Central Park",
    country: "USA",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80",
    genre: "Electronic",
    ticketsAvailable: 124,
    description:
      "Join us for the biggest electronic music festival of the year featuring top DJs and producers from around the world. Experience an unforgettable night of music, lights, and energy in the heart of Central Park.",
  },
  {
    id: 2,
    title: "Rock Revolution",
    artist: "The Legends",
    date: "2023-09-20",
    time: "8:00 PM",
    location: "Madison Square Garden, New York",
    venue: "MSG Arena",
    country: "USA",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1580651316320-0daffc9b4e2a?auto=format&fit=crop&w=1000&q=80",
    genre: "Rock",
    ticketsAvailable: 56,
    description:
      "A night of classic rock anthems and modern hits with the biggest names in rock music. Prepare for an electrifying performance that will rock your world.",
  },
];

const ConcertDetails = () => {
  const { id } = useParams();
  const concertData = concerts.find((c) => c.id === Number(id));
  const [ticketCount, setTicketCount] = useState(1);

  if (!concertData) {
    return (
      <div className="concert-not-found">
        <h2>Concert not found</h2>
        <p>The concert you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const totalPrice = (concertData.price * ticketCount).toFixed(2);

  const handleBuyTickets = () => {
    alert(`Thank you for purchasing ${ticketCount} ticket(s) for ${concertData.title}!`);
    // In a real app, you would redirect to a payment page
  };

  return (
    <div className="concert-details-page">
      <div className="concert-hero" style={{ backgroundImage: `url(${concertData.image})` }}>
        <div className="hero-overlay">
          <div className="concert-header">
            <h1>{concertData.title}</h1>
            <p className="artist-name">{concertData.artist}</p>
            <div className="concert-tags">
              <span className="genre-tag">{concertData.genre}</span>
              <span className="date-badge">{concertData.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="concert-content">
        <div className="concert-info">
          <div className="info-card">
            <h3>Event Details</h3>
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <div className="detail-text">
                <p className="detail-label">Date & Time</p>
                <p>{concertData.date} at {concertData.time}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div className="detail-text">
                <p className="detail-label">Location</p>
                <p>{concertData.venue}, {concertData.location}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <span className="detail-icon">🎵</span>
              <div className="detail-text">
                <p className="detail-label">Genre</p>
                <p>{concertData.genre}</p>
              </div>
            </div>
            
            <div className="detail-item">
              <span className="detail-icon">🎫</span>
              <div className="detail-text">
                <p className="detail-label">Tickets Available</p>
                <p className={concertData.ticketsAvailable < 20 ? "low-tickets" : ""}>
                  {concertData.ticketsAvailable} {concertData.ticketsAvailable === 1 ? "ticket" : "tickets"}
                </p>
              </div>
            </div>
          </div>

          <div className="description-card">
            <h3>About This Event</h3>
            <p>{concertData.description}</p>
          </div>
        </div>

        <div className="ticket-purchase">
          <div className="ticket-card">
            <h3>Get Your Tickets</h3>
            <div className="price-section">
              <span className="price">${concertData.price}</span>
              <span className="price-label">per ticket</span>
            </div>
            
            <div className="ticket-controls">
              <p className="quantity-label">Quantity:</p>
              <div className="counter">
                <button 
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  disabled={ticketCount <= 1}
                >
                  −
                </button>
                <span className="count">{ticketCount}</span>
                <button 
                  onClick={() => setTicketCount(ticketCount + 1)}
                  disabled={ticketCount >= concertData.ticketsAvailable}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="total-section">
              <p>Total: <span className="total-price">${totalPrice}</span></p>
            </div>
            
            <button 
              className="buy-button"
              onClick={handleBuyTickets}
              disabled={concertData.ticketsAvailable === 0}
            >
              {concertData.ticketsAvailable === 0 ? 'Sold Out' : 'Buy Tickets'}
            </button>
            
            {concertData.ticketsAvailable > 0 && concertData.ticketsAvailable < 10 && (
              <p className="limited-tickets">Hurry! Only {concertData.ticketsAvailable} tickets left</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertDetails;