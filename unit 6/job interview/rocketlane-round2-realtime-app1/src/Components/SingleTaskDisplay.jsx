import "./SingleTaskDisplay.scss"
import { AiOutlineDollar } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";

export const SingleTaskDisplay = ({data , allActivity , setAllActivity }) =>{

        const deleteHandler = () =>{
            let loginInfo = JSON.parse( sessionStorage.getItem("userDtl") )
                if( loginInfo ){
                        if( loginInfo.userId ==  data.userId ){

                                fetch(`https://my-json-server.typicode.com/karthick03/json-db-data/tasks/${data.id}`,{
                                        method : 'DELETE',
                                        headers: { 'Content-type': 'application/json; charset=UTF-8'  }
                                })
                                .then( res =>{
                                        alert("deleted");

                                        let newData = allActivity.filter( a =>{
                                                return a.id !== data.id
                                        });
                                        
                                        setAllActivity(newData)
                                });
                        }
                        else{
                                alert("you are not the creator of this, so you cant delete it")
                        }

                }
                else{
                        alert("you have to login first to delete")
                }
                // console.log( data.userId , data.id)
        }

        const editHandler = (id) =>{
            let taskName = prompt("Enter new heading or leave it empty");
            let projectName = prompt("Enter new title or leave it empty");

            console.log( taskName )
            console.log( projectName )
            let editData = allActivity.map( a =>{
                    if( id == a.id){
                         a.taskName = taskName == "" || !taskName ? a.taskName : taskName;
                         a.projectName = projectName == "" || !taskName ? a.projectName : projectName;
                    }
                    return a
            });
            console.log(editData)
            setAllActivity([...editData])
        }

    return <div className="cont"> 
                    <div className="dataBox"  onClick={ () => { editHandler(data.id) }} >
                            <div className="heading" > 
                                {data.taskName}
                            </div>
                            <div className="title"> 
                                   { 
                                     data.isBillable && <AiOutlineDollar style={ {marginRight : "10px"} } /> 
                                   }
                                   {data.projectName}
                            </div>
                    </div>
                    <MdDeleteOutline className="deleteBtn" 
                     onClick={ deleteHandler }  />

           </div>
}