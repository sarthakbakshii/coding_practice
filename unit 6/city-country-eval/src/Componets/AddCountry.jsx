import { useDispatch, useSelector } from "react-redux"
import "./AddCity.css"

import { useContext, useEffect, useState } from "react";
import { addCityData, addCountryData } from "../Redux/action";
import { useNavigate} from 'react-router-dom'

export const AddCountry = () =>{

    const country = useSelector( store => store.country);
    const city = useSelector( store => store.city )
    const dispatch = new useDispatch()

    const navigate = useNavigate() 

    const [addData , setAdd ] =  useState([])
    // console.log(country , "country ")
    console.log(addData)
    console.log("country" , country)

    const changeHandler = (e) =>{
         const {name} = e.target;
         setAdd({...addData , [name] : e.target.value});
    }

    const submitHandler = () =>{
            dispatch( addCountryData(addData) );
            navigate("/");
    }


    return <div className="AddCity"> 
                <h2>Add Country ...</h2>
                <hr />
                <h3>Country Name</h3>

                <input type="text" className="input"
                name="name"  
                onChange={changeHandler}
                 placeholder="Enter country name"/>

                

                <button onClick={submitHandler}>add</button>

    
           </div>
}