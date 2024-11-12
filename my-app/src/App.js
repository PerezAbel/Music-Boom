import Logo from './components/Logo';
import './App.css';
import Albums  from './components/Albums'
import SideNav from './components/SideNav';   
import Music from './components/Music';
import Footer from './components/Footer'; 
import PopularRadio from './components/PopularRadio'; 
import Workout from './components/Workout'; 
import SearchBar from './components/SearchBar';    



function App() {
  return (
    <div className="App">
      <header className="App-header">  
       <SideNav/>   
     <div className='Main'>    
      <SearchBar/>  
      <Music/>   
      <Albums/>  
      <PopularRadio/>  
      <Workout/>  
      <Footer/>
       </div>   
      </header>
    </div>
  );
}

export default App;
