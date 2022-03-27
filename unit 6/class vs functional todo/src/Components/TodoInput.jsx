import React from "react"
import "./input.css";

class TodoInput extends React.Component{

    constructor(){
        super();
        this.state = {
                name : "sarthak"
        }
        this.refs = {
            count : "s"
        }
         console.log( this.state.name )
    }

   

    render(){
    return <div className = "todoInput">
                <div className="top">
                        <input type="text" className="topic"  defaultValue={this.state.name}  placeholder="enter Topic" />
                        <button className="submit" onClick={ () =>{
                            alert("working");
                            this.setState({  name : "birzuu" } , () => 
                                         console.log(this.state.name) );
                        }}> submit </button>
                </div>
                <textarea name="" id="" className="des" cols="30"placeholder="Enter description" rows="3"></textarea>
            </div>

    }
}
export { TodoInput }

// export const TodoInput = () =>{
//     return <div className = "todoInput">
//                 <div className="top">
//                         <input type="text" className="topic" placeholder="enter Topic" />
//                         <button className="submit"> submit </button>
//                 </div>
                
//                 <textarea name="" id="" className="des" cols="30"placeholder="Enter description" rows="3"></textarea>
//             </div>
// }