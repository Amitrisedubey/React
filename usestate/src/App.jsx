import './App.css';
import { useState } from 'react';
import './styles.css';
function App() {
  const [count, setCount] = useState(0);
  const changeCount = (value) => {
   //setCount(count + value)
   setCount((prev)=>{
    if(prev === 10){
      return 0;
    }
    return prev + value
   })
  }

  
  //conditonal rendering
  if(count > 10){
    return <div>Counter Reached max value!</div>
  }
  if(count < 0){
    return <div>Counter Reached min value</div>
  }
  
  return (
    <div className="App">
     <h1>Counter :- {count}</h1>
    
    {/* {count < 10 && (
    <div>
     <button onClick={()=>changeCount(1)}>Add 1</button>
     <button onClick={()=>changeCount(-1)}>Sub 1</button>
      </div>
      )} */}

<div className='spacer'>
     <button onClick={()=>changeCount(1)} className="button-85">Add 1</button>
     <button onClick={()=>changeCount(-1)} className="button-85">Sub 1</button>
     <div>Counter is {count % 2 === 0 ? "Even" : "Odd"}</div>
      </div>
    </div>

    
  );
    }
export default App;
