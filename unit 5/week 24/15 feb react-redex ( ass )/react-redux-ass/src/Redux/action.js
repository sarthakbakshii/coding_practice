import { ADD_TODO } from './actionType';
import { GET_TODO } from './actionType';
import { ASC_SORT_TODO } from './actionType';
import { DECS_SORT_TODO } from './actionType';
import { UPDATE_TODO} from './actionType'

export const addTodo = (payload) =>{
    return {
        type : ADD_TODO,
        payload
    }
}

export const getTodo = (payload) =>{
    return {
        type : GET_TODO,
        payload
    }
}

export const ascSortTodo = (payload) =>{
    return {
        type : ASC_SORT_TODO,
        payload
    }
}

export const decsSortTodo = (payload) =>{
    return {
        type : DECS_SORT_TODO,
        payload
    }
}

export const updateTodo = (payload) =>{
    return {
        type : UPDATE_TODO,
        payload
    }
}