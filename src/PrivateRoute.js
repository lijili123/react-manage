/**
 * Created by Ljili on 2019/12/31.
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  let user = JSON.parse(window.sessionStorage.getItem("user"));
  // console.log("PrivateRoute-user", user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
