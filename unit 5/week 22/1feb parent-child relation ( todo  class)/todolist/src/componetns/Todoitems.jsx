
export const Todoitems = (props) =>{
    return (
        <div> Title: {props.title}, id: {props.idd}, status: {props.status?"Done":"Pending"}  </div>
    )
};
