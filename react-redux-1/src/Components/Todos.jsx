import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
  getTodoError,
  getData,
} from "../features/Todos/actions";
export const Todos = () => {
  const [text, setText] = useState("");
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.todosState.loading,
    todos: state.todosState.todos,
    error: state.todosState.error,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  async function getTodos() {
    dispatch(getData());
  }

  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>Something went wrong!</div>
  ) : (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: false, title: text }),
          })
            .then((d) => d.json())
            .then((res) => {
              //success
              dispatch(addTodoSuccess(res));
              //dispatch(getData());
            })
            .catch((err) => {
              //error
              dispatch(addTodoError(err));
            });
        }}
      >
        Add Todo
      </button>
      {todos.map((e, i) => (
        <div key={i}>
          {e.title}-{e.status ? "Done" : "Not Done"}
        </div>
      ))}
    </div>
  );
};
