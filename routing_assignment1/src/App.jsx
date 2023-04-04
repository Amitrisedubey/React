import logo from "./logo.svg";
import "./App.css";
import { Routerss } from "./components/Routes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routerss />
    </div>
  );
}

export default App;
