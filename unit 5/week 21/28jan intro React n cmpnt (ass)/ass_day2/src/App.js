import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    os : ["android","blackberry","iphone","windos"],
   manufactures : ["samsung","htc","micromax","apple"]
  } 

  return (
      <div className="App">
          <Card heading={"mobile os"} arrayl={data.os} customCss={false} />
             <Card heading={"mobile os"} arrayl={data.os} customCss={true} />
          <Card heading={"mobile manufactures"} arrayl={data.manufactures}  customCss={true}/>
      </div>
  );

  function Card(prop){
    let customCssTypeA = prop.customCss? "li-circle": "li-disk";
    let customCssTypeB = prop.customCss? "li-square": "li-disk";
    let defaultCss     = "li-disk";
    let myCss
    return (<>
                <h1> {prop.heading} </h1>
                <ul className="ul">
                    {prop.arrayl.map( (a,i) => {
                      {if(i == 3) myCss = customCssTypeA ;
                      else if(i == 1 || i == 0) myCss = customCssTypeB;
                      else myCss = defaultCss }
                      
                      return <li className={myCss} > {a} </li>
                    })}
                </ul>
            </>)
  }

  const user = [
    {name : "a", age:1 },
    {name : "b", age:2 },
    {name : "c", age: 3},
    {name : "d", age:4 },
    {name : "e", age:5 },
    {name : "f", age:6 }
    
  ]
/*
  // return (
  //     <div className="App">
  //         {user.map(a => {
  //           // return  Userdata(a)
  //           return  <Userdata nameProp={a.name} ageProp={a.age}/>
  //         })}
  //     </div>
  // );
  
  // // ----- component 
  // function Userdata(props){
  //   return ( <div>
  //               <h3> hello {props.nameProp} </h3>
  //               <p>age : {props.ageProp}</p>
  //               <hr />
  //             </div>
  //           )
  // }

*/
  // ============================== to reuse code ^
  //   return (
  //     <div className="App">
  //         {user.map(a => {
  //           return ( <div>
  //                       <h3> hello {a.name} </h3>
  //                       <p>age : {a.age}</p>
  //                       <hr />
  //                     </div>
  //           )
  //         })}
  //     </div>
  // );

  // return (
  //     <div className="App">
  //         {user.map(a => {
  //           return <h1>{a.name} and {a.age}</h1>
  //         })}
  //     </div>
  // );

  // return (
  //     <div className="App">
  //         {data.os.map( a => {
  //           return <h4>{a}</h4>
  //         })}
  //         <hr />
  //         {data.manufactures.map( a => {
  //           return <h4>{a}</h4>
  //         })}
  //     </div>
  // );
}



export default App;
