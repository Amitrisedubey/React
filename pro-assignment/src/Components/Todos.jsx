import { Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../Features/Todos/actionPerform";

export const Todos = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { loading, todo, error } = useSelector((state) => ({
    loading: state.todosState.loading,
    todo: state.todosState.todo,
    error: state.todosState.error,
  }));

  useEffect(() => {
    getDatas();
  }, []);
  async function getDatas() {
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
    <div>...loading</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <Input
        width={300}
        marginRight={5}
        marginTop={25}
        type="text"
        value={text}
        placeholder="Enter Todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        colorScheme="whatsapp"
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
              dispatch(addTodoSuccess(res));
            })
            .catch((err) => {
              dispatch(addTodoError(err));
            });
        }}
      >
        ADD TODO
      </Button>
      {todo.map((e, i) => (
        <div
          key={i}
          style={{
            marginTop: "45px",
            fontSize: "45px",
            color: "red",
            background: "aliceblue",
          }}
        >
          {e.title} - {e.status ? "Done" : "Not Done"}
        </div>
      ))}
    </div>
  );
};
