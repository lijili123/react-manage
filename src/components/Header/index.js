/**
 * Created by Ljili on 2019/12/30.
 */
import React from 'react'
import axios from 'axios';
import requestAll from '../../config/api.js'
import { withRouter } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd';
import './index.css'
 class Header extends React.Component{
  state={
    userName:'管理员'
  }
  handleMenuClick=()=>{
    axios.delete('/frame/logout').then(res=>{
      window.sessionStorage.clear();
      window.location.reload();
    })
    // requestAll({
    //   url:"/frame/logout",
    //   method:'delete'
    // }).then(res=>{
    //   window.sessionStorage.clear();
    //   window.location.reload();
    // })
  }
  render(){
    const menu = (
      <Menu>
        <Menu.Item>修改密码</Menu.Item>
        <Menu.Item onClick={this.handleMenuClick}>退出登录</Menu.Item>
      </Menu>
    );
    return(
      <div className="header">
        <div className="user-con">
          <Dropdown overlay={menu}>
            <p>{this.state.userName}<Icon type="down" /></p>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export  default  withRouter(Header)