import React from "react";  
import SearchBar from './SearchBar';
import Music from './Music';
import Albums from './Albums';
import PopularRadio from './PopularRadio';
import Workout from './Workout';
import Footer from './Footer';


function Home() {
    return (  
      <>    
        <div className='Main'>
            <SearchBar />
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
  