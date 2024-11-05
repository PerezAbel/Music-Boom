import React, { useState } from 'react';
import { FaSearch, FaFeather } from 'react-icons/fa';

function SearchBar({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Handle search term input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #ccc',
    }}>
      
      {/* Logo Section with Feather Icon */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaFeather style={{ fontSize: '24px', color: '#FFFFFF', marginRight: '8px' }} />
        <span style={{ fontSize: '24px', fontWeight: 'bold', color:'#FFFFFF' }}>Musify</span>
      </div>
      
      {/* Centered Search Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px',
            width: '100%',
            maxWidth: '300px',
          }}
          value={searchTerm}
          onChange={handleChange}
        />
        
        {/* Search Button */}
        <button    
          style={{
            padding: '8px 16px',
            backgroundColor: 'gray',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',  
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px',
          }}
          onClick={() => onSearch(searchTerm)}
        >
          <FaSearch style={{ marginRight: '5px' }} />
        </button>
      </div>
      
      {/* Sign In and Sign Up Buttons Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Sign In Button */}
        <button   
          style={{
            padding: '8px 16px',
            backgroundColor: '#262626',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={() => console.log('Sign In clicked')}
        >
          Sign In
        </button>
        
        {/* Sign Up Button */}
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#262626',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => console.log('Sign Up clicked')}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
