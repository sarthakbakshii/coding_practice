import { useRef, useState } from 'react';

export const Todo = ({deleteTodo,a , b, editHandler, todo , input , addTodo , changeHandler}) =>{



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
                            return <div key={item.id} > {i+1} ) {item.a} {item.b}
                                            <button onClick={() => { deleteTodo(item.id)}}>delete</button>
                                            <button onClick={() => { editHandler(item.id)}}>edit</button>
                            
                                    </div>
                        })}
                        </div>
                        
                    </div>
        
          </div>)
}