import logo from './logo.svg';
import './App.css';
import { Timer } from './Component/Timer';
import { Timer2 } from './Component/Timer2';
import { useCustomHook } from './Component/useCustomHook';
import { useState } from 'react';
import { Debouncing } from './Component/Debouncing';
import { Calander } from './Component/Calander';

function App() {
  const getVal = useCustomHook()
  const text = getVal("search")

  return (
    <div className="App">
      {/*  <Timer/>  */}
      {/*  <Timer2/>  */}
      {/*  custom hook : {text}  */}
      {/*   <Debouncing/>   */}
      <Calander/>

    </div>
  );
}

export default App;
