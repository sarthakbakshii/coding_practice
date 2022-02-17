import {
  ADD_TODO,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  DEC_COUNT,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  INC_COUNT,
} from "./actionTypes";

const init = {
  count: 15,
  todos: {
    loading: false,
    error: false,
    data: [],
  },
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { ...store, count: store.count + payload };
    case DEC_COUNT:
      return { ...store, count: store.count - payload };
    // case ADD_TODO:
    //   return { ...store, todos: [...store.todos, payload] };

    case ADD_TODO_LOADING:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: true,
        },
      };

    case ADD_TODO_SUCCESS:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: false,
        },
      };

    case GET_TODO_LOADING:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: true,
        },
      };

    case GET_TODO_SUCCESS:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: false,
          data: payload,
        },
      };

    default:
      return { ...store };
  }
};
