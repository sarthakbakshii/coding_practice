import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addTodo,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
} from "../redux/actions";
import axios from "axios";

export const Todos = () => {
  const { loading, data, error } = useSelector((store) => store.todos); // {counte: 1, todos: [...]}
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    dispatch(getTodoLoading());
   axios .get("http://localhost:3001/todos").then(({ data }) => {
      dispatch(getTodoSuccess(data));
    });
  };

  console.log("re-rendered Todos");

  return loading ? (
    "Loading...."
  ) : (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          axios
            .post("http://localhost:3001/todos", {
              title: text,
              status: false,
            })
            .then((data) => {
              dispatch(addTodoSuccess());
              getTodos();
            })
            .catch(() => {
              // dispatch(error)
            });
        }}
      >
        Add todo
      </button>
      <div>
        {data.map((e) => (
          <div key={e.id}>{e.title}</div>
        ))}
      </div>
    </div>
  );
};
