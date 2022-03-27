import { useState } from "react"


export const Counter = () =>{
    const [count , setCount] = useState(0);
    const changeHandler = (payload) =>{
            setCount(count + payload)
    }
    return (<div>
                <hr/>
                <div className="counter">
                    <h1>counter...</h1>
                    <h1 className="countBox">{count}</h1>
                    <button id="increment" onClick={() => {changeHandler(1)}}> Increment </button>
                    <button id="decrement" onClick={() => {changeHandler(-1)}}> Decrement </button>
                </div>
            </div>)
}