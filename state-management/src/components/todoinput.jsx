import { useState } from "react";
import '../App.css';

export const TodoInput = ({handledData}) =>{
    const [text ,setText] = useState("");
  const handleChange = (e)=>{
  setText(e.target.value)
  }

  const handelClick = ()=>{
 handledData(text)
  }
    return ( 
    <>
    <input className="iinn" type="text" placeholder="Enter Todo" onChange={handleChange}/>
    <button className="iinnn" onClick={handelClick}>Add Todo</button>
    </>
    )
}