// const action = {
//     type : "INC_COUNT",
//     payload : 1,
// }  === this is action

// TODO APP USING FLUX
 
const addCount = {        //<--- action
    type : "INC_COUNT",
    payload : 1,
}
const decCount = {
    type : "DEC_COUNT",
    payload : 1,
}
// --------------------- store
class Store {
    constructor(reducer , init){
            this.reducer = reducer;
            this.state = init;
    }

    getState() {
        return this.state
    }
}
const reducer = () => {  //---- it take a action and give it to store

}
// ---------------------- reducer       init
const store = new Store( reducer , { count : 0 , todo : []} );
console.log(store.getState())

// const addTodo = {
//     type = "ADD_TODO",
//     payload : {id: 1, status : false , title : "learn redux"}
// }

// const deleteTodo = {
//     type : "DELETE_TODO"
// }