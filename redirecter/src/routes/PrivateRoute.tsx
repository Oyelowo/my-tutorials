import React, { SFC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { checkIsAuthenticated } from "../utils/authentication";

interface IPrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: SFC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      checkIsAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
