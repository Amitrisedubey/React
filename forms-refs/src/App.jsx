import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Form } from "./components/forms";
import { Slide } from "./components/topbottom";

function App() {
  const inputRef = useRef(null);
  // {current: 1}

  return (
    <div className="App">
      <div
        style={{
          height: "400px",
          width: "200px",
          background: "coral",
        }}
      >
        1
      </div>

      <div
        style={{
          height: "400px",
          width: "200px",
          background: "yellow",
        }}
      >
        2
      </div>
      <div
        style={{
          height: "400px",
          width: "200px",
          background: "green",
        }}
      >
        3
      </div>
      <div
        ref={inputRef}
        style={{
          height: "400px",
          width: "200px",
          background: "pink",
        }}
      >
        4
      </div>
      <div
        style={{
          height: "400px",
          width: "200px",
          background: "grey",
        }}
      >
        5
      </div>
      <div
        style={{
          height: "400px",
          width: "200px",
          background: "black",
        }}
      >
        6
      </div>
      <div
        style={{
          height: "400px",
          width: "200px",
          background: "blue",
        }}
      >
        7
      </div>
      <div
        style={{
          height: "400px",
          width: "200px",
          background: "purple",
        }}
      >
        8
      </div>
      <button
        onClick={() => {
          inputRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Scroll to top
      </button>
    </div>
  );
}

export default App;

/**
 * 1. Variable, saves it's own state.
 * 2. Change in variable, shouldn't cause a re-render.
 *   const [dummy , setDummy] = useState(1)
 * <button onClick={()=>{test.current=test.current + 1; console.log(test)}}>Increment Test</button>
        <button onClick={()=>{setDummy((p)=>p+1)}}>Re-Render</button>

         <input ref={inputRef} />



         <div ref={inputRef} style={{
        height: "400px",
        width: "200px",
        background: "coral"
        
      }}>1</div>
      <div style={{
        height: "400px",
        width: "200px",
        background: "aliceblue"
        
      }}>2</div>
      <div style={{
        height: "400px",
        width: "200px",
        background: "coral"
        
      }}>3</div>
      <div style={{
        height: "400px",
        width: "200px",
        background: "aquamarine"
        
      }}>4</div>
       
        <button onClick={()=>{
         //inputRef.current.value="" ;
         inputRef.current.scrollIntoView({
          behavior: "smooth",
         });
        // window.scrollTo({top:0, left:0 ,behavior: 'smooth'})
        }}>Scroll  to Top</button>
 */
