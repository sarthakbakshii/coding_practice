import { Button, ButtonGroup } from '@chakra-ui/react';
import { Input, InputGroup,InputRightElement  } from '@chakra-ui/react'
import { useContext, useState } from 'react';

import {AuthContext} from '../../context/AuthContext'

import "./Body.scss";

export const Body = () =>{

    // ---- context data
    const {loginHandler} = useContext(AuthContext)



    // ----------------- component data
    
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [formData, setFormData] = useState({
        email : "",
        password : ""
     });

    const handleChange = (e) => {
        const {name} = e.target;
        // console.log("targeting =>" , {name} );
        setFormData({
            ...formData,
            [name] : e.target.value
        });
        // console.log(formData)
    }
    
    const submitForm = () =>{
        console.log("submit =>",formData);
        loginHandler(formData);
    }

    return ( <div className="container">
                <h3>Log-in</h3>
                <form className="formBox" onSubmit={
                    (e) =>{
                        e.preventDefault();
                        submitForm();
                        e.target.email.value = "";
                        e.target.password.value = ""
                    }
                }>
                    <div className="form-group">
                        <label htmlFor="email">Enter email : </label>
                       {/* <input type="text" className="inputfield" name="email" id="email" />  */}
                        <Input  size='md' name="email" id="email" onChange={ (e) => {
                            handleChange(e)
                        }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter password : </label>
                       {/*  <input type="text" className="inputfield" name="email" id="email" />  */}

                        <InputGroup size='md'>
                            <Input name="password" id="password"
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onChange={ (e) =>   handleChange(e) }
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                    </div>

                    <Button type='submit'  className="button-login" style={{width : "100%"}} variant="outlined">Login</Button>
                </form>

                
    </div> )
}