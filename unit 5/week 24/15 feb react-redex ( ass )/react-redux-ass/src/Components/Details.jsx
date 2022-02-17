import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import "./Details.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table , Form } from 'react-bootstrap';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from "react-router-dom";

export const Details = () =>{
    const { id } = useParams();


    // ------- network call for geting specific data

    const [SpecificData , setSpecificData] = useState("")

    const getTodos = () => {
            axios.get(`http://localhost:3001/todos/${id}`)
            .then(({ data }) => {
                            console.log(data)
                        setSpecificData(data)
                });
        };

    useEffect( () =>{
                    getTodos()
    }, [] )
        // console.log("SpecificData in details page",SpecificData)

    return (
        <div className="detail"> 
         <h3> Details... </h3> 
            
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
                                <td> {SpecificData.id} </td>
                                <td className="TD2">   {SpecificData.title} </td>
                                <td className="flex TD3">  
                                        <Form.Check 
                                            value={SpecificData.status}
                                            checked={SpecificData.status}
                                            type="switch"
                                            id="custom-switch"
                                            label={SpecificData.status?"done":"not done"}
                                        /> 
                                    <Link to={`/todo/${SpecificData.id}/edit`}> 
                                        <BuildIcon color="primary"  />
                                    </Link>
                                    
                                </td>
                            </tr>
                            
                            
                        </tbody>
                </Table>
        </div>   
    )
}