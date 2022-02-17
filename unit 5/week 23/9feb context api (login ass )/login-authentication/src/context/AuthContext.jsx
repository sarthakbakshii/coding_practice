import {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const AuthContext = createContext();
export const AuthContextPovider = ({children}) =>{

    const [Auth, setAuth] = useState(false);
    const [AuthToken, setAuthToken] = useState("");

    const toggleAuth = () =>{
        setAuth(!Auth)
    }
    
    const loginHandler = (data) =>{

        let formDAta = { email : data.email, password : data.password}
        
        // console.log("formdata handler contex", formDAta)
        
                    axios.post("https://reqres.in/api/login",formDAta)
                    .then( res =>{ 
                            console.log(res)
                            alert(`Welcome ${data.email}`)
                            setAuth(true);
                            setAuthToken({ token : res.data.token , email : data.email } )
                            // console.log({ Auth, AuthToken})
                    }).catch( e =>{
                        console.log(e)
                        alert("no user found")
                        setAuth(false);
                        setAuthToken("")
                        // console.log({ Auth, AuthToken})
                    })

        console.log("automatic calling test 1")
        console.log({mesage:"automatic calling test 2",  Auth, AuthToken})
        console.log("automatic calling test 3")
                  
    }
    
    return (
        <AuthContext.Provider value={ {Auth, AuthToken, loginHandler, toggleAuth} }>
                {children}
        </AuthContext.Provider>
    )
}