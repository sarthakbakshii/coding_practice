import "./Navbar.scss";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useContext } from "react";
import {AuthContext} from '../../context/AuthContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Navbar = () =>{
    const {Auth, AuthToken, toggleAuth} = useContext(AuthContext);
    
    console.log(`Auth ${Auth}, AuthToken ${AuthToken.email} ${AuthToken.token}`)

    return  <div className="navbar">
                <div className="Logo">Login Assigiment</div>
                <div className="signup-sec"> 
                    <h2> <AccountCircleIcon style={{ display : Auth? "flex":"none"  }} /> {Auth? ` ${AuthToken.email} `:null}  </h2>
                    
                    <Button className="button-login" colorScheme='blue' onClick={() =>{
                        if(Auth){
                            toggleAuth()
                        }else{
                            alert("Please fill input details first...")
                        }
                    }}> {Auth?"Logout":"Login"} </Button>
                </div>
            </div> 
}