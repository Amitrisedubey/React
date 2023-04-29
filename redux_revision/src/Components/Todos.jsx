import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../Features/action";

export const Todos = () => {
  const [text, setText] = useState("");
  console.log(text);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      const data = await fetch(" http://localhost:3001/todos").then((d) =>
        d.json()
      );

      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }

  const { loading, todoss, error } = useSelector((state) => ({
    loading: state.loading,
    todoss: state.todos,
    error: state.error,
  }));
  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter Todo"
      />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: text, status: false }),
          })
            .then((d) => d.json())
            .then((res) => {
              dispatch(addTodoSuccess(res));
            })
            .catch((err) => {
              dispatch(addTodoError(err));
            });
        }}
      >
        Add Todo
      </button>
      {todoss.map((e, i) => (
        <div key={i}>
          {e.title} - {e.status ? "Done" : "Not Done"}
        </div>
      ))}
    </div>
  );
};
