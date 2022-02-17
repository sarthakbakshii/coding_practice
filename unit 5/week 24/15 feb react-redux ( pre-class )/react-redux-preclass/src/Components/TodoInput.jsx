import { useState } from "react"
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addTodo } from '../Redux/action'

const TodoInput = () =>{
    const [title , setTitle ] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () =>{
        const payload = {
            title,
            status : false,
            id : uuid()
        };
        const addTodoAction = addTodo(payload);
        dispatch( addTodoAction )
    }
    return (
        <div>
            <h3> Add todo</h3>
            <input type="text"  
            placeholder="add something..."
            onChange={ (e) => setTitle(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export { TodoInput  }