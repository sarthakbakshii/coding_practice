import "./Login.css";
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
// import Swal from "sweetalert2";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const navigate = new useNavigate()

    const [text , setText] = React.useState({uname : "" , pass : ""})
    console.log(text)
    const ref = React.useRef("")

    const clearHandler = () =>{
        setText( prev => ({...prev , uname : "" , pass : ""}))
    }

    const changeHandler = (e) =>{
       const {name} = e.target;
       setText( prev => ({...prev , [name] : e.target.value}))
    }

    const submitHandler = () =>{
        let data = {
            username : text.uname,
            password : text.pass
        }
        axios.post("http://localhost:2345/login" ,data )
        .then( ({data}) => {
            console.log(data )
            Swal.fire({
                icon: 'success',
                title: 'Welcome Admin',
                text: 'Aoo padharo mare desh !'
                });

            sessionStorage.setItem("loginData" , JSON.stringify(data) );
            navigate("/dashboard")

        })
        .catch( e =>{
            console.log(e);

            Swal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: 'No user found!',
               
                })
        })

        clearHandler()
        
    }

   

    return <div className="Login">
                 <div className="container">
                    <div className="subContainer">
                                <h1>Log in</h1>
                                <hr/>
                                 <TextField 
                                 ref={ref}
                                 name = "uname"
                                 value={text.uname}
                                 onChange={changeHandler}
                                  className="input" 
                                  id="demo-helper-text-misaligned-no-helper" 
                                  label="Enter username"
                                   />
                                  <TextField 
                                  ref={ref}
                                  name = "pass"
                                  value={text.pass}
                                  className="input" 
                                  onChange={changeHandler}
                                  id="demo-helper-text-misaligned-no-helper" 
                                  label="Enter password" />

                                    <Button 
                                    onClick={submitHandler}
                                    className="input btn" color="secondary" 
                                      variant="outlined">Log in</Button>
                    </div>
                 </div>
           </div>
}
