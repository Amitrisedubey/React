import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/todo";

function App() {
  const arr = ["Wake up Bhai", "Have Tea", "Attend Class"];
  return (
    <div className="App">

      {arr.map((e)=>(
        <Todos num={e}/>
      )
      )}
    
    </div>
  );
}

export default App;
