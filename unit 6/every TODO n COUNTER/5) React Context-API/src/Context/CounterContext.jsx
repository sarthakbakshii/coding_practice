import { createContext, useState } from "react";



export const CounterContext = createContext();
export const CounterContextProvider = ({children}) => {
     const [count , setCount] = useState(0);
        const countChangeHandler = (payload) =>{
                setCount(count + payload)
        }

    return (
        <CounterContext.Provider value={ {countChangeHandler,count} }>
                    {children}
        </CounterContext.Provider>
    )
}