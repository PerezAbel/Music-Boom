import React, { useState } from 'react';
import { 
  FaUserFriends, 
  FaUsers, 
  FaPlay, 
  FaPlus, 
  FaHeart, 
  FaRegHeart, 
  FaComment, 
  FaShare, 
  FaEllipsisH,
  FaMusic,
  FaBell,
  FaCheck,
  FaTimes,
  FaPaperPlane
} from 'react-icons/fa';
import { BsThreeDotsVertical, BsEmojiSmile } from 'react-icons/bs';
import '../css/Social.css';

const Social = () => {
  // States
  const [activeTab, setActiveTab] = useState('friends');
  const [followRequests, setFollowRequests] = useState([
    { id: 1, name: 'Alex Johnson', username: '@alexj', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Maria Garcia', username: '@mariag', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
  ]);
  const [friends, setFriends] = useState([
    { id: 1, name: 'Taylor Swift', username: '@taylorswift', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', isOnline: true },
    { id: 2, name: 'John Mayer', username: '@johnmayer', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', isOnline: false },
    { id: 3, name: 'Billie Eilish', username: '@billieeilish', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', isOnline: true }
  ]);
  const [groups, setGroups] = useState([
    { id: 1, name: 'Guitar Lovers', members: 1245, isMember: true },
    { id: 2, name: 'Songwriters Collective', members: 876, isMember: false },
    { id: 3, name: 'Electronic Music Producers', members: 2103, isMember: true }
  ]);
  const [shorts, setShorts] = useState([
    { id: 1, username: '@taylorswift', song: 'Anti-Hero', likes: 12453, comments: 432, isLiked: false },
    { id: 2, username: '@johnmayer', song: 'Gravity', likes: 8765, comments: 321, isLiked: true },
    { id: 3, username: '@billieeilish', song: 'Happier Than Ever', likes: 21034, comments: 987, isLiked: false }
  ]);
  const [stories, setStories] = useState([
    { id: 1, username: '@taylorswift', viewed: false },
    { id: 2, username: '@johnmayer', viewed: true },
    { id: 3, username: '@billieeilish', viewed: false }
  ]);
  const [newGroupName, setNewGroupName] = useState('');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Handlers
  const handleFollowRequest = (id, action) => {
    if (action === 'accept') {
      const newFriend = followRequests.find(req => req.id === id);
      setFriends([...friends, { ...newFriend, isOnline: true }]);
    }
    setFollowRequests(followRequests.filter(req => req.id !== id));
  };

  const handleGroupJoin = (id) => {
    setGroups(groups.map(group => 
      group.id === id ? { ...group, isMember: !group.isMember } : group
    ));
  };

  const handleShortLike = (id) => {
    setShorts(shorts.map(short => 
      short.id === id ? { ...short, isLiked: !short.isLiked, likes: short.isLiked ? short.likes - 1 : short.likes + 1 } : short
    ));
  };

  const createGroup = () => {
    if (newGroupName.trim()) {
      setGroups([...groups, { id: groups.length + 1, name: newGroupName, members: 1, isMember: true }]);
      setNewGroupName('');
    }
  };

  const sendNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { text: newNote, type: 'text', timestamp: new Date().toLocaleTimeString() }]);
      setNewNote('');
    }
  };

  const sendMusicNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { text: newNote, type: 'music', song: 'Sample Track', timestamp: new Date().toLocaleTimeString() }]);
      setNewNote('');
    }
  };

  return (
    <div className="social-hub">
      {/* Header */}
      <div className="social-header">
        <h1>Melody Social</h1>
        <div className="social-tabs">
          <button 
            className={activeTab === 'friends' ? 'active' : ''} 
            onClick={() => setActiveTab('friends')}
          >
            <FaUserFriends /> Friends
          </button>
          <button 
            className={activeTab === 'groups' ? 'active' : ''} 
            onClick={() => setActiveTab('groups')}
          >
            <FaUsers /> Groups
          </button>
          <button 
            className={activeTab === 'shorts' ? 'active' : ''} 
            onClick={() => setActiveTab('shorts')}
          >
            <FaPlay /> Shorts
          </button>
          <button 
            className={activeTab === 'stories' ? 'active' : ''} 
            onClick={() => setActiveTab('stories')}
          >
            <FaPlus /> Stories
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="social-content">
        {/* Friends Tab */}
        {activeTab === 'friends' && (
          <div className="friends-tab">
            <div className="follow-requests">
              <h3>Follow Requests</h3>
              {followRequests.length > 0 ? (
                followRequests.map(request => (
                  <div key={request.id} className="request-card">
                    <img src={request.avatar} alt={request.name} />
                    <div className="request-info">
                      <h4>{request.name}</h4>
                      <span>{request.username}</span>
                    </div>
                    <div className="request-actions">
                      <button onClick={() => handleFollowRequest(request.id, 'accept')}>
                        <FaCheck /> Accept
                      </button>
                      <button onClick={() => handleFollowRequest(request.id, 'reject')}>
                        <FaTimes /> Reject
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No pending requests</p>
              )}
            </div>

            <div className="friends-list">
              <h3>Your Friends</h3>
              {friends.map(friend => (
                <div key={friend.id} className="friend-card">
                  <div className="friend-avatar">
                    <img src={friend.avatar} alt={friend.name} />
                    {friend.isOnline && <span className="online-badge"></span>}
                  </div>
                  <div className="friend-info">
                    <h4>{friend.name}</h4>
                    <span>{friend.username}</span>
                  </div>
                  <button className="send-note-btn">
                    <FaPaperPlane /> Note
                  </button>
                </div>
              ))}
            </div>

            <div className="notes-section">
              <h3>Notes</h3>
              <div className="notes-input">
                <input
                  type="text"
                  placeholder="Write a note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <button onClick={sendNote}>
                  <BsEmojiSmile />
                </button>
                <button onClick={sendMusicNote}>
                  <FaMusic />
                </button>
              </div>
              <div className="notes-list">
                {notes.map((note, index) => (
                  <div key={index} className={`note ${note.type}`}>
                    {note.type === 'music' && <FaMusic />}
                    <p>{note.text}</p>
                    <span>{note.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Groups Tab */}
        {activeTab === 'groups' && (
          <div className="groups-tab">
            <div className="create-group">
              <input
                type="text"
                placeholder="Create a new group..."
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
              />
              <button onClick={createGroup}>
                <FaPlus /> Create
              </button>
            </div>

            <div className="groups-list">
              {groups.map(group => (
                <div key={group.id} className="group-card">
                  <h4>{group.name}</h4>
                  <span>{group.members.toLocaleString()} members</span>
                  <button 
                    className={group.isMember ? 'joined' : ''}
                    onClick={() => handleGroupJoin(group.id)}
                  >
                    {group.isMember ? 'Leave Group' : 'Join Group'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shorts Tab */}
        {activeTab === 'shorts' && (
          <div className="shorts-tab">
            {shorts.map(short => (
              <div key={short.id} className="short-card">
                <div className="short-video">
                  <FaPlay />
                </div>
                <div className="short-info">
                  <h4>{short.song}</h4>
                  <span>by {short.username}</span>
                  <div className="short-stats">
                    <button onClick={() => handleShortLike(short.id)}>
                      {short.isLiked ? <FaHeart color="#ff0050" /> : <FaRegHeart />}
                      {short.likes.toLocaleString()}
                    </button>
                    <button>
                      <FaComment /> {short.comments.toLocaleString()}
                    </button>
                    <button>
                      <FaShare />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stories Tab */}
        {activeTab === 'stories' && (
          <div className="stories-tab">
            <div className="stories-list">
              {stories.map(story => (
                <div key={story.id} className={`story-circle ${story.viewed ? 'viewed' : ''}`}>
                  <span>{story.username}</span>
                </div>
              ))}
            </div>
            <div className="create-story">
              <button>
                <FaPlus /> Create Story
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;