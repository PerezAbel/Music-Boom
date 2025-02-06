// import React, { useState, useEffect } from 'react';
// import '../css/Artists.css';
// import SearchBar from './SearchBar'; // Import the SearchBar component
// import Footer from './Footer';


// function Artists({ artists = [] }) {    

//   const containerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     padding: '20px',
//     maxWidth: '100%',
//     margin: '0 auto',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// };

// const contentStyle = {
//     flex: '1 1 60%',
//     padding: '20px',
// };

// const heading1Style = {
//     fontSize: '2.5em',
//     marginBottom: '20px',
//     color: '#333',
// };

// const heading2Style = {
//     fontSize: '1.8em',
//     marginBottom: '10px',
//     color: '#333',
// };

// const paragraphStyle = {
//     fontSize: '1.1em',
//     lineHeight: '1.6',
//     color: '#666',
//     marginBottom: '20px',
// };

// const imageContainerStyle = {
//     flex: '1 1 40%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
// };

// const imageStyle = {
//     maxWidth: '100%',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// };       

//   const images = [
//         'https://images6.alphacoders.com/133/1337850.jpeg',
//         'https://images5.alphacoders.com/117/1177528.jpg',
//         'https://www.billboard.com/wp-content/uploads/2023/07/burna-boy-apple-music-live-2023-billboard-1548.jpg',
//       ];
         

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentImageIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//           );
//         }, 3000); // Change slide every 3 seconds (adjust as needed)
    
//         return () => clearInterval(interval);
//       }, [images.length]);
    
  


    
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const filteredArtists = artists.filter((item) =>
//     (item.Title && typeof item.Title === 'string' ? item.Title.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   if (!filteredArtists.length) {
//     return <div>Loading...</div>;   


//   }  
  

//   return (    



//     <div className="Gmain">
//       <SearchBar data={artists} onSearch={handleSearch} />
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
  
//       <div className="Artists-container">
//         {filteredArtists.map((item) => (
//           <div className="Artists" key={item.id}>
//             <div className="Artists-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
//               <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
//                 ▶
//               </button>
//               <div className="Artists-overlay">
//                 <h5 className="Artists-title">{item.Title}</h5>
//                 <p className="Artists-text">{item.text}</p>
//               </div>
//             </div>  
           
//           </div>
//         ))}  
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Artists;








import React, { useState, useEffect } from 'react';
import '../css/Artists.css';
import SearchBar from './SearchBar'; 
import Footer from './Footer';      


function Artists() {    
  
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
      
  
    const Artists = [   


      {
        "id": "1",
        "Title": "SZA", 
        "imageurl": "https://4kwallpapers.com/images/wallpapers/sza-american-singer-5k-3840x2160-13774.jpg"
      },
      {
       "id": "2",
       "Title": "Rema", 
       "imageurl": "https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/202406/rema-201.jpg?itok=MHoQLHbI"
     },  
     {
       "id": "3",
       "Title": "Lunay", 
       "imageurl": "https://www.billboard.com/wp-content/uploads/media/Lunay-press-photo-2019-billboard-1548.jpg"
     },   
     {
       "id": "4",
       "Title": "The Weekend", 
       "imageurl": "https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg"
     },    
     {
       "id": "5",
       "Title": "Tems", 
       "imageurl": "https://wallpapercat.com/w/full/9/d/9/2053854-1707x2560-mobile-hd-tems-singer-background-photo.jpg"
     },    
     {
       "id": "6",
       "Title": "Drake", 
       "imageurl": "https://jusebeauty.co.uk/wp-content/uploads/2024/09/Drakes-New-Hairstyle-942x600.jpg"
     },   
     {
       "id": "7",
       "Title": "Harry Styles", 
       "imageurl": "https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-da307fb79cbc5ff2ea8a395c5a5132c33fb43602.jpg"
     },    
     {
       "id": "8",
       "Title": "Rose", 
       "imageurl": "https://mrwallpaper.com/images/thumbnail/fierce-rose-blackpink-fan-art-5bdi0h7t7rorzasa.jpg"
     },    
    
     {
       "id": "9",
       "Title": "Kendrick Lamar", 
       "imageurl": "https://hiphophero.com/static/uploads/5/2024/07/Kendrick-Lamar-2024-Not-Like-Us-Hip-Hop-Hero-1140x855.jpg"
     } ,
     {
       "id":"10",
       "Title":"Burna Boy", 
       "imageurl":"https://i.pinimg.com/550x/48/81/89/488189b5f15feb07717a601e8e71db59.jpg"
     },  
     {
       "id": "11",
       "Title": "Vybez Kartel", 
       "imageurl": "https://lastfm.freetls.fastly.net/i/u/ar0/10517e79bae9b0cbc1ce67883f7fc1dc.jpg"
     },   
     {
       "id": "12",
       "Title": "Beyonce", 
       "imageurl": "https://cdn.britannica.com/59/204159-050-5055F2A9/Beyonce-2013.jpg"
     },    
     {
       "id": "13",
       "Title": "Guy Penrod", 
       "imageurl": "https://photos.bandsintown.com/large/11916464.jpeg"
     },    
    
     {
       "id": "14",
       "Title": "Jimin", 
       "imageurl": "https://6.soompi.io/wp-content/uploads/image/20240827201506_Jimin_6e3b3f.jpg?s=900x600&e=t"
     } ,
     {
       "id":"15",
       "Title":"Chris Browm", 
       "imageurl":"https://wallpapercg.com/media/ts_orig/23410.webp"
     } 
    
      
   
        
       
    ];
   
    const [searchTerm, setSearchTerm] = useState('');              

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredArtists = Artists.filter((item) =>
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
        
          <div className="Artists-container">
                {filteredArtists.map((item) => (
                    <div className="Artists" key={item.id}>
                        <div className="Artists-img" style={{ backgroundImage: `url(${item.imageurl})` }}>
                            <button className="play-button" onClick={() => console.log(`Play ${item.Title}`)}>
                                ▶
                            </button>
                            <div className="Artists-overlay">
                                <h5 className="Artists-title">{item.Title}</h5>
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

export default Artists;

