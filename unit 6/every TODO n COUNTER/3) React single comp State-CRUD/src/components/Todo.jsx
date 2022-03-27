import { useRef, useState } from 'react';

export const Todo = () =>{

    const [todo, setTodo] = useState([])
   const [input, setInput] = useState("")
   const a = useRef(null);
   const b = useRef(null);

  console.log(input)
  console.log(todo)

  const changeHandler = (e) =>{
    const {name} = e.target;
    const value = e.target.value;
     setInput({...input, [name] : value})
  }
  const addTodo = () =>{
    setTodo([...todo, input]);
    
    // setInput("")
    setInput("")
    a.current.value = null;
    b.current.value = null
  }

  const deleteTodo = (index) =>{
          const newTodo = todo.filter( (a,i) => {
            return i !== index
          })
         setTodo(newTodo)   
  }

  const editHandler = (index) =>{
        
    const op1 = prompt("Enter first data if wnat to edit or Leave it to continue")
    const op2 = prompt("Enter second data if wnat to edit or Leave it to continue")
     
    
    todo[index].a = op1 == ""? todo[index].a : op1
    todo[index].b = op2 == ""? todo[index].b : op2

    const newTodo = [...todo]
    setTodo(newTodo)
  }


    return (<div>
                

                    <div className="todo">
                        <h1>todo...</h1>
                        <div className="inputBox">
                            <input type="text" ref={a} id="input" name="a" onChange={changeHandler} />
                            <input type="text" ref={b} id="input2" name="b" onChange={changeHandler}/>
                            <button id="add" onClick={addTodo} >ADD</button>
                            
                        </div>
                        <div id="displayTodo">
                        {todo.map( (item,i) =>{
                            return <div> {i+1} ) {item.a} {item.b}
                                            <button onClick={() => { deleteTodo(i)}}>delete</button>
                                            <button onClick={() => { editHandler(i)}}>edit</button>
                            
                                    </div>
                        })}
                        </div>
                        
                    </div>
        
          </div>)
}