/**
 * Created by Ljili on 2019/12/30.
 */
import React,{Suspense,lazy} from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "./Admin";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import List from "./pages/list";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import AboutUs from './pages/aboutUs'

// const Login=lazy(()=>import('./pages/Login'))
// const Home=lazy(()=>import('./pages/Home'))
// const List=lazy(()=>import('./pages/list'))
// const NoMatch=lazy(()=>import('./pages/NoMatch'))//按需加载 配合lazy Suspense 使用



export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/login" component={Login}></Route>
          <PrivateRoute path="/">
            <Admin>
              {/*<Suspense fallback={<div>Loading...</div>}>*/}
                <Switch>
                  <Route path="/" exact={true} component={Home}></Route>
                  <Route path="/list" exact={true} component={List}></Route>
                  <Route path="/about1" exact={true} component={AboutUs}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              {/*</Suspense>*/}
            </Admin>
          </PrivateRoute>
        </Switch>
      </HashRouter>
    );
  }
}
