import React, { useState } from 'react';
import { 
  FaHome, 
  FaSearch, 
  FaCompass, 
  FaPlay, 
  FaPaperPlane, 
  FaRegHeart, 
  FaRegBookmark, 
  FaRegComment,
  FaEllipsisH,
  FaPlus
} from 'react-icons/fa';
import { BsPlusSquare } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import '../css/Social.css';

const Social = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [stories] = useState([
    { id: 1, username: 'jmmy_wa', viewed: false },
    { id: 2, username: 'pywilind', viewed: false },
    { id: 3, username: 'damekun0', viewed: false },
    { id: 4, username: 'amungee', viewed: false },
    { id: 5, username: 'jyzy_mojgoo', viewed: false },
    { id: 6, username: 'Lento', viewed: false }
  ]);
  
  const [posts] = useState([
    { 
      id: 1, 
      username: 'ymmngee', 
      time: '5h', 
      location: 'YOODS CAFFE', 
      likes: '4.2K', 
      comments: '6.1K', 
      shares: '4.8K',
      caption: 'wa',
      isLiked: false
    },
    { 
      id: 2, 
      username: 'pharice_01', 
      time: '3h', 
      caption: 'Perce\nSwitch',
      isLiked: false
    }
  ]);
  
  const [suggestions] = useState([
    { id: 1, username: '_sphere', relation: 'Suggested for you' },
    { id: 2, username: 'samuelmadame', relation: 'Followed by pastzay + 2 more' },
    { id: 3, username: 'uth_mahade', relation: 'Followed by nu_luku + 1 more' },
    { id: 4, username: 'ky_dim19', relation: 'Followed by rocookypathistigasse' },
    { id: 5, username: 'leibanaaht', relation: 'Followed by zw_luku + 4 more' }
  ]);

  const handleLike = (postId) => {
    // Like functionality would go here
  };

  return (
    <div className="instagram-app">
      {/* Header */}
      <header className="instagram-header">
        <h1>Socilize</h1>
        <div className="header-icons">
          <button><FaRegHeart /></button>
          <button><IoMdSend /></button>
        </div>
      </header>

      {/* Stories */}
      <div className="stories-container">
        {stories.map(story => (
          <div key={story.id} className={`story ${story.viewed ? 'viewed' : ''}`}>
            <div className="story-circle"></div>
            <span>{story.username}</span>
          </div>
        ))}
      </div>

      {/* Posts */}
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post">
            {/* Post Header */}
            <div className="post-header">
              <div className="post-user">
                <div className="user-avatar"></div>
                <div className="user-info">
                  <span className="username">{post.username}</span>
                  {post.location && <span className="location">{post.location}</span>}
                </div>
              </div>
              <button className="more-options"><FaEllipsisH /></button>
            </div>

            {/* Post Image */}
            <div className="post-image"></div>

            {/* Post Actions */}
            <div className="post-actions">
              <div className="left-actions">
                <button onClick={() => handleLike(post.id)}>
                  <FaRegHeart className={post.isLiked ? 'liked' : ''} />
                </button>
                <button><FaRegComment /></button>
                <button><IoMdSend /></button>
              </div>
              <button><FaRegBookmark /></button>
            </div>

            {/* Post Details */}
            <div className="post-details">
              {post.likes && (
                <div className="likes">{post.likes} likes</div>
              )}
              <div className="caption">
                <span className="username">{post.username}</span> {post.caption}
              </div>
              {post.comments && (
                <div className="comments">View all {post.comments} comments</div>
              )}
              <div className="time">{post.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="suggestions-container">
        <div className="suggestions-header">
          <span>Suggested for you</span>
          <button>See All</button>
        </div>
        {suggestions.map(user => (
          <div key={user.id} className="suggestion">
            <div className="user-info">
              <div className="user-avatar"></div>
              <div className="user-details">
                <span className="username">{user.username}</span>
                <span className="relation">{user.relation}</span>
              </div>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="instagram-footer">
        <div className="footer-links">
          <span>About</span>
          <span>Help</span>
          <span>Press</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Language</span>
          <span>Meta Verified</span>
        </div>
        <div className="copyright">
          © 2025 INSTAGRAM FROM META
        </div>
      </footer>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => setActiveTab('home')}
        >
          <FaHome />
        </button>
        <button 
          className={activeTab === 'search' ? 'active' : ''}
          onClick={() => setActiveTab('search')}
        >
          <FaSearch />
        </button>
        <button 
          className={activeTab === 'explore' ? 'active' : ''}
          onClick={() => setActiveTab('explore')}
        >
          <FaCompass />
        </button>
        <button 
          className={activeTab === 'reels' ? 'active' : ''}
          onClick={() => setActiveTab('reels')}
        >
          <FaPlay />
        </button>
        <button 
          className={activeTab === 'create' ? 'active' : ''}
          onClick={() => setActiveTab('create')}
        >
          <BsPlusSquare />
        </button>
      </nav>
    </div>
  );
};

export default Social;