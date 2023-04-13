import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
  getTodoError,
} from "../ReduxStorage/actions";
export const Todos = () => {
  const [text, setText] = useState("");
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      const data = await fetch("http://localhost:3001/todos").then((d) =>
        d.json()
      );
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
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
