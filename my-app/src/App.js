import './App.css';   
import ArtistsDetails from './components/ArtistsDetails';  
import AlbumDetails from './components/AlbumDetails'; 
import PodcastDetails from './components/PodcastDetails'; 
import SongDetails from './components/SongDetails';  
import ConcertDetails from './components/ConcertDetails'; 
import GenretDetails from './components/GenreDetails';
import LandingPage from './components/LandingPage'; 
import Footer from './components/Footer';  
import NavBar from './components/NavBar'; 
import Live from './components/Live'; 
import Social from './components/Social'; 
import Melody from './components/Melody';   
import Podcasts from './components/Podcasts';
import SideNav from './components/SideNav';
import Home from './components/Home';
import Artists from './components/Artists';
import Trending from './components/Trending';
import Genres from './components/Genres';  
import Playlist from './components/Playlist';
import Albums from './components/Albums'; 
import ConcertsPage from './components/ConcertsPage';
import SplashScreen from './components/SplashScreen'; // import splash

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';  

function App() {
  return (
    <div className="App"> 
      <Router>  
        <Routes>   
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Other routes with NavBar, SideNav, Footer */}
          <Route path="/*" element={
            <SplashScreen duration={2000}>
              <>
                <NavBar />
                <header className="App-header">
                  <SideNav />    
                  <Routes>   
                    <Route path="/home" element={<Home />} />
                    <Route path="/live" element={<Live />} />  
                    <Route path="/podcasts" element={<Podcasts />} />
                    <Route path="/social" element={<Social />} />  
                    <Route path="/albums/:id" element={<AlbumDetails />} /> 
                    <Route path="/concerts/:id" element={<ConcertDetails />} />  
                    <Route path="/genredetails" element={<GenretDetails />} />
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
                <Footer/>
              </>
            </SplashScreen>
          } />
        </Routes>  
      </Router>     
    </div>
  );
}

export default App;
