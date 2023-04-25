import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <div
      style={{
        width: "350px",
        display: "inline-block",
        backgroundColor: "#fada9d",
        height: "400px",
        marginTop: "20px",
      }}
    >
      <h1>Contact us Here</h1>
      <FormControl size="xs">
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
          variant="filled"
          type="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <FormLabel fontSize={13} htmlFor="message" margin={5} textAlign="left">
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
  );
};
