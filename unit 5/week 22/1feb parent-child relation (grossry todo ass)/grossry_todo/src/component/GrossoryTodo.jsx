import { useState } from 'react';
import {GrossoryTodoInput} from './GrossoryTodoInput';
import {GrossoryShowSingleList} from './GrossoryShowSingleList';
import "./gross.css";
import {v4 as uuid} from 'uuid';



export const GrossoryTodo = () =>{

    const [todoList, setTodoList] = useState([]);

    const handleClick = (prName, qty) =>{
        // console.log(`product => ${prName}, qty => ${qty}`);
        const collection = {
            prName,
            qty,
            status : false,
            uid : uuid()
        }
        console.log(collection);
        setTodoList([...todoList, collection])
    }

    const deleteHandeler = (uuid) =>{
        let newTodoList = todoList.filter( item =>{
            return item.uid != uuid
        })
        setTodoList(newTodoList)
    }
    return (
        <div>
            <GrossoryTodoInput handleClick={handleClick} />
            <div className="showBox">
                {todoList.map( item =>{
                        return <GrossoryShowSingleList key={item.uuid} list={item} deleteHandeler={deleteHandeler} />
                    })}
            </div>
            
            
           
            
        </div>
        
    )
}