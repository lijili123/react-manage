/**
 * Created by Ljili on 2019/12/30.
 */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './about'
import Main from './Main'
import Topic from './topic'
export default class Home extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
          </ul>
          <hr/>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Main}/>
              <Route path="/about" component={About}/>
              <Route path="/topic" component={Topic}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
