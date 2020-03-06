import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import Home from './pages/router_demo/router1/Home';
import RouteDemo from './pages/router_demo/router2/router';
import RouteD from './pages/router_demo/router3/router';
import IRouter from './route'
// import 'antd/dist/antd.css';//加入按需加载会自动加载css和js
import { Provider  } from 'react-redux'
import store from './pages/redux/store'
import * as serviceWorker from './serviceWorker';
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <IRouter />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
