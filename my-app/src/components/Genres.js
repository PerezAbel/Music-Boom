// import React, { useState, useEffect } from 'react';
// import '../css/Genres.css';  
// import SearchBar from './SearchBar'; // Import the SearchBar component
// import Footer from './Footer';

// function Genres({ genres = [] }) {  
  
  
//    const containerStyle = {
//       display: 'flex',   
//       flexWrap: 'wrap',   
//       height:'600px',
//       padding: '20px',
//       maxWidth: '100%',
//       margin: '0 auto',
//       backgroundColor: '#f9f9f9',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   };
  
//   const contentStyle = {
//       flex: '1 1 60%',
//       padding: '20px',
//   };
  
//   const heading1Style = {
//       fontSize: '2.5em',
//       marginBottom: '20px',
//       color: '#333',
//   };
  
//   const heading2Style = {
//       fontSize: '1.8em',
//       marginBottom: '10px',
//       color: '#333',
//   };
  
//   const paragraphStyle = {
//       fontSize: '1.1em',
//       lineHeight: '1.6',
//       color: '#666',
//       marginBottom: '20px',
//   };
  
//   const imageContainerStyle = {
//       flex: '1 1 40%',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '20px',
//   };
  
//   const imageStyle = {
//       maxWidth: '100%',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   };       
  
//     const images = [
//           'https://lastfm.freetls.fastly.net/i/u/ar0/06cafb09b6c19488d502dabbcb5cbe8b.jpg',
//           'https://images3.alphacoders.com/119/1198302.jpg',
//           'https://wallpapercave.com/wp/wp11035135.jpg',
//         ];
           
  
//       const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
//         useEffect(() => {
//           const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) =>
//               prevIndex === images.length - 1 ? 0 : prevIndex + 1
//             );
//           }, 3000); // Change slide every 3 seconds (adjust as needed)
      
//           return () => clearInterval(interval);
//         }, [images.length]);
      
    

//   const [searchTerm, setSearchTerm] = useState('');

//   // Update the search term state
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   // Filter items based on searchTerm
//   const filteredGenres = genres.filter((item) =>
//     (item.Title && typeof item.Title === 'string' ? item.Title.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   // Show loading message if genres array is empty
//   if (!filteredGenres.length) {
//     return <div>Loading...</div>;
//   }

//   return (      
//     <div className='Gmain'>      
//       {/* SearchBar Component */}
//       <SearchBar data={genres} onSearch={handleSearch} />  

//       <div className="slider-container">
//     {images.map((image, index) => (
//       <img
//         key={index}
//         src={image}
//         alt={`Slide ${index + 1}`}
//         style={{
//           display: index === currentImageIndex ? 'block' : 'none',
//           width: '100%', // Change width here (e.g., 80%)
//           height: '800px', // Change height here (e.g., 300px)
//           objectFit: 'cover', // Maintain the aspect ratio of the image    
//           marginBottom: '30px'
//         }}
//       />
//     ))}


   
//       <div className='Genres-container'>     
//         {filteredGenres.map((item) => (     
//           <div className="Genres" key={item.id}> {/* Ensure the key is unique, using item.id */}
//             <div className="Genres-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
//             <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
//                 ▶
//               </button>
//               <div className="Genres-overlay">  
//                 <h5 className="Genres-title">{item.Title}</h5>
//                 <p className="Genres-text">{item.text}</p> {/* Correct reference */}
//               </div>
//             </div>
//           </div>  
//         ))}
//       </div>    
//       </div>  
//       <Footer/>
//     </div>
//   );
// }

// export default Genres;





import React, { useState, useEffect } from 'react';
import '../css/Genres.css';
import SearchBar from './SearchBar'; 
import Footer from './Footer';      


function Genres() {    
  
   const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
      maxWidth: '100%',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const contentStyle = {
      flex: '1 1 60%',
      padding: '20px',
  };
  
  const heading1Style = {
      fontSize: '2.5em',
      marginBottom: '20px',
      color: '#333',
  };
  
  const heading2Style = {
      fontSize: '1.8em',
      marginBottom: '10px',
      color: '#333',
  };
  
  const paragraphStyle = {
      fontSize: '1.1em',
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '20px',
  };
  
  const imageContainerStyle = {
      flex: '1 1 40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
  };
  
  const imageStyle = {
      maxWidth: '100%',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };       
  
    const images = [  

      'https://images6.alphacoders.com/133/1337850.jpeg',
      'https://images5.alphacoders.com/117/1177528.jpg',
      'https://www.billboard.com/wp-content/uploads/2023/07/burna-boy-apple-music-live-2023-billboard-1548.jpg',
         
        ];
           
  
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }, 3000); // Change slide every 3 seconds (adjust as needed)
      
          return () => clearInterval(interval);
        }, [images.length]);
      
  
    const Genres = [     

      {
        "id": "1",
        "Title": "HipHop", 
        "imageurl": "https://images6.alphacoders.com/909/909094.jpg"
      },
      {
       "id": "2",
       "Title": "R&B", 
       "imageurl": "https://i.pinimg.com/originals/fe/0b/bb/fe0bbbfa8157c7c96e59d0a9ced850c5.jpg"
     },  
     {
       "id": "3",
       "Title": "Pop", 
       "imageurl": "https://static01.nyt.com/images/2018/12/30/arts/30yearend-pop2/merlin_147857643_8e0c5c65-4549-4946-b51d-49425b9dcf24-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
     },   
     {
       "id": "4",
       "Title": "Reggaeton", 
       "imageurl": "https://i.pinimg.com/736x/f7/d4/e1/f7d4e12908232c4f7926ffb5102d42ff.jpg"
     },    
     {
       "id": "5",
       "Title": "Reggae", 
       "imageurl": "https://wallpapercave.com/wp/SosBVD6.jpg"
     },    
     {
       "id": "6",
       "Title": "K-Pop", 
       "imageurl": "https://images4.alphacoders.com/116/thumb-1920-1167338.jpg"
     },   
     {
       "id": "7",
       "Title": "Afro Beats", 
       "imageurl": "https://wallpapercave.com/wp/wp11603673.jpg"
     },    
     {
       "id": "8",
       "Title": "Country-Music", 
       "imageurl": "https://e1.pxfuel.com/desktop-wallpaper/141/671/desktop-wallpaper-music-toby-keith-thumbnail.jpg"
     },    
    
     {
       "id": "9",
       "Title": "Anime", 
       "imageurl": "https://preview.redd.it/new-key-visual-season-2-v0-p66ys0qw4ppa1.png?auto=webp&s=dbebf95a0a830d262a81b4ca5dca9e9e0cf99bd2"
     } ,
     {
       "id":"10",
       "Title":"Christian Music", 
       "imageurl":"https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-lstan-2147029.jpg&fm=jpg"
     },  
     {
       "id": "11",
       "Title": "Phonk", 
       "imageurl": "https://i.redd.it/why-is-this-style-of-cover-art-so-popular-among-phonk-v0-4bcz4bezfova1.jpg?width=640&format=pjpg&auto=webp&s=9d80ee33fb9e635835438b8921822b9c73972263"
     },   
     {
       "id": "12",
       "Title": "Jazz", 
       "imageurl": "https://www.datocms-assets.com/66357/1718176885-0o0a9177.webp?auto=format&fit=max&w=3840&q=75"
     },    
     {
       "id": "13",
       "Title": "Disco", 
       "imageurl": "https://wallup.net/wp-content/uploads/2019/10/458685-disco-dance-music-club.jpg"
     },    
    
     {
       "id": "14",
       "Title": "Electronic", 
       "imageurl": "https://wallpapers.com/images/featured/electronic-dance-music-ggf56eubs12efkdd.jpg"
     } ,
     {
       "id":"15",
       "Title":"Arab Music", 
       "imageurl":"https://timtaj.com/wp-content/uploads/2020/06/Arabic-Trap-Music.jpg"
     }     
       
    ];
   
    const [searchTerm, setSearchTerm] = useState('');              

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredGenres = Genres.filter((item) =>
        item.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );  

    

    return (    

<div className="Gmain">
      <SearchBar onSearch={handleSearch} />    


       <div className="slider-container">
       {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index + 1}`}
        style={{
          display: index === currentImageIndex ? 'block' : 'none',
          width: '100%', 
          height: '800px', 
          objectFit: 'cover',   
          marginBottom: '30px'
        }}
      />
    ))}  
        
          <div className="Genres-container">
                {filteredGenres.map((item) => (
                    <div className="Genres" key={item.id}>
                        <div className="Genres-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
                            <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
                                ▶
                            </button>
                            <div className="Genres-overlay">
                                <h5 className="Genres-title">{item.Title}</h5>
                            </div>
                        </div>
                    </div> 
                 
                ))}   
                
            </div> 
         
            <Footer />  
           
        </div>  
        </div>
    );
}

export default Genres;


