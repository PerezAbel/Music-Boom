import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather} from '@fortawesome/free-solid-svg-icons';


function Logo() {
    const logoStyle = {
        fontFamily: 'Arial, sans-serif', // Use a suitable font
        fontSize: '36px', // Adjust size as needed
        color: '#ff0000', // Adjust color as needed
        textTransform: 'uppercase', // Convert text to uppercase
        letterSpacing: '2px', // Adjust letter spacing as needed
        position: 'absolute',
        top: '3%',
        left: '20px',
        transform: 'translateY(-50%)',
      };

    return (
        <div className="logo">
          <FontAwesomeIcon icon={faFeather} className="icon" /> Musify
        </div>
    );
}

export default Logo;
