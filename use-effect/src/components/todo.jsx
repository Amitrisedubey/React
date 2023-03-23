import { useEffect, useState } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    getTodo();
  }, []);
  const getTodo = () => {
    fetch("http://localhost:3001/todos")
      .then((d) => d.json())
      .then((res) => {
        setTodos(res);
      });
  };
  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getTodo();
    });
  };
  return (
    <div>
      <input type="text" placeholder="एंटर  TODO" onChange={handleClick} />
      <button onClick={addTodo}>Add TODO</button>
      {todos.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
};
