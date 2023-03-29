import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const fetchUser = () => {
    setIsloading(true);
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  };
  React.useEffect(() => {
    fetchUser();
  }, []);
  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <div>
      <h3>Users</h3>
      {users.map((user) => (
        <div style={{ padding: "3px" }}>
          <Link
            to={`/users/${user.id}`}
          >{`${user.first_name},${user.last_name}`}</Link>
        </div>
      ))}
    </div>
  );
};
