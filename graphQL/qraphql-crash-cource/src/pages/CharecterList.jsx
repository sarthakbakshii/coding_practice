// import { useQuery , gql} from "@apollo/client"

import { useCharecter } from "../hooks/useCarecter"

// const GET_CHARACTERS = gql`
//     query{
//   characters{
//     results{
//        id
//        name
//        image
//     }
//   }
// }`
export const CharecterList = () =>{


    // const { error , loading , data} = useQuery(GET_CHARACTERS);
    const { error , loading , data } = useCharecter()
    console.log(error , loading , data)

    if( loading ) return <div> loading </div>
    if (error) {
        return <div> error </div>
    }
   
    return <div className="charecterList">
             {data.characters.results.map( a =>{
                 return <div className="card" key={a.id}> 
                                {a.name}
                        </div>
             })}
           </div>
}