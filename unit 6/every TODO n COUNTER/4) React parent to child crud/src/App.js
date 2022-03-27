import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import {Todo } from './components/Todo'
import {Counter} from './components/Counter'
import {v4 as uuid} from 'uuid'

function App() {
   const [todo, setTodo] = useState([])
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
  const addTodo = () =>{
    setTodo([...todo, {...input  , id : uuid() }]);
    
    // setInput("")
    setInput("")
    a.current.value = null;
    b.current.value = null
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
      if(todoo.id == idd){
        todoo.a = op1 == ""? todoo.a : op1
        todoo.b = op2 == ""? todoo.b : op2
      }
    })
    
    

    const newTodo = [...todo]
    setTodo(newTodo)
  }
   
  // ------------------------------------

  const [count , setCount] = useState(0);
    const countChangeHandler = (payload) =>{
            setCount(count + payload)
    }

  return (
    <div className="App">
      <h1>React : child to parent </h1>
      <hr/>
       <Todo todo={todo} a={a} b={b} editHandler={editHandler} deleteTodo={deleteTodo} input={input} changeHandler={changeHandler} addTodo={addTodo}  />
       <Counter count={count} countChangeHandler={countChangeHandler} />
    </div>
  );
}

export default App;
