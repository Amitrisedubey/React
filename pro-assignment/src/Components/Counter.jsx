import { Button, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { DecCount, IncCount } from "../Features/Counter/actionPerform";
export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterState.count);
  return (
    <div>
      <h1>Counter Page</h1>
      <Heading margin={25}>Counter : {counter}</Heading>
      <Button
        marginRight={5}
        colorScheme="facebook"
        onClick={() => {
          dispatch(DecCount(1));
        }}
      >
        Decrament
      </Button>
      <Button
        colorScheme="facebook"
        onClick={() => {
          dispatch(IncCount(1));
        }}
      >
        Incrament
      </Button>
    </div>
  );
};
