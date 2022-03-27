import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {
  Route,
  Routes
} from "react-router-dom";
import { About } from './components/About';
import { MoviesDashboard } from './components/MoviesDashboard';
import { Home } from './components/Home';
import { SingleMovieDetails } from './components/SingleMovieDetails';



function App() {
  return (
    <div className="App">
       <Navbar/>
      
       <Routes>
         <Route path='/' element={  <Home/> } />
         <Route path='/about' element={   <About/> } />
         <Route path='/movies' element={    <MoviesDashboard/> } />
         <Route path='/movies/:id' element={  <SingleMovieDetails/> } />
       </Routes>
        
    </div>
  );
}

export default App;
