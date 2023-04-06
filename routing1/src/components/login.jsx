import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Center,
  Flex,
  Input,
  Stack,
  InputGroup,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
export const Login = () => {
  const [form, setForm] = useState({});
  const { handleToken } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <ChakraProvider>
      <div>
        <InputGroup size="lg" display="inline-block">
          <Input
            variant="outline"
            focusBorderColor="lime"
            margin={15}
            width={250}
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter Email"
          />
          <br />
          <Input
            width={250}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </InputGroup>

        <br />
        <Button
          marginTop={15}
          colorScheme="linkedin"
          size="lg"
          onClick={() => {
            try {
              fetch("reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(form),
              });
              handleToken("45857227");
              navigate("/users");
              //navigate(-1);
            } catch {}
          }}
        >
          Sign in
        </Button>
      </div>
    </ChakraProvider>
  );
};
