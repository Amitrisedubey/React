import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { Id } = useParams();
  const getUserDetails = () => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users/${Id}`)
      .then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  // return isLoading ? (
  //   <div>...Loading</div>
  // ) : (
  //   <div style={{ display: "flex", justifyContent: "center", paddingTop: 5 }}>
  //     <img width="50px" src={user.avatar} alt="profile" />
  //   </div>
  // );

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
      <img src={user.avatar} alt="profile" />
      <div>
        <h3>{`${user.first_name}${user.last_name}`}</h3>
        <h5>{`email:${user.email}`}</h5>
      </div>
    </div>
  );
};
