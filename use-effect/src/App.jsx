import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./components/todo";
import { Timer } from "./components/timer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      <Todo />
    </div>
  );
}

export default App;
