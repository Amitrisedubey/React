import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
export const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <ChakraProvider>
      <div
        style={{
          width: "350px",
          display: "inline-block",
          backgroundColor: "#fada9d",
          height: "400px",
          marginTop: "20px",
        }}
      >
        <h2>Contact Us Here</h2>

        <FormControl size="xs" onSubmit={onSubmit}>
          <FormLabel fontSize={13} htmlFor="name" margin={5} textAlign="left">
            Name
          </FormLabel>
          <Input
            size="xs"
            width={300}
            variant="filled"
            type="text"
            id="name"
            placeholder="Enter name"
            required
          />
          <FormLabel fontSize={13} htmlFor="email" margin={5} textAlign="left">
            Email
          </FormLabel>
          <Input
            size="xs"
            width={300}
            type="email"
            id="email"
            variant="filled"
            placeholder="Enter email"
            required
          />

          <FormLabel
            fontSize={13}
            htmlFor="message"
            margin={5}
            textAlign="left"
          >
            Message
          </FormLabel>
          <Textarea
            size="xs"
            width={300}
            variant="filled"
            id="message"
            placeholder="Write here"
            required
          />
          <br />

          <Button width={300} colorScheme="facebook" marginTop={5}>
            Submit
          </Button>
        </FormControl>
      </div>
    </ChakraProvider>
  );
};
