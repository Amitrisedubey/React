import logo from "./logo.svg";
import "./App.css";
import { Navabr } from "./Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navabr />
      </div>
    </ChakraProvider>
  );
}

export default App;
