import { useEffect, useState } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const getTodo = () => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3}`)
      .then((data) => data.json())
      .then((response) => {
        setTodo(response);
      });
  };
  useEffect(() => {
    getTodo();
  }, [page]);
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
    }); ///get
  };
  return (
    <div>
      <h1>Todo</h1>
      <input onChange={handleChange} type="text" placeholder="Enter Todo" />
      <button onClick={addTodo}>Add Todo</button>
      {todo.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button disabled={todo.length === 0} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};
