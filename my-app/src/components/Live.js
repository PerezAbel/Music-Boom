import React, { useState, useRef, useEffect } from 'react';
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
  const [currentStream, setCurrentStream] = useState(null);
  const [liveStreams, setLiveStreams] = useState([]);
  const videoRef = useRef(null);

  // Mock data for ongoing live streams
  useEffect(() => {
    const mockStreams = [
      {
        id: 1,
        artist: 'Ariana Grande',
        title: 'Positions Acoustic Session',
        viewers: 12500,
        thumbnail: 'https://example.com/ariana.jpg',
        category: 'Pop'
      },
      {
        id: 2,
        artist: 'The Weeknd',
        title: 'After Hours Live',
        viewers: 8900,
        thumbnail: 'https://example.com/weeknd.jpg',
        category: 'R&B'
      },
      {
        id: 3,
        artist: 'BTS',
        title: 'Butter Dance Practice',
        viewers: 24500,
        thumbnail: 'https://example.com/bts.jpg',
        category: 'K-Pop'
      },
      {
        id: 4,
        artist: 'Billie Eilish',
        title: 'Happier Than Ever Studio Session',
        viewers: 15600,
        thumbnail: 'https://example.com/billie.jpg',
        category: 'Alternative'
      }
    ];
    setLiveStreams(mockStreams);
    
    // Set the first stream as current by default
    if (mockStreams.length > 0 && !currentStream) {
      setCurrentStream(mockStreams[0]);
    }
  }, []);

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

  const switchStream = (stream) => {
    setCurrentStream(stream);
    setViewers(stream.viewers);
    setMessages([]); // Clear chat when switching streams
    // In a real app, you'd connect to the new stream's chat here
  };

  return (
    <div className="live-stream-container">
      {/* Navbar */}
      <div className="live-navbar">
        <div className="live-nav-left">
          <h2>Live</h2>
        </div>
        <div className="live-nav-right">
          {currentStream && (
            <span className="viewer-count">
              👁️ {viewers.toLocaleString()} watching
            </span>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="live-main-content">
        {/* Stream List Sidebar */}
        <div className="stream-list-sidebar">
          <h3>Live Now</h3>
          <div className="stream-list">
            {liveStreams.map(stream => (
              <div 
                key={stream.id} 
                className={`stream-card ${currentStream?.id === stream.id ? 'active' : ''}`}
                onClick={() => switchStream(stream)}
              >
                <div className="stream-thumbnail">
                  <div className="live-badge-small">LIVE</div>
                  <div className="viewer-count-small">{stream.viewers.toLocaleString()} viewers</div>
                </div>
                <div className="stream-info">
                  <h4>{stream.artist}</h4>
                  <p>{stream.title}</p>
                  <span className="stream-category">{stream.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Stream Area */}
        <div className="stream-content">
          {/* Video Stream */}
          <div className="video-container">
            {currentStream ? (
              <>
                <div className="live-video" ref={videoRef}>
                  <div className="live-badge">LIVE</div>
                  <div className="streamer-info">
                    <div className="streamer-avatar"></div>
                    <span>@{currentStream.artist.replace(/\s+/g, '')}</span>
                  </div>
                </div>
                <div className="stream-details">
                  <h3>{currentStream.title}</h3>
                  <p>Streaming to {currentStream.viewers.toLocaleString()} fans</p>
                </div>
              </>
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
              <span>{currentStream?.artist}'s Stream</span>
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