import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ path, element }) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <Route path={path} element={element}></Route>;
};
