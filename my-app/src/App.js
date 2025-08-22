import './App.css';   
import ArtistsDetails from './components/ArtistsDetails'; 
import PodcastDetails from './components/PodcastDetails'; 
import SongDetails from './components/SongDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';  
import Footer from './components/Footer';  

// NavBar Pages 
import NavBar from './components/NavBar'; 
import Live from './components/Live'; 
import Social from './components/Social'; 
import Melody from './components/Melody';   
import Podcasts from './components/Podcasts';

/* SideNav Pages */
import SideNav from './components/SideNav';
import Home from './components/Home';
import Artists from './components/Artists';
import Trending from './components/Trending';
import Genres from './components/Genres';  
import Playlist from './components/Playlist';
import Albums from './components/Albums'; 
import ConcertsPage from './components/ConcertsPage';


function App() {
  return (
    <div className="App"> 
      <Router>  
        <NavBar />  {/* ✅ Now inside Router */}
        <header className="App-header">
          <SideNav />    
          <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />  
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/social" element={<Social />} /> 
            <Route path="/melody" element={<Melody />} /> 
            <Route path="/artists" element={<Artists />} />
            <Route path="/artist/:artistName" element={<ArtistsDetails />} /> 
            <Route path="/podcast/:id" element={<PodcastDetails />} /> 
              <Route path="/songdetails" element={<SongDetails />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/trending" element={<Trending />} />  
            <Route path="/concertspage" element={<ConcertsPage />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>  
         
        </header>
      </Router>     
       <Footer/>
    </div>
  );
}

export default App;