import "./Overview.css"

//-------------- table material 

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeacher } from "../../Redux/action";

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';


//-------------- table material 


export const Overview = () =>{

    const navigate = new useNavigate()

    // ----- redux
    const teacher = useSelector( store => store.teacher )
    const dispatch = useDispatch()

    console.log(teacher , "teacher" );



    useEffect( () =>{
            let loginData = JSON.parse( sessionStorage.getItem("loginData")  );
            if( loginData ){
                navigate("/dashboard")
            }
            else{
                navigate("/")
            }
    }, []);

    useEffect( () =>{
        axios.get("http://localhost:2345/teacher")
        .then( ({data}) => {
            console.log(data)
            dispatch( getAllTeacher(data) )
        })
    }, [])


    return <div className="overview"> 
                <h2>Overview</h2>
                <div className="container">

                <h3>Teachers list</h3>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell> Faculty name </TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center"> Class</TableCell>
                        <TableCell align="center"> Section</TableCell>
                        <TableCell align="center"> Subject </TableCell>
                        <TableCell align="center"> modify </TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>

                    {teacher.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.age}</TableCell>
                        <TableCell align="center">{row.gender}</TableCell>
                        <TableCell align="center">
                            {row.classes.map( a =>{
                                return <div key={a._id} > {a.grade} </div>
                            })}
                        
                        </TableCell>
                        <TableCell align="center">
                            {row.classes.map( a =>{
                                return <div key={a._id}> {a.section} </div>
                            })}
                        
                        </TableCell>
                        <TableCell align="center">
                            {row.classes.map( a =>{
                                return <div key={a._id}> {a.subject} </div>
                            })}
                        
                        </TableCell>
                            <TableCell align="center">
                                <DeleteTwoToneIcon
                                 sx={{ fontSize: 26 }}
                                 className="DeleteBtn"/>
                            </TableCell>
                               
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                        
                </div>
           </div>
}