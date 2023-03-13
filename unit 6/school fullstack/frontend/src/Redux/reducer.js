import { GET_ALL_CLASS, GET_ALL_TEACHER } from "./actionType";

const init = {
    teacher : [],
    teacher_backup : [],
    class : [],
    class_backup : []
};

export const reducer = (state = init , { type , payload }) =>{
    switch(type){

        case GET_ALL_TEACHER :{
        
            return {...state , teacher : [...payload] , teacher_backup : [...payload] }
        };

        case GET_ALL_CLASS :{
            return {...state , class : [...payload] , class_backup : [...payload] }
        };

        default : return state

    }
}