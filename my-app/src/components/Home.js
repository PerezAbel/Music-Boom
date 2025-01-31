import React from "react";  
import SearchBar from './SearchBar';
import Music from './Music';
import Albums from './Albums';
import PopularRadio from './PopularRadio';
import Workout from './Workout';
import Footer from './Footer';   
import ImageDisplay from './ImageDisplay';      


function Home() {
    return (  
      <>    
        <div className='Main'>
            <SearchBar />      
            <ImageDisplay />  
            <Music />
            <Albums />
            <PopularRadio />
            <Workout />
            <Footer />
          </div>
      </>
    
      
    );
  }
  
  export default Home;
  