import { useState } from "react";

export const Todoinput = ({handleClick}) =>{
    
    const [text, setText] = useState("");

        // Reset Input Field handler
    const resetInputField = () => {
        setText("");
    };

    return (
        <div>
             <input type="text" value={text}  onChange={ (e) =>{
                     console.log(e.target.value);
                      setText(e.target.value)
             }} />
             
             <button onClick={() => { handleClick(text); resetInputField()} } >
             Add todo</button>
        </div>
    )
};
