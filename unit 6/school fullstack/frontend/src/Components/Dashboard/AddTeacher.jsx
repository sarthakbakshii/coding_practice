import TextField from '@mui/material/TextField';
import "./AddTeacher.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLayoutEffect, useState } from 'react';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClass } from '../../Redux/action';
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AddTeacher = () =>{

    const navigate = new useNavigate()

    ////------ redux
    const dispatch = useDispatch()
    const classes = useSelector( store => store.class)

    const [inputValue , setInputValue] = useState({})
    const [classArray , setClassArray] = useState([])

    const changeHandler = (e) =>{

        const {name} = e.target;
        setInputValue({...inputValue , [name] : e.target.value })
    }

    const classChangeHandle = (e) =>{
         if( e.target.checked ) {
                setClassArray([...classArray, e.target.value ])
         }
         else{
             let newArr = classArray.filter( a =>{
                 return e.target.value !== a
             })
             setClassArray([...newArr])
         }
         
    }

    const submitHandler = () =>{
         let data = {...inputValue , classes : classArray}
         console.log(data)

         axios.post("http://localhost:2345/teacher" , data )
         .then( res =>{
             console.log(res);

             navigate("/dashboard")
         })
    }


    useLayoutEffect( () =>{
            axios.get("http://localhost:2345/classes")
            .then( ({data}) =>{
                dispatch( getAllClass(data) )
            })
    } , [])

    return <div className="overview"> 
                <h2>Add Teacher</h2>
                <div className="container addteacher">

                      <TextField id="outlined-basic"
                       label="Enter teacher name"
                       className='input'
                       name='name'
                       onChange={changeHandler}
                        variant="outlined" />

                      <TextField id="outlined-basic"
                       label="Enter teacher age" 
                       className='input'
                       name='age'
                        onChange={changeHandler}
                       variant="outlined" />

                      <TextField id="outlined-basic" 
                      label="Enter teacher password" 
                      className='input'
                      name='password'
                        onChange={changeHandler}
                      variant="outlined" />

                      <div className='input gender_borer'>
                        <FormControl style={{display : "flex" , flexDirection : "row" , justifyContent : "space-evenly", alignItems : "center" }}>
                           <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup style={{display : "flex" , flexDirection : "row" ,  justifyContent : "space-evenly"}}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" name='gender'  onChange={changeHandler} control={<Radio />} label="Female" />
                                <FormControlLabel value="male" name='gender'  onChange={changeHandler} control={<Radio />} label="Male" />
                              
                            </RadioGroup>
                            </FormControl>
                      
                      </div>

                      <div className=" classSelectBox">
                       <h3>Add classes</h3>
                       <div className="grid">
                        {
                                classes.map(a =>{
                                    return <div>
                                            <input type="checkbox"
                                            key={a._id}
                                            value={a._id} 
                                           name="" id="" 
                                            onChange={classChangeHandle}/> 
                                            {a.grade} {a.section} {a.subject}
                                        </div>
                                })
                            }
                       </div>
                        
                      
                      </div>

                            <Button  className=' successBtn' 
                            variant="contained" 
                            onClick={submitHandler}
                            color="success">
                                Success
                            </Button>


                      
                
                        
                </div>
           </div>
}