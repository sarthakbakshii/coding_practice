import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo } from '../Redux/action';
import {v4 as uuid} from 'uuid'


const Todo = () =>{
  const entireStore = useSelector( (store) => store.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const changeHandler = (e) =>{
      setTitle(e.target.value)
  } 

  const addHandler = () =>{
      const payload = {
          title,
          id : uuid(),
          status : false
      }
      dispatch( addTodo(payload));
      setTitle("")
     
  }

  console.log(entireStore)


    return (
        <div>
             <h1> Todo  </h1>
             <input type="text"
             value={title}
             onChange={changeHandler}/>

            <button 
            onClick={addHandler}>
             Add
            </button>
            <div>
                {entireStore.map( a => {
                    return (
                           <div> 
                              {a.title} 
                           </div>
                           )
                })}
            </div>

        </div>
    )
}
export { Todo }