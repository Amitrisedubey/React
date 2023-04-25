import { ChakraProvider, Heading } from "@chakra-ui/react";

export const Feading = () => {
  return (
    <ChakraProvider>
      <Heading bgColor={"teal.200"}>Counters and Todos</Heading>
    </ChakraProvider>
  );
};
