import { useDispatch, useSelector } from "react-redux";

export const counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {}}>ADD ONE</button>
    </div>
  );
};
