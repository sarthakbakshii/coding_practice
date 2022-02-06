
import './App.css';
import ShowData from './components/ShowData';
import {Counter} from './components/Counter';
;


function App() {
  const data = [
    {name : "sarthak", loc: "kanpur"},
    {name : "sarthak", loc: "kanpur"},
    {name : "sarthak", loc: "kanpur"}
  ]
  return (
    <div className="App">
      <h1>show data:</h1>
      <ShowData name="bakshi" loc="unknown"  /> 
      <Showdata2 name="bakshi2" loc="unknown2"  /> 
      <Counter />
    </div>
  );
}

function Showdata2(prop){
    return (
        <>
          <h2> Username : {prop.name} </h2>
          <p>location : {prop.loc} </p>
        </>
    )
 }

export default App;
