import { useEffect, useState } from "react";
export const Form = () => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(10);
  console.log("Before useEffect");
  useEffect(() => {
    console.log("First effect");
  });
  useEffect(() => {
    //updating
    console.log("Second effect");
    //only once
  }, []);
  useEffect(() => {
    console.log("Third effect");
  }, [counter]);
  console.log("After useEffect");
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
    </div>
  );
};
