import { useState } from "react"
import {v4 as uuid } from "uuid"

export const Func_based_todo = () =>{
    const [ input , setInput] = useState("");
    const [todo , setTodo ]   = useState([]);
    console.log(input)
    console.log(todo)

    const changeHandler = e => setInput(e.target.value)

    const submitHandler = () =>{
         setTodo([...todo, { title : input , id : uuid() } ])
         setInput("")
    }

    const deleteHandler = (ele) =>{
        console.log(ele)
       let newArr = todo.filter( a =>{
           return a.id !== ele
       })
       setTodo(newArr)
    }

     return ( <div>
                    <h1>func based todo</h1>
                    <input type="text"  value={ input } onChange={ changeHandler }/>
                    <button onClick={submitHandler}>add</button>

                    <ShowTodo arr={todo} deleteHandler={ deleteHandler} />

             </div>)
}

const ShowTodo = (props) =>{

  return <div> 

        { props.arr.map( a => {
            return <div> Title : {a.title} <br/>
                          id  : {a.id}  <br/> 
                          <button onClick={ () => props.deleteHandler(a.id)}>delete</button> </div>
        })}
  
        </div>
}