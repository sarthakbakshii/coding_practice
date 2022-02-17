
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Home} from './components/Home'
import {Navbar} from './components/Navbar'
import {UserList} from './components/UserList';
import {UserDetail} from './components/UserDetail';
import {Login} from './components/Login'

// function App() {
//   return (
//     <div className="App">
//           <Home />
//            <Contact />
//             <About />
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/> }></Route>
              <Route path='/about' element={<About/> }></Route>
              <Route path='/contact' element={<Contact/> }></Route>
              <Route path='/user' element={<UserList/> }></Route>
              <Route path='/user/:userId' element={<UserDetail/> }></Route>
              <Route path='/login' element={<Login/> }></Route>
          </Routes>
    </div>
  );
}

export default App;
