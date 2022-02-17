import { ADD_TODO } from './actionTypes';

const initState = {
    todos : [
        {
            id : 1,
            title: " learn redux ",
            status : false 
        }
    ]
}

const reducer = ( state = initState , { type, payload} ) => {
  switch(type){
      case ADD_TODO:{
          return {
              ...state,
              todos : [...state.todos , payload]
          }
      }
      default :
           return state;
  }
};

export { reducer }