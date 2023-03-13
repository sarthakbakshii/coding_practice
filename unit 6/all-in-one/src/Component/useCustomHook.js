import { useState } from "react"

export const useCustomHook = () =>{
    
     function getVal(state){
            return window.location.href + state 
     }
    return getVal
}