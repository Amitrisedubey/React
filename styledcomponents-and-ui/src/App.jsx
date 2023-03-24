import logo from "./logo.svg";
import "./App.css";
import { Button, Div } from "./styled/button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <Button
        theme={theme}
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click me
      </Button>{" "}
      <br />
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        toggle theme
      </button>
      <Div theme={theme}>
        <p>Lorem ipsum</p>
      </Div>
    </div>
  );
}

export default App;
