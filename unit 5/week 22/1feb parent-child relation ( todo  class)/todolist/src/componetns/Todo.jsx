import { useState } from "react";
import {Todoinput} from './Todoinput';
import {Todoitems} from './Todoitems';
import {v4 as uuid} from 'uuid';
;

export const Todo = () =>{
    const [todos, setTodos] = useState([])

    const handleClick = (text) =>{
        const payload = {
            title : text,
            id: uuid(),
            status: false
        }
        setTodos([...todos, payload])   
    }

     return (
        <div>
              <Todoinput handleClick={handleClick} />
              
              {todos.map( (item, i) =>{
                      return( <Todoitems 
                                 key={i} 
                                 title={item.title}
                                 status={item.status}
                                 idd={item.id} />)
                  })
              }
        </div>
    )
};
