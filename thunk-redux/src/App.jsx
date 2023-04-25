import logo from "./logo.svg";
import "./App.css";

import { Counter } from "./Components/Counter";
import { Todos } from "./Components/Todos";
import { Feading } from "./Components/Headings";

function App() {
  return (
    <div className="App">
      <Feading />
      <hr />
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
