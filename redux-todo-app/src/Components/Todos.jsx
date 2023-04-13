import { Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoLoading,
  addTodoSuccess,
  addTodoError,
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
  const addTodo = () => {
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

  return loading ? (
    <div>
      <img
        style={widh}
        src="https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM="
        alt=""
        srcset=""
      />
    </div>
  ) : error ? (
    <div>Something Went Wrong!</div>
  ) : (
    <div>
      <Input
        type="text"
        placeholder="Enter Todo"
        variant="outline"
        width={300}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button colorScheme="facebook" marginLeft={5} onClick={addTodo}>
        ADD TODO
      </Button>
      {todos.map((e, i) => (
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
