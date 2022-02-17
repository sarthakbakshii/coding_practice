import { INC_COUNT } from './actionTypes'
import { DEC_COUNT} from './actionTypes'
import { ADD_TODO } from './actionTypes'


const initState = {
    count : 10,
    todos : []
}

const reducer = ( store = initState , { type , payload}) => {
    switch(type){
        case INC_COUNT : {
            return { ...store , count : store.count + payload }
        }

        case DEC_COUNT : {
            return { ...store , count : store.count - payload }
        }

        case ADD_TODO : {
            return {
                ...store,
                todos : [...store.todos , payload]
            }
        }


        default : return store
    }
}

export { reducer }