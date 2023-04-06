import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Center, Container, Heading, Image } from "@chakra-ui/react";

export const UserDetails = () => {
  const [userdata, setUserData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const { userid } = useParams();
  const getUserDetails = () => {
    setIsloading(true);
    axios
      .get(`https://reqres.in/api/users/${userid}`)
      .then((res) => {
        setUserData(res.data.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  };
  useEffect(() => {
    getUserDetails();
  }, [userid]);

  return isLoading ? (
    <div>...Loadding</div>
  ) : (
    <div>
      <Container maxW="container.sm" bg="green.400" color="#262626">
        <Box
          boxSize="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop="10"
        >
          <Image
            borderRadius="full"
            boxSize="300px"
            src={userdata.avatar}
            alt="profile"
          />
        </Box>

        <div>
          <Heading
            size="lg"
            fontSize="50px"
            colorScheme="tomato"
          >{`${userdata.first_name} ${userdata.last_name}`}</Heading>
          <Heading size="md" fontSize="35px">{`${userdata.email}`}</Heading>
        </div>
      </Container>
    </div>
  );
};
