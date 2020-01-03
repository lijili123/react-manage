/**
 * Created by Ljili on 2019/12/30.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import About from './../router1/about'
import Main from './Main'
import Info from './info'
import Topic from './../router1/topic'
export default class RouteDemo extends React.Component{
  render(){
    return (
      <div>
        <Home>
          <Route path="/main" render={()=>
            <Main>
              <Route path="/main/:value" component={Info}></Route>
            </Main>
          }></Route>
          <Route exact={true} path="/about" component={About}></Route>
          <Route exact={true} path="/topic" component={Topic}></Route>
        </Home>
      </div>
    )
  }
}