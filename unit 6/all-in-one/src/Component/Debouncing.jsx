import { useRef } from "react";
import "./Debouncing.css"

export const Debouncing = () =>{

    let timeOut = useRef()

    const debounce = (cb , delay = 1000) =>{
            clearTimeout(timeOut.current)
            timeOut.current = setTimeout( () =>{
                    console.log("after 1 sec", cb)
            }, delay )
      
    }
    const changeHandler = (e) =>{
        console.log("normal =>" , e.target.value )
        debounce(e.target.value)
    }

    return <div>
                <input onChange={changeHandler} className="input" type="text" />
                <button>search</button>
           </div>

}