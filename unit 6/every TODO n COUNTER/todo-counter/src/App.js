
import './App.css';
import {  useState } from 'react';
import {Todo } from './components/Todo'
import {Counter} from './components/Counter'


function App() {
  
   
  // ------------------------------------

  const [count , setCount] = useState(0);
    const countChangeHandler = (payload) =>{
            setCount(count + payload)
    }

  return (
    <div className="App">
      <h1>React : context api </h1>
      <hr/>
       <Todo />
       <Counter count={count} countChangeHandler={countChangeHandler} />
    </div>
  );
}

export default App;
