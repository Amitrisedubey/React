import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Counter } from "./Counter";
import { Todos } from "./Todos";
import { Users } from "./Users";
import { Contact } from "./Contact";
import { Login } from "./Login";
import { UserDetails } from "./userDetails";
import { PrivateRoute } from "./PrivateRoute";
import { Movies } from "./Movie";
export const ALLROUTES = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/todos" element={<Todos />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/user/:userid"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
