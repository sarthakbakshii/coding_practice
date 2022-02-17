import { useState } from "react"
import { useSelector} from 'react-redux'


const TodoList = () =>{
    // useDispatch
    // ?useSelect

    const todos = useSelector( (state) => state.todos);
    console.log(todos)


    return (
        <div>
            {todos.map( a =>{
                return ( <div key={a.id}> {a.id} ). { a.title } </div>)
            })}
        </div>
    )
}

export { TodoList  }