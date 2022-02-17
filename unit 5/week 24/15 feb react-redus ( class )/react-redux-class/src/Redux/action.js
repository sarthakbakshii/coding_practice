import { INC_COUNT} from './actionTypes'
import { DEC_COUNT} from './actionTypes'
import { ADD_TODO } from './actionTypes'


//  action creator

// export const incCount = (payload) => ({
//     type : INC_COUNT,
//     payload
// });
export const incCount = (payload) => {
    return {
        type : INC_COUNT,
        payload        
    }
}

export const decCount = (payload) => ({
    type : DEC_COUNT,
    payload
})

export const addTodo = (payload) => ({
    type : ADD_TODO,
    payload
})
