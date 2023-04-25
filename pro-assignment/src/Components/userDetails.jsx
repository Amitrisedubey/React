import { Box, Container, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userid } = useParams();
  const getUserDetails = () => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users/${userid}`)
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getUserDetails();
  }, [userid]);
  return loading ? (
    <div>Loading....</div>
  ) : (
    <div>
      <Container bg="green.400" color={"#262626"}>
        <Box
          boxSize="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop="10"
        >
          <Image borderRadius="full" boxSize="450px" src={userdata.avatar} />
        </Box>
        <div style={{ marginBottom: "25px" }}>
          <Heading size="lg">{`${userdata.first_name} ${userdata.last_name}`}</Heading>
          <Heading size="md">{`${userdata.email}`}</Heading>
        </div>
      </Container>
    </div>
  );
};
