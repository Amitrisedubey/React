import { background } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const [loading, setLoading] = useState(true);
  const fetchUser = () => {
    setLoading(true);

    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        //console.log(res.data.data);
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1 style={{ color: "white", background: "green", font: "45px" }}>
        Users
      </h1>
      {users.map((e, i) => (
        <div
          key={i}
          style={{
            padding: "10px",
            fontSize: "35px",
            background: "grey",
            color: "white",
          }}
        >
          <Link to={`/user/${e.id}`}> {`${e.first_name} ${e.last_name}`}</Link>
        </div>
      ))}
    </div>
  );
};
