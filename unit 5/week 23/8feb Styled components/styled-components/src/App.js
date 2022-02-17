import Button from './components/Button';
import './App.css';
import { useState } from 'react';
import {ButtonN} from './components/ButtonN';


function App() {
  const [theme, setTheme] = useState("light")
  const [theme2, setTheme2] = useState("light")
  console.log(theme);

  return (
    <div className="App">
      <ButtonN> styled component </ButtonN>

      <Button onClick={() => {
          setTheme2( theme2 === "light"? "dark" : "light")
        }} theme={theme2}> component button </Button>

        <br/>

        <button style={{
            padding : "5px 10px",
            marginTop : "10px",
            fontSize : "20px",
            background : theme === 'light'? "black":"white",
            color : theme === 'light'? "white":"black"

        }} onClick={() => {
          setTheme( theme === "light"? "dark" : "light")
        }}>
          html button
        
        </button>
    </div>
  );
}

export default App;
