import logo from './logo.svg';
import './App.css';

function App() {
  const varur = "with full dil se"
  return (
    <div className="App">
      hello world {varur}

      {[1,2,3,4].map(e => {
        return <h1> array value {e}</h1>
      })}
      <br/>

      
      
    </div>
  );
}

export default App;
