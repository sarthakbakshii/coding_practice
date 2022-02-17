import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import "./Details.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table , Form } from 'react-bootstrap';
import BuildIcon from '@mui/icons-material/Build';
import { Link , Navigate , useNavigate  } from "react-router-dom";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from "../Redux/action";

export const Edit = () =>{
      const { id } = useParams();
      const [SpecificData , setSpecificData] = useState({})
      const dispatch = useDispatch()
      const navigate =  useNavigate()


    // ------------------------------ redux will give data for specific todo
    const todo = useSelector( (store) => store.todos );
    console.log("store in edit page",todo);

    const finterTodo = () =>{
        if(todo.length > 0){
              const temp = todo.filter( a=> a.id == id)
             setSpecificData(temp[0])
        }
    }
    useEffect( () =>{   finterTodo()    } , [] )


    // ----------------------------------- network call to get specific data 
    //-----  on refresh if store is not giving any data then we will get it by network call

    if( todo.length === 0  ){

        console.log("backup is running")

        const getTodos = () => {
            axios.get(`http://localhost:3001/todos/${id}`)
            .then(({ data }) => {
                        setSpecificData(data)
                });
        };
        useEffect( () =>{
                    getTodos()
        }, [] )
    }

    // ----------------------------- edit options
    const changeHandler = (e) =>{
        const {name} = e.target;
        setSpecificData( {...SpecificData, [name] : e.target.value})
    }

    console.log("SpecificData in edit page", SpecificData )

    // --------------------------- onsubmit

    const submitHandler = () =>{

        if (confirm("Are you sure ..??") == true) {
            axios.patch(`http://localhost:3001/todos/${id}`,SpecificData)
            .then( res => {
                console.log("updated", res.data);

                dispatch( updateTodo(res.data))  
                alert( "data updated");

                navigate(-1)

            })
        }
    }
    const deleteHandler = () =>{

        if (confirm("Are you sure ..??") == true) {
            axios.delete(`http://localhost:3001/todos/${id}`)
            .then( res => {
                alert( "data Deleted");
                navigate("/todo")
            })
        }
    }



    return (
        <div className="detail"> 
         <h3> Edit... </h3> 
        <form onSubmit={(e) =>{
            e.preventDefault();
            submitHandler()
        }} >  
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th className="TD3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>   {SpecificData.id} </td>
                                <td className="TD2"> <input type="text" name="title" onChange={(e) => { changeHandler(e) } }  className="inputBox" defaultValue= {SpecificData.title} />  </td>
                                <td className="flex TD3">  
                                        <Form.Check 
                                            onChange={(e) =>{
                                                 console.log(  e.target.value );
                                                 if( e.target.value == "on" ){
                                                     e.target.value = "off"
                                                     setSpecificData( {...SpecificData, status : false  })
                                                 }
                                                 else if( e.target.value == "off" ){
                                                     e.target.value = "on"
                                                     setSpecificData( {...SpecificData, status : true  })
                                                 }
                                                 
                                            } }
                                           
                                            checked={SpecificData.status}

                                            name="status"
                                            type="switch"
                                            id="custom-switch"
                                            label={SpecificData.status?"done":"not done"}
                                        /> 
                                </td>
                            </tr>
                            
                        </tbody>
                </Table>

                 <Button variant="contained" type="submit" color="success">
                                            Save
                 </Button>
                    <Button style={{marginLeft : "50px"}} variant="outlined" color="error" onClick={deleteHandler}>
                                            DELETE
                    </Button>
            </form>
        </div>   
    )
}