import { TodoInput } from "./todoinput";
import { TodoItem } from "./todoitem";
import { useState } from "react";
import { nanoid } from "nanoid";
export const Todo = () => {
  const [list, setList] = useState([]);
  const handledData = (data) => {
    //console.log("Todo:", data);
    const payload = {
      title:data,
      status:true,
      id:nanoid(9),
    }
    setList([...list, payload]);
  };
  const handleDelete = (id)=>{
    setList(list.filter((item) => item.id !== id));
    
  }
  return (
    <>
      <TodoInput handledData={handledData} />
      {list.map((e) => (
        <TodoItem key={e.id} {...e} handleDelete={handleDelete}/>
      ))}
    </>
  );
};
