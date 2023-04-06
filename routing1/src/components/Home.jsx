import {
  Button,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const getProduct = () => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);
  return loading ? (
    <div>...Loading</div>
  ) : (
    <ChakraProvider>
      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            backgroundColor="aliceblue"
            gap={15}
          >
            <Image
              objectFit="cover"
              h="400px"
              w="600px"
              src={product.thumbnail}
            />

            <Stack margin="auto">
              <CardBody>
                <Heading>{`${product.title}`}</Heading>
                <Heading size="md">{`${product.brand}`}</Heading>
                <Text py="2">{`${product.description}`}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {`$${product.price}`}
                </Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue" margin="auto">
                  Buy
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </ChakraProvider>
  );
};
