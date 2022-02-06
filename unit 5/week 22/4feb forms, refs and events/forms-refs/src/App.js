import './App.css';
import { useEffect, useRef, useState } from "react";
import Counter from './component/Counter';
import {Form} from './component/Form';
;



function App() {

  return (
    <div className="App">
      { /* <Counter /> */}
      <Form />
    </div>
  );
}



//   ==================   part 1
/*
function App() {
  const [data, setData] = useState(0)
  let myVar = useRef(10)
    console.log("myVariable", myVar);
  

  return (
    <div className="App">
       <h3>Counter : {data} </h3>
        <h3>myVar : {myVar.current} </h3>

       <button onClick={() =>{ setData( (p) => p+1 )}}>
           Change state
       </button>

       <button onClick={ () =>{
              myVar.current += 1;
            console.log("myVariable", myVar);
            }
       }>
           Change My var
       </button>

    </div>
  );
}
*/
//  ref : refrence
//  1. store a value , which we will not loose after a state change.
//  2. change in this value, will not trigger re-render

/* NOTE

useState will triger re-render 
that is why we get updated value in counter
 but 

 uerRef do no re-render

*/
export default App;
