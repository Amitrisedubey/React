import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { ALLROUTES } from "./Components/allRoutes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <ALLROUTES />
      </div>
    </ChakraProvider>
  );
}

export default App;
