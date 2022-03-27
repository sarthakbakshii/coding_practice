import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TodoConextProvider} from './Context/TodoContext'
import {CounterContextProvider} from './Context/CounterContext'

ReactDOM.render(
  <React.StrictMode>
    <TodoConextProvider>
      <CounterContextProvider>
         <App />
      </CounterContextProvider>
       
    </TodoConextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
