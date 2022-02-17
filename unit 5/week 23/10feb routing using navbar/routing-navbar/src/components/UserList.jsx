import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"

export const UserList = () =>{
    const [users, setUsers] = useState([])
    useEffect( () =>{
        fetch("https://reqres.in/api/users")
        .then( res => res.json())
        .then( data => {
            console.log(data.data);
            setUsers(data.data)
        })
    },[])

    const isAuth = true;

    if(!isAuth){
        return <Navigate to={"/login"} />
    }

    return ( <div> <h1>User List</h1>
                {users.map( (user,index) =>{
                    return ( <div> <h3>S.no: {index +1}  </h3>
                                <Link to={`/user/${user.id}`} >
                                    Name : {user.first_name}
                                </Link>   
                             </div> )
                })}
             </div>)
}