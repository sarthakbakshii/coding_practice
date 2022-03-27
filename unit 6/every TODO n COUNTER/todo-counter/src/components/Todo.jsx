import { useContext, useRef, useState } from 'react';
import {v4 as uuid} from 'uuid'

export const Todo = () =>{


    const [todo , setTodo] = useState([])
    const [input, setInput] = useState("")
    const a = useRef(null);
    const b = useRef(null);
    

  console.log(input)
  console.log(todo)

  const changeHandler = (e) =>{
    const {name} = e.target;
    const value = e.target.value;
     setInput({...input, [name] : value })
  }
  
  const addHandler = () =>{


        setInput("")
        a.current.value = null;
        b.current.value = null
  }





    return (<div>
                 <div className="todo">
                        <h1>todo...</h1>
                        <div className="inputBox">
                            <input type="text" ref={a} id="input" name="a" onChange={changeHandler} />
                            <input type="text" ref={b} id="input2" name="b" onChange={changeHandler}/>
                            <button id="add" onClick={addHandler} >ADD</button>
                            
                        </div>
                        <div id="displayTodo">
                        {todo.map( (item,i) =>{
                            return <div key={item.id} > {i+1} ) {item.a} {item.b } 
                                            <button >delete</button>
                                            <button>edit</button>
                            
                                    </div>
                        })}
                        </div>
                        
                    </div>
        
          </div>)
}