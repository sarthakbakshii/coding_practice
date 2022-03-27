import { useState } from "react"


export const Counter = ({ count , countChangeHandler}) =>{
    
    return (<div>
                <hr/>
                <div className="counter">
                    <h1>counter...</h1>
                    <h1 className="countBox">{count}</h1>
                    <button id="increment" onClick={() => {countChangeHandler(1)}}> Increment </button>
                    <button id="decrement" onClick={() => {countChangeHandler(-1)}}> Decrement </button>
                </div>
            </div>)
}