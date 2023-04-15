import "./App.css";

import { Todos } from "./Components/Todos";
import { Counter } from "./Components/Counter";
function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
