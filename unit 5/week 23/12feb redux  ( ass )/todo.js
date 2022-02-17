import { createStore } from 'redux'

const reducer = ( store , action) =>{
    switch(action.type){
        case "ADD_TODO" :
          return { ...store, todo: [...store.todo, action.payload] };

        case "UPDATE_TODO" : {
            let ans = store.todo.map( a => {
                if( a.id == action.payload.id ){
                a = action.payload 
                }
                return a
            })
          store.todo = ans;
          return { ...store, todo: store.todo };
          
        };

        case "DELETE_TODO" : {
          let ans = store.todo.filter( a =>{
            return (a.id !== action.payload.id)
          });
          store.todo = ans
          return store
        }
              


        default : return store;
    }
}
const initialState = { todo : [] };

const store = createStore( reducer, initialState);0

// ========================= testing
store.dispatch( { type : "ADD_TODO" , payload : {id : 1 , title : "learn react", status : false}   });
console.log( store.getState() );
console.log("---------------------------------------")

store.dispatch( { type : "ADD_TODO" , payload : {id : 2 , title : "learn react again", status : false}   });
console.log( store.getState() );
console.log("---------------------------------------")

store.dispatch( { type : "ADD_TODO" , payload : {id : 3 , title : "learn react once again", status : false}   });
console.log( store.getState() );
console.log("---------------------------------------")

store.dispatch( { type : "UPDATE_TODO" , payload : {id : 2 , title : "learn react updated", status : true}    });
console.log( store.getState() );

console.log("---------------------------------------")

store.dispatch( { type : "DELETE_TODO" , payload : {id : 2}   });
console.log( store.getState() );

//============================================ output
/*
{ todo: [ { id: 1, title: 'learn react', status: false } ] }
---------------------------------------
{
  todo: [
    { id: 1, title: 'learn react', status: false },
    { id: 2, title: 'learn react again', status: false }     
  ]
}
---------------------------------------
{
  todo: [
    { id: 1, title: 'learn react', status: false },
    { id: 2, title: 'learn react again', status: false },    
    { id: 3, title: 'learn react once again', status: false }
  ]
}
---------------------------------------
{
  todo: [
    { id: 1, title: 'learn react', status: false },
    { id: 2, title: 'learn react updated', status: true },   
    { id: 3, title: 'learn react once again', status: false }
  ]
}
---------------------------------------
{
  todo: [
    { id: 1, title: 'learn react', status: false },
    { id: 3, title: 'learn react once again', status: false }
  ]
}
*/