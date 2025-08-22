import React from "react";  
import Music from './Music';
import Albums from './Albums';
import PopularRadio from './PopularRadio'; 
import Concerts from './Concerts';
import Workout from './Workout';
import Footer from './Footer';   
import ImageSlider from './ImageSlider';      
import '../css/Home.css'


function Home() {  

    return (  
      <>    
        <div className='Main'>
            <ImageSlider />  
            <Music />
        
            <PopularRadio />
            <Workout />
          </div>
      </>
    
   
    );
  }
  
  export default Home;
  