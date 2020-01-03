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
export default class Home extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/main">Home3</Link>
            </li>
            <li>
              <Link to="/about">About3</Link>
            </li>
            <li>
              <Link to="/topic">Topic3</Link>
            </li>
          </ul>
          <hr/>
          <div>
            {this.props.children}
          </div>
        </Router>
      </div>
    )
  }
}
