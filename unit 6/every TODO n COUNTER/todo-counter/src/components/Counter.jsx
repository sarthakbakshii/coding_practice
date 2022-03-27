// import { useState } from "react"



export const Counter = () =>{

    
    return (<div>
                <hr/>
                <div className="counter">
                    <h1>counter...</h1>
                    <h1 className="countBox">{0}</h1>
                    <button id="increment" > Increment </button>
                    <button id="decrement" > Decrement </button>
                </div>
            </div>)
}