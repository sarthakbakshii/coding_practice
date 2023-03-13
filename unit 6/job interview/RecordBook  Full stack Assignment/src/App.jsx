import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Newentry from './components/Newentry';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <h1>College Allotment System</h1>
      <Home/>
      {/* <Newentry/> */}
      {/* <Result/> */}
    </div>
  );
}

export default App;
