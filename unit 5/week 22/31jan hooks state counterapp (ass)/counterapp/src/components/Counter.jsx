import { useState } from "react"
import "./counter.css";
import React from "react";

import { useRef } from 'react';
import useDoubleClick from 'use-double-click';
/*
notes for double click =>

1) npm i use-double-click

import { useRef } from 'react';
import useDoubleClick from 'use-double-click';

const Button = () => {
  const buttonRef = useRef();
  
  useDoubleClick({
    onSingleClick: e => console.log(e, 'single click'),
    onDoubleClick: e => console.log(e, 'double click'),
    ref: buttonRef,
    latency: 250
  });
  
  return <button ref={buttonRef}>Click Me</button>
}

*/

export const Counter = (props) =>{
    const [count, setCount] = useState(props.initalValue)
    const addOne = () =>{
        if(count < 10){
            setCount(count + 1)
        }
    }
    const subOne = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    // =============== double click
     const buttonRef = useRef();
  
    useDoubleClick({
        onSingleClick: e =>{

             console.log(e, 'single click')
        },
        onDoubleClick: e =>{
                 setCount(count * 2)
                console.log(e, 'double click');
        } ,
        ref: buttonRef,
        latency: 250
    });
      // =============== double click

    return (
        <>
           <h1 ref={buttonRef} >Counter : {count}</h1>
           <div className="flex">
             <button onClick={() => addOne()}>Add one</button>
             <button onClick={() => subOne()}>sub one</button>
           </div>
        </>
    )
}

