import { Button, Heading, Input, InputGroup } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [form, setForm] = useState({});
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(form);
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <Heading marginTop={25}>Login Here</Heading>
      <InputGroup size="lg" display="inline-block">
        <Input
          variant="outline"
          focusBorderColor="lime"
          margin={15}
          width={250}
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />
        <Input
          width={250}
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
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
            handleToken("46466466");
            navigate("/user");
          } catch {}
        }}
      >
        Sign In
      </Button>
    </div>
  );
};
