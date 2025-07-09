import React from "react";  
import NavBar from './NavBar';
import Music from './Music';
import Albums from './Albums';
import PopularRadio from './PopularRadio';
import Workout from './Workout';
import Footer from './Footer';   
// import ImageDisplay from './ImageDisplay';      
import '../css/Home.css'

function Home() {
    return (  
      <>    
        <div className='Main'>
            <NavBar />      
            {/* <ImageDisplay />   */}
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
  