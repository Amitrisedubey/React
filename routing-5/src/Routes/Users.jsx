import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  const fetchUser = () => {
    setisLoading(true);
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setisLoading(false);
      });
  };
  React.useEffect(() => {
    fetchUser();
  }, []);

  return isLoading ? (
    <div>...loading</div>
  ) : (
    <>
      <h3>Users</h3>
      {users.map((user) => (
        <>
          <Link
            to={`/users/${user.id}`}
          >{`${user.first_name},${user.last_name}`}</Link>{" "}
          <br />
        </>
      ))}
    </>
  );
};
