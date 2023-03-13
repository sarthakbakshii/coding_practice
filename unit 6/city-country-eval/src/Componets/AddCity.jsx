import { useDispatch, useSelector } from "react-redux"
import "./AddCity.css"

import { useContext, useEffect, useState } from "react";
import { addCityData } from "../Redux/action";
import { useNavigate} from 'react-router-dom'

export const AddCity = () =>{

    const country = useSelector( store => store.country);
    const city = useSelector( store => store.city )
    const dispatch = new useDispatch()

    const navigate = useNavigate() 


    const [addData , setAdd ] =  useState([])
    // console.log(country , "country ")
    // console.log(addData)
    // console.log("city" , city)

    const changeHandler = (e) =>{
         const {name} = e.target;
         setAdd({...addData , [name] : e.target.value});
    }

    const submitHandler = () =>{
            dispatch( addCityData(addData) );
            navigate("/");
    }


    return <div className="AddCity"> 
                <h2>Add City ...</h2>
                <hr />
                <h3>City Name</h3>

                <input type="text" className="input"
                name="name"  
                onChange={changeHandler}
                 placeholder="Enter city name"/>

                <h3>Country Name</h3> 
                <select id="" 
                className="input"
                onChange={changeHandler}
                name="country" >
                    <option value ='' hidden disabled selected>Select Country</option>
                    {country.map( a =>{
                        return <option value={a.name} >{a.name}</option>
                    })}
                </select>

                <h3>Population</h3> 
                <input type="text" className="input" 
                 placeholder="Enter city population"
                 onChange={changeHandler}
                name="population" />

                <button onClick={submitHandler}>add</button>

    
           </div>
}