import logo from './logo.svg';
import './App.css';
import './style.css'

function App() {
  const array = ["Android","Blackberry","iPhone","Windows Phone"];
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     {array.map((e)=> (<li>{e}</li>))}

     <h1>Mobile Manufacturers</h1>
     <Manufacturers/>
    </div>
  );
}
const arr = ["Samsung2","HTC","Micromax","Apple"]

function Manufacturers(){
return arr.map((e)=>(<li>{e}</li>))
}
export default App;
