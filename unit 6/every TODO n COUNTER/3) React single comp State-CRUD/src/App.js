import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import {Todo } from './components/Todo'
import {Counter} from './components/Counter'

function App() {
   

  return (
    <div className="App">
      <h1>React : single comp state-crud </h1>
      <hr/>

      
       <Todo/>
       <Counter/>
    </div>
  );
}

export default App;
