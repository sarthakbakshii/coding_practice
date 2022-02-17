import { createStore, combineReducers } from "redux";
import { todoReducer } from "./Todos/reducer";
import { counterReducer } from "./Counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsub = store.subscribe(() => {});

unsub();
console.log("entire store:", store.getState());
