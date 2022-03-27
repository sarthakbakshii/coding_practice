import react , { Component } from "react";
import {v4 as uuid } from "uuid"

class Class_based_todo extends Component {

    constructor(props){
        super(props);

        this.state = {
            input : "",
            todo : []
        }

         
    }

    changeHandler = (e) =>{
        this.setState( {
            input : e.target.value
        })
    }

    submitHandler = (e) =>{
        this.setState( {
            input : "",
            todo : [...this.state.todo , { title : this.state.input , id : uuid() } ]
        })

       console.log(this.state.todo)
    }

    deleteHandler = (a) =>{
         let old = [...this.state.todo]
            let arr = old.filter( item =>{
                return item.id !== a
            })

            this.setState( {
                todo : [...arr]
            })
    }
   
    
    render(){
        return <div>
                        <h1>class based todo </h1>
                        <input type="text" value={this.state.input}
                        onChange={this.changeHandler } />

                        <button onClick={this.submitHandler}> click </button>
                        
                        { this.state.todo.map( a =>{
                                return <div key={a.id}>
                                            Title : {a.title} <br/>
                                            id  : {a.id}  <br/>

                                             <button onClick={ () => {
                                                 this.deleteHandler(a.id);
                                                }  }>
                                                        delete
                                             </button> 
                                             <hr/>
                                       </div>
                            })}

               </div>
    }
}

export { Class_based_todo }