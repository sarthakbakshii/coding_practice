import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

console.log("entire store:", store.getState());
