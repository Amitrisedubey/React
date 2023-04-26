import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Movies } from "./Components/Movies";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Movies />
      </div>
    </ChakraProvider>
  );
}

export default App;
