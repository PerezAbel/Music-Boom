import React, { useState, useRef } from 'react';
import { FaPlay, FaStop, FaHeart, FaRegHeart, FaMusic, FaEllipsisH, FaShare, FaGift } from 'react-icons/fa';
import { BsEmojiSmile, BsChatLeftDots } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import '../css/Live.css';

const Live = () => {
  const [isLive, setIsLive] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [viewers, setViewers] = useState(1245);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const videoRef = useRef(null);

  const startStream = () => {
    setIsLive(true);
    // Simulate viewer count increase
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  };

  const stopStream = () => {
    setIsLive(false);
  };

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { text: messageInput, user: "You" }]);
      setMessageInput('');
    }
  };

  return (
    <div className="live-stream-container">
      {/* Navbar */}
      <div className="live-navbar">
        <div className="live-nav-left">
          <h2>Melody Live</h2>
        </div>
        <div className="live-nav-right">
          <span className="viewer-count">
            👁️ {viewers.toLocaleString()} watching
          </span>
        </div>
      </div>

      {/* Main Stream Area */}
      <div className="stream-content">
        {/* Video Stream */}
        <div className="video-container">
          {isLive ? (
            <div className="live-video" ref={videoRef}>
              <div className="live-badge">LIVE</div>
              <div className="streamer-info">
                <div className="streamer-avatar"></div>
                <span>@ArtistName</span>
              </div>
            </div>
          ) : (
            <div className="start-stream-prompt">
              <h3>Go Live on Melody</h3>
              <p>Connect with fans in real-time</p>
              <button onClick={startStream} className="start-stream-btn">
                <FaPlay /> Start Stream
              </button>
            </div>
          )}
        </div>

        {/* Live Chat Section */}
        <div className="live-chat">
          <div className="chat-header">
            <h4>Live Chat</h4>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Send a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>
              <IoMdSend />
            </button>
          </div>
        </div>
      </div>

      {/* Stream Controls (For Streamer) */}
      {isLive && (
        <div className="stream-controls">
          <button onClick={stopStream} className="stop-stream-btn">
            <FaStop /> End Stream
          </button>
          <div className="interaction-buttons">
            <button onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? <FaHeart color="#ff4d8f" /> : <FaRegHeart />}
            </button>
            <button><BsEmojiSmile /></button>
            <button><FaShare /></button>
            <button><FaGift /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Live;