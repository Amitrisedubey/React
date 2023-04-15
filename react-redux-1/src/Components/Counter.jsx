import { useDispatch, useSelector } from "react-redux";
import { incCount } from "../features/Counter/actions";

export const Counter = () => {
  const counter = useSelector((state) => state.counterState.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(incCount(1));
        }}
      >
        ADD ONE
      </button>
    </div>
  );
};
