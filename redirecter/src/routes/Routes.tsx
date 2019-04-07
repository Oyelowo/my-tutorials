import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/" exact component={Home} />
    <Route render={() => <h1>Page Not Found</h1>} />
  </Switch>
);

export default Routes;
