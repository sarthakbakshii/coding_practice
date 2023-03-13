import { GET_ALL_CLASS, GET_ALL_TEACHER } from "./actionType"

export const getAllTeacher = (payload) =>{
    return {
        type : GET_ALL_TEACHER,
        payload
    }
};

export const getAllClass = (payload) =>{
    return {
        type : GET_ALL_CLASS,
        payload
    }
}