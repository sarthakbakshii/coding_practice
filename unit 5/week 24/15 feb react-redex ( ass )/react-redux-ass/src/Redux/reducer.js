import { ADD_TODO } from './actionType';
import { GET_TODO } from './actionType';
import { ASC_SORT_TODO } from './actionType';
import { DECS_SORT_TODO } from './actionType';
import { UPDATE_TODO} from './actionType'

const initialState = {
    todos : []
}

const reducer = (store = initialState , { type , payload}) =>{
    switch(type){
        case  ADD_TODO :{
            return { ...store , todos : [ ...store.todos , payload] }
        }

         case GET_TODO :{
            return { ...store , todos :  payload }
        }

        case UPDATE_TODO :{
            return {...store, todos : [ ...store.todos , payload]}
        }


        case ASC_SORT_TODO :{

            function compareStrings(a, b) {
                // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? -1 : (a > b) ? 1 : 0;
            }


            let sorted = JSON.parse(JSON.stringify(store.todos));

             sorted.sort(function(a, b) {
                    return compareStrings(a.title, b.title);
                });

            console.log("reducer sorted 1", sorted)
            // store.todos = sorted

              return { ...store , todos :  sorted }
        }

        case DECS_SORT_TODO :{
              function compareStrings(a, b) {
                // Assuming you want case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? 1 : (a > b) ? -1 : 0;
            }

            let sorted = JSON.parse(JSON.stringify(store.todos))
             sorted.sort(function(a, b) {
                    return compareStrings(a.title, b.title);
                })


            console.log("reducer sorted 2", sorted)
           return { ...store , todos :  sorted }
        }

        default :
            return store
    }
}

export { reducer }