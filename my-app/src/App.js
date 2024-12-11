import './App.css';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';   


/* SideNavPages */
import SideNav from './components/SideNav';
import Home from './components/Home';
import Artists from './components/Artists';
import Charts from './components/Charts';
import Podcasts from './components/Podcasts';
import WatchLater from './components/WatchLater';
import YourLibrary from './components/YourLibrary';
import Trending from './components/Trending';
import Liked from './components/Liked';
import Genres from './components/Genres';
import LiveRadio from './components/LiveRadio';    
import Playlist from './components/Playlist';

function App() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:3005/Genres')
      .then((response) => response.json())
      .then((data) => setGenres(data));
  }, []);    
  
  
  
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4000/Podcasts')
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);   

  const [artists, setArtists] = useState([]);
  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:4005/Artists')
      .then((response) => response.json())
      .then((data) => setArtists(data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Router>   
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists artists={artists}/>} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/genres" element={<Genres genres={genres} />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/yourlibrary" element={<YourLibrary />} />
            <Route path="/liveradio" element={<LiveRadio />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/podcasts" element={<Podcasts podcasts={podcasts}/>} />
          </Routes>
        </Router> 
      </header>
    </div>
  );
}

export default App;
