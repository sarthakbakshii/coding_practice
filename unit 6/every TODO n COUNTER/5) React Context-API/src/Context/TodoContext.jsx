import { createContext, useState } from "react";
import { useRef } from 'react';
import {v4 as uuid} from 'uuid';


export const TodoContext = createContext();
export const TodoConextProvider = ({children}) =>{


     const [todo, setTodo] = useState([])
     const [input, setInput] = useState("")
        const a = useRef(null);
        const b = useRef(null);

const addTodo = (data) =>{
       setTodo([...todo, data]);
  }

const deleteTodo = (idd) =>{
          const newTodo = todo.filter( (a,i) => {
            return a.id !== idd
          })
         setTodo(newTodo)   
  }

  const editHandler = (idd) =>{
        
    const op1 = prompt("Enter first data if wnat to edit or Leave it to continue")
    const op2 = prompt("Enter second data if wnat to edit or Leave it to continue")
    
    todo.map( todoo =>{
      if(todoo.id === idd){
        todoo.a = op1 === ""? todoo.a : op1
        todoo.b = op2 === ""? todoo.b : op2
      }
    })
    
    const newTodo = [...todo]
    setTodo(newTodo)
  }

    const [text , setText] = useState("sasa")
    return (
        <TodoContext.Provider value={{todo, setTodo, addTodo, deleteTodo,editHandler }}>
            {children}
        </TodoContext.Provider>
    )
}
