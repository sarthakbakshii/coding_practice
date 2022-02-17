import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react"
import axios from 'axios';
import { addTodo , getTodo , ascSortTodo , decsSortTodo } from '../Redux/action';
import "./Todo.css"

export const Todo = () =>{
      const todo = useSelector( (store) => store.todos );
      console.log("line 11",todo);

       const dispatch = useDispatch()


        // --------- inital get call
        
        const getTodos = () => {
            console.log("network call")
            axios.get(`http://localhost:3001/todos`)
            .then(({ data }) => {
                        dispatch( getTodo(data) );
                });
        };
        useEffect( () =>{
            getTodos()
        }, [] );

        // ---------- sorting
        const sortHandler = (data) =>{
            console.log(data, "sortHandler");
            if( data == "asc") {
                    dispatch(  ascSortTodo(true) );
                    console.log("todo ss", todo)
            }  
            if( data == "desc")  dispatch( decsSortTodo(true) );
        }

    return (
        <div className="todoBox"> 
            <h3>Todo List... 
                <select className="select" name="" id="" onChange={(e) => { sortHandler(e.target.value) }}>
                    <option value=""> sort </option>
                    <option value="asc"> sort by name A-Z </option>
                    <option value="desc"> sort by name Z-A </option>
                </select>
            </h3>


            <div className="container">

                { todo.map( a =>{
                    return  <div className="card" key={a.id}> 
                                <Link to={`/todo/${a.id}`}>   {a.title} </Link>  
                            </div> 
                })}
            
            </div>
            
        
        </div>   
    )
}