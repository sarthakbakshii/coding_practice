import logo from './logo.svg';
import './App.css';
import {Body} from './components/Body/Body'
import {Navbar} from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Body />
        <div style={{ marginTop : "250px"}}>test email : eve.holt@reqres.in</div>
    </div>
  );
}

export default App;
