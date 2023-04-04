import { Navigate, useParams } from "react-router-dom";
import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";

export const UserDetails = () => {
  const [userdata, setUserData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const { userid } = useParams();
  const { token } = useContext(AuthContext);
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

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return isLoading ? (
    <div>...Loadding</div>
  ) : (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <img src={userdata.avatar} alt="profile" />
      <div>
        <h3>{`${userdata.first_name} ${userdata.last_name}`}</h3>
        <h5>{`${userdata.email}`}</h5>
      </div>
    </div>
  );
};
