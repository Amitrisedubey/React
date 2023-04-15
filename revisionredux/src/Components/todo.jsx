import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoLoading,
  getTodoSuccess,
  getTodoError,
  deleteTodo,
  deleteTodoError,
} from "../ReduxStorage/actions";

export const TodosApp = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  console.log(text);
  const addTodo = () => {
    dispatch(addTodoLoading());
    fetch(" http://localhost:3001/todos", {
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
  };
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
  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((d) => d.json())
      .then(() => {
        dispatch(deleteTodo(id));
      })
      .catch((err) => {
        dispatch(deleteTodoError(err));
      });
  };

  return loading ? (
    <div>Loading.....</div>
  ) : error ? (
    <div>Something Went Wrong!!!!!</div>
  ) : (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addTodo}>ADD ONE</button>
      {todos.map((e, i) => (
        <div key={i}>
          {e.title} - {e.status ? "Done" : "Not Done"}
          <button onClick={() => deleteTodo(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
