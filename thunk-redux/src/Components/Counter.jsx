import { Button, Heading, ChakraProvider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../features/Counter/action";

export const Counter = () => {
  const counter = useSelector((state) => state.counterState.count);
  const dispatch = useDispatch();
  return (
    <div>
      <ChakraProvider>
        <Heading fontSize={35} margin={15}>
          Counter : {counter}
        </Heading>

        <Button
          colorScheme="facebook"
          margin={25}
          onClick={() => {
            dispatch(decCount(1));
          }}
        >
          Decrement
        </Button>
        <Button
          colorScheme="whatsapp"
          onClick={() => {
            dispatch(incCount(1));
          }}
        >
          Increment
        </Button>
      </ChakraProvider>
    </div>
  );
};
