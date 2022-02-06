
import './App.css';
import { useEffect, useState } from "react"
import Counter from './components/counter';
import Todo from './components/Todo';
;



function App() {
  
  return (
    <div className="App">
      {/* <Counter />   */}
      <Todo />
    </div>
  );
}

export default App;
