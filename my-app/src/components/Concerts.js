import React from 'react';
import '../css/Concerts.css';

const concertData = [
  {
    id: 1,
    title: "Summer Beats Festival",
    artist: "Various Artists",
    date: "August 15, 2023",
    time: "7:00 PM",
    venue: "Central Park, NYC",
    ticketsAvailable: 124,
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Electric Dreams Tour",
    artist: "The Neon Lights",
    date: "September 2, 2023",
    time: "8:30 PM",
    venue: "Madison Square Garden",
    ticketsAvailable: 56,
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Classical Nights",
    artist: "Symphony Orchestra",
    date: "August 28, 2023",
    time: "6:00 PM",
    venue: "Carnegie Hall",
    ticketsAvailable: 231,
    imageUrl: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80"
  },
  {
    id: 4,
    title: "Jazz in the Moonlight",
    artist: "Miles Davis Tribute Band",
    date: "September 10, 2023",
    time: "9:00 PM",
    venue: "Blue Note Jazz Club",
    ticketsAvailable: 42,
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Rock the City",
    artist: "The Rolling Stones",
    date: "August 20, 2023",
    time: "7:30 PM",
    venue: "Barclays Center",
    ticketsAvailable: 89,
    imageUrl: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Pop Revolution",
    artist: "Taylor Swift",
    date: "September 5, 2023",
    time: "8:00 PM",
    venue: "MetLife Stadium",
    ticketsAvailable: 312,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

function Concerts() {  
  return (  
    <div className="charts-container">
      <h1 className="charts-header">Upcoming Concerts</h1>
      <div className="concert-cards-container">
        {concertData.map((concert) => (
          <div key={concert.id} className="concert-card">
            <div className="concert-image-container">
              <img 
                src={concert.imageUrl} 
                alt={concert.title} 
                className="concert-image"
              />
              <div className="tickets-badge">
                {concert.ticketsAvailable} tickets left
              </div>
            </div>
            <div className="concert-info">
              <h3 className="concert-title">{concert.title}</h3>
              <p className="concert-artist">{concert.artist}</p>
              <div className="concert-details">
                <p><strong>Date:</strong> {concert.date}</p>
                <p><strong>Time:</strong> {concert.time}</p>
                <p><strong>Venue:</strong> {concert.venue}</p>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Concerts;