import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClass } from '../../Redux/action';
import { Checkbox } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./AddTeacher.css"
import "./AddClass.css"
import { useState } from 'react';


export const AddClass = () =>{

    const navigate = new useNavigate()

    const [inputField , setInputFiel] = useState({})
    console.log("inputField" , inputField)

    const changeHandler = (e) =>{
        const {name} = e.target;
        setInputFiel(prev => ({...prev , [name] : e.target.value}) )

    }

    const submitHandler = () =>{
        axios.post("http://localhost:2345/classes" , inputField)
        .then( ({data}) =>{
            console.log(data)
            navigate("/dashboard/add-teacher")
        })
    }
    return <div className="overview "> 
                <h2>Add class</h2>
                <div className="container addClass">

                     <FormControl className='input'>
                        <InputLabel id="demo-simple-select-label">Select class</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select class"
                        name='grade'
                        onChange={changeHandler}
                        >
                        
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12].reverse()
                            .map( a =>{
                                return <MenuItem key={a} value={a}>{a}</MenuItem> 
                            })
                        }
                        </Select>
                    </FormControl>

                    <div className='input gender_borer grid'>
                        <FormControl style={{display : "flex" , flexDirection : "row" , justifyContent : "space-evenly", alignItems : "center" }}>
                           <FormLabel id="demo-row-radio-buttons-group-label"> Select section</FormLabel>
                            <RadioGroup style={{display : "flex" , flexDirection : "row" ,  justifyContent : "space-evenly"}}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="A" 
                                name='section'  onChange={changeHandler} 
                                control={<Radio />} label="A" />

                                <FormControlLabel value="B" 
                                name='section'  onChange={changeHandler} 
                                control={<Radio />} label="B" />

                                <FormControlLabel value="C" 
                                name='section'  onChange={changeHandler} 
                                control={<Radio />} label="C" />

                                <FormControlLabel value="D" 
                                name='section'  onChange={changeHandler} 
                                control={<Radio />} label="D" />
                               
                              
                            </RadioGroup>
                            </FormControl>
                      
                    </div>

                     <TextField id="outlined-basic" 
                     label="Enter subject"
                     className='input'
                     name='subject'
                     onChange={changeHandler}
                      variant="outlined" />

                 <Button variant="contained"
                 className='input successBtn' 
                 onClick={submitHandler}
                  color="success">
                    Save
                </Button>

                
                        
                </div>
           </div>
}