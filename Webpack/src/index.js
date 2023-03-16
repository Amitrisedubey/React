import {add} from './calc'
import('./index.css')

console.log(add(2,5));


console.log(add(30,5));

const h1 = document.createElement('h1');

h1.innerText = "Hello Webpack";
h1.classList.add('color-red');

document.getElementById('root').appendChild(h1)