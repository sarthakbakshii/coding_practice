import { useEffect, useState } from "react"

function Counter() {
  const [data, setData] = useState([])
  console.log(1);

  useEffect( () =>{
    console.log(2);
    fetch("http://localhost:3001/users")
      .then( (d) => d.json())
        .then( (res) =>{
          console.log("responce : ", res);
          setData(res)
        })
  },[])

  console.log(3);
  return (
    <div className="App">
       hello
       {data.map( a => {
         return <div> {a.name} </div>
       })}
    </div>
  );
}

export default Counter;
