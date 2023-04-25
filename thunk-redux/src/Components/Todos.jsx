import { Button, ChakraProvider, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoSuccess,
  addTodoloading,
  addTodoError,
  getTodoSuccess,
  getTodoError,
  getData,
} from "../features/Todos.js/action";

export const Todos = () => {
  const [text, setText] = useState("");
  console.log("text:", text);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);
  async function getTodos() {
    dispatch(getData());
  }
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.todoState.loading,
    todos: state.todoState.todos,
    error: state.todoState.error,
  }));

  return loading ? (
    <div>Loading.........</div>
  ) : error ? (
    <div>Something Went wrong</div>
  ) : (
    <div>
      <ChakraProvider>
        <Heading>Todos App</Heading>
        <Input
          type="text"
          value={text}
          placeholder="Enter Todo"
          width={350}
          margin={15}
          variant="outline"
          bg={"white"}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></Input>
        <Button
          colorScheme="telegram"
          onClick={() => {
            dispatch(addTodoloading());
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
          ADD TODO
        </Button>
        {todos.map((todo, i) => (
          <div key={i}>
            {todo.title} - {todo.status ? "Done" : "Not Done"}
          </div>
        ))}
      </ChakraProvider>
    </div>
  );
};
