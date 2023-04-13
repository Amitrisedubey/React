import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, background } from "@chakra-ui/react";
import { Todos } from "./Components/Todos";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1
          style={{
            marginBottom: "35px",
            fontSize: "45px",
            background: "aliceblue",
          }}
        >
          TODO with Redux
        </h1>
        <Todos />
      </div>
      ;
    </ChakraProvider>
  );
}
export default App;
