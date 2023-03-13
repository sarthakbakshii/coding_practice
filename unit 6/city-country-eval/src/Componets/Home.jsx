import "./Home.css";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { PageContext } from "../contextApi/PageContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteCity, getCityData, modalData, sortCity } from "../Redux/action";

import { BsFillHandIndexFill } from "react-icons/bs";

export const Home = () =>{

      const  {showModal , setShowModal} = useContext(PageContext)
      const city = useSelector(store => store.filteredCity);
      const dispatch = new useDispatch();

      console.log(city , "city")

      const sortHandler = (val) =>{
        dispatch( sortCity(val) )
      }
     

    const EditHanndler = (val) =>{
          dispatch( modalData(val) )
          setShowModal(true)
    }

    const deleteHandle = (id) =>{
          axios.delete(`http://localhost:3001/city-list/${id}`)
          .then( alert("deleted"))

          dispatch( deleteCity(id) )
    }
   


    


    return <div className="home">

      <Table aria-label="simple table" className="table">
        <TableHead>
          <TableRow>

            <TableCell className="flex">  
                      <BsFillHandIndexFill className="sortIcon up"  onClick={() => sortHandler("asc_name")} /> 
                      City name 
                      <BsFillHandIndexFill  className="sortIcon down"   onClick={() => sortHandler("desc_name")} />  
            </TableCell>

            <TableCell align="right">  
                 <BsFillHandIndexFill className="sortIcon up"  onClick={() => sortHandler("asc_country")} /> 
                 Country
                 <BsFillHandIndexFill  className="sortIcon down"   onClick={() => sortHandler("desc_country")} /> 
            </TableCell>

            <TableCell align="right">
                 <BsFillHandIndexFill className="sortIcon up"  onClick={() => sortHandler("asc_pop")} /> 
                 Population
                <BsFillHandIndexFill  className="sortIcon down"   onClick={() => sortHandler("desc_pop")} />  
            </TableCell>

            <TableCell align="center"> 
                  
                  Editor 
                  
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {city.map( a => (

            <TableRow key={a.id}>
              <TableCell component="th" scope="row">
                {a.name}
              </TableCell>
              <TableCell align="right">{a.country}</TableCell>
              <TableCell align="right">
                {a.population}
             </TableCell>

             <TableCell align="right">
                      <EditIcon color="primary" className="icon"
                      onClick={ () =>{ EditHanndler(a) }} />

                      <DeleteIcon color="secondary" onClick={() =>{ deleteHandle(a.id) }}  className="icon"/>

             </TableCell>

            

            </TableRow>
          ))}

        </TableBody>
      </Table>

           </div>
}