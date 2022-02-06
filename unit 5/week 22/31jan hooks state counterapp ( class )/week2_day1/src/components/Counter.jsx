import { useState } from "react";
import "./counter.css"

export const Counter = () =>{
     const [count, setCount] = useState(1);
    //       ^   ^                      ^---- default value of count
    //       |   |--------------------------- function to change value of variable
    //       |------------------------------- variable
    
    const clickFun = (val) =>{
            console.log("clicked");
            // setCount(123) <--------------- onclick it will change the value of count to 123
          if( count < 10 ){
                setCount( count + val )
          } 
    }

    if( count === 10){
        return ( <h1>Max limit</h1> )
    }
   

    return (
        <div>   
           <h3>Counter : {count}</h3>
           <p className={count % 2 == 0 ? "red":"green"} >count is : {count % 2 === 0 ? "Even":"Odd"} </p>
           <button onClick={() => clickFun(1)}> add 1</button>
           <button onClick={() => clickFun(-1)}> dec 1</button>
        </div>
    )
}

/*  NOTE =>
  
  <button onClick={() => clickFun()}> add 1</button>
           ^-------________------^
                       |
here,
 if we use onClick={ clickFun() }
then function would have been called automaticly { do no use}
 
 if we use onClick={ clickFun }
then it will work fine, coz it need a callback

*/
const userList = [
    {user : "A", age : 1},
    {user : "A", age : 1},
    {user : "A", age : 1},
    {user : "A", age : 1}
]

return(
     <div>
        <h1> user list </h1>
         { userList.map( a => { 
            return <div> user : {a.user}, age: {a.age} </div>
         }) }
       
     
     </div>
   
)

