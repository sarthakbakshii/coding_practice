import "./Modal.css";
import { FiXCircle } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../contextApi/PageContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { editCityData, getCityData } from "../Redux/action";

export const Modal = () =>{

    const country = useSelector( store => store.country );
    const modalData = useSelector( store => store.modalData );
    const dispatch = useDispatch()

    const  {showModal , setShowModal} = useContext(PageContext);

    const [data , setData] = useState(modalData)
      console.log(data)




    const CancleHandler = () =>{
        setShowModal(false)
    }



    const changeHandler = (e) =>{
         const {name} = e.target;
         setData({...data , [name] : e.target.value});
      

    }

    const saveHandle = (id) =>{
        axios.patch(`http://localhost:3001/city-list/${id}` , data )
        .then(
            dispatch( editCityData(data) )
        )
        .then(   
            CancleHandler()
        )
        
        
    }

    return <div className="modal">
                <div className="container">
                      <div className="top">
                          <FiXCircle onClick={CancleHandler} />
                      </div>
                     <h3>City name</h3>
                     <input type="text" defaultValue={modalData.name} name="name" onChange={changeHandler} />

                     <h3>Country name</h3>
                     <select id="" name="country"  onChange={changeHandler} >
                           {country.map( a =>{
                               return <option defaultValue={a.name} selected={ modalData.country == a.name ? true : false} >

                                        {a.name}
                               </option>
                           })}
                            
                     </select>

                      <h3>population</h3>
                     <input type="text"  defaultValue={modalData.population} name="population"  onChange={changeHandler} />


                     <button onClick={() => saveHandle(modalData.id)}>save</button>

                
                </div>
           </div>
}