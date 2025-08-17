import React, { useState } from 'react';
import { FaRobot, FaMicrophone, FaStop, FaChevronDown, FaMusic, FaHeadphones, FaUserFriends } from 'react-icons/fa';
import '../css/Melody.css';

function Melody() {
  const [isListening, setIsListening] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Melody understand my music taste?",
      answer: "Melody analyzes your listening history, liked songs, and interactions to learn your preferences and find patterns in your musical taste."
    },
    {
      question: "Can Melody connect me with other music lovers?",
      answer: "Yes! Melody matches you with people who have similar music tastes and can suggest collaborative playlists or listening sessions."
    },
    {
      question: "How accurate are the mood-based playlists?",
      answer: "Our AI analyzes your current activity, time of day, and even your voice tone to create perfectly tailored playlists for your mood."
    },
    {
      question: "What can Melody tell me about my singing?",
      answer: "Melody can analyze pitch, tone, rhythm, and emotional delivery to give you constructive feedback on your vocal performance."
    }
  ];

  return (
    <div className="melody-container">
      {/* Decorative elements */}
      <div className="music-note note-1">♪</div>
      <div className="music-note note-2">♫</div>
      <div className="music-note note-3">♩</div>
      <div className="wave-line"></div>
      <div className="purple-orb"></div>
      
      <div className="melody-content">
        {/* Page Title */}
        <div className="melody-title-container">
          <h1 className="melody-title">Melody</h1>
          <p className="melody-subtitle">Your AI Music Companion</p>
          <div className="title-divider"></div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon"><FaMusic /></div>
            <h3>Smart Playlists</h3>
            <p>Automatically generated playlists tailored to your mood and activities</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaUserFriends /></div>
            <h3>Music Matching</h3>
            <p>Connect with people who share your unique music taste</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaHeadphones /></div>
            <h3>Vocal Coach</h3>
            <p>Get instant feedback on your singing and improve your skills</p>
          </div>
        </div>

        {/* AI Agent Section */}
        <div className="ai-agent-section">
          <div className="ai-icon-container">
            <FaRobot className="ai-icon" />
            <div className={`pulse-ring ${isListening ? 'listening' : ''}`}></div>
          </div>
          
          <div className="action-buttons">
            <button className="action-btn purple-bg">Generate Playlist</button>
            <button className="action-btn dark-bg">Find Music Friends</button>
            <button className="action-btn purple-bg">Vocal Analysis</button>
          </div>
        </div>

        {/* Voice Controls */}
        <div className="voice-controls">
          <button 
            className={`voice-btn ${isListening ? 'active' : ''}`}
            onClick={() => setIsListening(true)}
          >
            <FaMicrophone /> {isListening ? 'Melody is listening...' : 'Talk to Melody'}
          </button>
          <button 
            className="voice-btn stop-btn"
            onClick={() => setIsListening(false)}
            disabled={!isListening}
          >
            <FaStop /> Stop
          </button>
        </div>

        {/* Frequently Asked Questions */}
        <div className="faq-section">
          <h2 className="section-title">Your Questions Answered</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-card ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <FaChevronDown className={`faq-arrow ${activeFaq === index ? 'rotated' : ''}`} />
                </div>
                {activeFaq === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Melody;