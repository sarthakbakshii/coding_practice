import { ADD_TODO } from "./actionType"


const initalState = {
    todo : [],
    counter : 0
}

export const reducer = (state = initalState , { type , payload }) =>{
    switch(type){
        case ADD_TODO : {
            return {...state , todo : [...state.todo, payload]}   
        }

        default : return state;
    }
}