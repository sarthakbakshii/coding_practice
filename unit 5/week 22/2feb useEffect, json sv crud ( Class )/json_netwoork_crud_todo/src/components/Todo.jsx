import { useEffect, useState } from "react";

const Todo = () =>{

    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const [page, setPAge] = useState(1)

    const handleChange = (e) =>{
        // console.log(e.target.value);
        setText(e.target.value)
    }

    const addTodo = (title) =>{
       const data = { status : false , title};
        // axios.post("http://localhost:3001/todos", data)
        fetch("http://localhost:3001/todos",{
            method : "POST" ,
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json",
            }
        }).then( getTodo )  
    }
    const getTodo = () =>{

        setLoading(true);

        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
        .then( res => res.json() )
        .then( data => {
            console.log("data",data);
            setTodo(data);

            setLoading(false)
        })
    }

    useEffect( () => {
        getTodo();
    },[page])

    const emptyField = () => {
        setText("")
    }
    // console.log(todo);

    return loading? ( 
        "Loading"
        ) : (
        <div>
            <input type="text" onChange={handleChange} value={text} />
            <button onClick={ () =>{
                addTodo(text);
                emptyField()
            }}>Click</button> 
            
            <div className="displayBox">
                   <SingleList obj={todo} />
                    <button disabled={ todo.length==0?true:false} 
                    onClick={ () =>{
                             setPAge(page + 1)
                    }}> next </button>
                    
                    <button  disabled={page==1?true:false} 
                    onClick={ () =>{
                         setPAge(page - 1)
                    }}> prev </button>
            </div>
        </div>
    )
}

const SingleList = ({obj}) =>{
    return obj.length==0? ( <div> NO data available</div>): (
                obj.map( data =>{
                    return ( <div key={data.id}> { data.title} </div>)
                    console.log(data.title);
                })
    )
    // return <div>hello</div>
}

const Button = ({handlePageChange, page}) =>{
    return (
        <>
          

        </>
    )
}

export default Todo;
