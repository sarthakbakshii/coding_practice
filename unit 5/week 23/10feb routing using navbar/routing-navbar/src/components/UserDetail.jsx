import { useParams } from "react-router-dom"

export const UserDetail = () =>{
    const { userId } = useParams()
    return( <div>
            <h1> user detail of user {userId}</h1>
        </div>)
}