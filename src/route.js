/**
 * Created by Ljili on 2019/12/30.
 */
import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/list";
import Admin from "./Admin";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import App from "./App";
import PrivateRoute from "./PrivateRoute";
export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Login}></Route>
          <PrivateRoute path="/home">
            <Admin>
              <Route exact={true} path="/home" component={Home}></Route>
              <Route path="/home/list" component={List}></Route>
              <Route component={NoMatch}></Route>
            </Admin>
          </PrivateRoute>
        </Switch>
      </HashRouter>
    );
  }
}
