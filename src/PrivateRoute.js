/**
 * Created by Ljili on 2019/12/31.
 */
import React from 'react'
import { Route,Redirect } from 'react-router-dom'

function PrivateRoute({ user,children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute
