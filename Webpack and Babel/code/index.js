import { add } from "./calc";
import("./index.css");

import React from "react";
import ReactDOM from "react-dom";

console.log(add(10, 20));
console.log(add(10, 50));

// const h1 = document.createElement('h1');
// h1.innerText = "Hello Webpack";
// h1.classList.add('color-red');
// document.getElementById('root').appendChild(h1)

ReactDOM.render(
  <h1 className="color-red">
    Hello webpack and <i className="test">React <b>Bold</b></i>
  </h1>, //JSX
  document.getElementById('root') //where to render the app
);
