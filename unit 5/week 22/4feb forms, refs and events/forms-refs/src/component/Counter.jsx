import { useEffect, useRef, useState } from "react";

function Counter() {
  const [data, setData] = useState(0)

  const timeRef = useRef();
  const myRef = useRef(data);
  
  useEffect( () =>{
    startTimer()
  } , [] );

  const startTimer = () =>{
      timeRef.current =  setInterval( () =>{
                            setData( p => p+1);
                            myRef.current += 1;
                            console.log(data, myRef.current, 1);
                          },500)
  }
   
  

  return (
    <div >
       <h3 style={
         {color : "red",
        backgroundColor : "#fffe"}
       }>Counter : {data} </h3>

       <button onClick={() =>{ clearInterval(timeRef.current) }}>
           pause
       </button>

       <button onClick={ () =>{ 
         clearInterval(timeRef.current) 
        startTimer()
            }
       }>
         start
       </button>

       <button onClick={ () =>{ 
          setData(0);
         clearInterval(timeRef.current)
            }
       }>
         reset
       </button>

    </div>
  );
    }
export default Counter;
    