import React from "react";
import { Navbar } from "./Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Users } from "./Users";
import { UserPage } from "./UserPage";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/users/:Id">
          <UserPage />
        </Route>

        <Route>
          {" "}
          <h3>page not found</h3>
        </Route>
      </Switch>
    </>
  );
};
