
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
    despatch(actions){

    }
}
const reducer = ( store , action) => {  //---- it take a action and give it to store
    if (action.type == "INC_COUNT"){
        store.count += action.payload
    }

    if (action.type == "ADD_TODO"){
        store.todo.push(action.payload);
    }

    return store
}

const init = { count : 0 , todo : []} 
// ---------------------- reducer       init
const store = new Store( reducer , init  );
console.log(store.getState())

