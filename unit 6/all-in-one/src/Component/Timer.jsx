import { useState ,useEffect, useRef } from "react"
export const Timer = () =>{
    const [time, setTime] = useState({min:0 , sec : 0});
    const ref = useRef(null);

    const startHandler = () => {
      ref.current = setInterval(() => {
           setTime( prev =>{
               return {...time,sec : prev.sec + 1 }
           })
       }, 1000);   
    }

    const stopHandler = () =>{
        return clearInterval(ref.current)
    }

    const resetHandler = () =>{
        stopHandler();
        setTime({min:0 , sec : 0});
    }

    useEffect( () =>{
        startHandler();
        return () => stopHandler()
    })
    
    return <div> 
                    <h1>{time.min} : {time.sec}</h1>
                    TIMER WITH USE-EFFECT 
                    <hr/>
           </div>
}