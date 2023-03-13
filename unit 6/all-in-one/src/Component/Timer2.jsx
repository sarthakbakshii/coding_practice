import { useState ,useEffect, useRef } from "react"
export const Timer2 = () =>{
    const [time, setTime] = useState({min:0 , sec : 0});
    const ref = useRef(null);

    const startHandler = () => {
      ref.current = setInterval(() => {
           setTime( prev =>{
               if(prev.sec == 59){
                   return {...prev, min : prev.min + 1 , sec : 0 }
               }
               else{
                   return {...prev,sec : prev.sec + 1 }
               }
               
           })
       }, 100);   
      
    }
    const stopHandler = () =>{
        return clearInterval(ref.current)
    }
    
    const resetHandler = () =>{
        stopHandler();
        setTime({min:0 , sec : 0})
    }

    
    return <div> 
                    <h1>{time.min} : {time.sec}</h1>
                    <button onClick={startHandler} >Start</button> TIMER WITH BUTTON 
                    <button onClick={stopHandler} >Stop</button>   <br/>
                    <button onClick={resetHandler}>reset</button>
           </div>
}