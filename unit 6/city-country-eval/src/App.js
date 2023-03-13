import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Componets/Nav';
import { Home } from './Componets/Home';
import { Modal } from './Componets/Modal';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from './contextApi/PageContext';
import { AddCity } from './Componets/AddCity';
import { useDispatch } from 'react-redux';
import { getCityData, getCountryData } from './Redux/action';
import axios from 'axios';
import { AddCountry } from './Componets/AddCountry';

function App() {
  const {showModal , setShowModal , refresher, setRefr} = useContext(PageContext)

  const dispatch = new useDispatch()


    const GetCity = () =>{
        axios.get("http://localhost:3001/city-list")
        .then( ({data}) =>{
            dispatch( getCityData(data) )
        })
    };

   const GetCountry = () =>{
        axios.get("http://localhost:3001/country_list")
        .then( ({data}) =>{
            dispatch( getCountryData(data) );
        })
    };

    useEffect(() => {
        GetCity();
        GetCountry();
    }, [])

  
  return (
    <div className="App">

         { showModal && <Modal/>}
        
        <Routes>
            <Route path='/' 
            element={ <>
                        <Nav/>
                        <Home/>
                      </> }
             /> 
             <Route path='/add-city' 
             element={<>
                        <Nav/>
                        <AddCity/>
                     </>}>
              </Route>  

             <Route path='/add-country' 
             element={<>
                        <Nav/>
                        <AddCountry/>
                     </>}>
             </Route> 
        </Routes>
        
    </div> 
  );
}

export default App;

