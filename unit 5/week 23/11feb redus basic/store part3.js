import { createStore} from 'redux'

// TODO APP USING FLUX
 

//---------------------- action
const addCount = {        
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
    // ------------------- dispatch
    despatch(actions){
            this.state = this.reducer( this.state , actions)
    }
}
const reducer = ( store , action) => {  //---- it take a action and give it to store
    // if (action.type == "INC_COUNT"){
    //     store.count += action.payload
    // }

    // if (action.type == "ADD_TODO"){
    //     store.todo.push(action.payload);
    // }
    switch(action.type){
        case "INC_COUNT" : 
            return {...store, count : store.count + action.payload };

        case "DEC_COUNT" : 
            return {...store, count : store.count - action.payload };
        
        case "ADD_TODO" : 
            return {...store, todo : [...store.todo, action.payload ] };

        default: 
            return store;
    }
}

const init = { count : 0 , todo : []} 

// ---------------------- reducer       init
const store = new Store( reducer , init  );
console.log(store.getState());

store.despatch( addCount );
console.log(store.getState());

store.despatch( addCount );
console.log(store.getState());

store.despatch( decCount );
console.log(store.getState());

store.despatch( decCount );
console.log(store.getState());

store.despatch( { 
                    type : "ADD_TODO" , 
                    payload : {name : "sarthak", sname : "bakshi"}
                } 
);
console.log(store.getState());
// =========== output 
/*
{ count: 0, todo: [] }
{ count: 1, todo: [] }
{ count: 2, todo: [] }
{ count: 1, todo: [] }
{ count: 0, todo: [] }
{ count: 0, todo: [ { name: 'sarthak', sname: 'bakshi' } ] }
*/

