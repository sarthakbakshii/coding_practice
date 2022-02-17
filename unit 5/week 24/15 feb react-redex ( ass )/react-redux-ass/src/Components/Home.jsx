import { useState , useEffect } from "react"
import "./Home.css";
import { useDispatch } from 'react-redux';
import { addTodo , getTodo } from '../Redux/action';
import axios from 'axios';

export const Home = () =>{
    const [text , setText ] = useState("");
    const dispatch = useDispatch()

    return (
        <div className="form">
            <h3>Add todo...</h3>
            <input 
            value={text}
            type="text"
            className="input"
            onChange={ (e) =>{
                setText(e.target.value)
            }} />

            <button onClick={() =>{
                axios.post("http://localhost:3001/todos", {
                                                            title: text,
                                                            status: false,
                                                            })
                    .then((data) => {       dispatch( addTodo(text) ); alert("Data added") })
                               
                
                setText("")
            }}>Add</button>
        
        </div>   
    )
}

// dispatch( addTodo() );