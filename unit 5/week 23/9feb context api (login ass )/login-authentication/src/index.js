import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {AuthContextPovider} from './context/AuthContext'

ReactDOM.render(
   <ChakraProvider>
        <AuthContextPovider>
              <React.StrictMode>
                <App />
              </React.StrictMode>       
        </AuthContextPovider>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();
