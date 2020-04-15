/**
 * Created by Ljili on 2019/12/30.
 */
import React from 'react'
import {NavLink,withRouter } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import { connect } from 'react-redux'
import { switchMenu } from './../../pages/redux/action'
import './index.css'
import { Menu } from 'antd';
const { SubMenu } = Menu;

class NavLeft extends React.Component{
  constructor(props){
    super(props)
  }
  state={
    currentKey: '/',
    arr:[
      {
        title: '首页',
        key: '1'
      },
      {
        title: 'UI',
        key: '2',
        children: [
          {
            title: '按钮一',
            key: '21',
            children:[
              {
                title: '按钮1',
                key: '211',
                children:[
                  {
                    title: '按钮11',
                    key: '2111',
                  }
                ]
              },
              {
                title: '按钮2',
                key: '212',
              }
            ]
          },
          {
            title: '按钮二',
            key: '22',
          },
        ]
      },
      {
        title: '表单',
        key: '3',
        children: [
          {
            title: '登录',
            key: '31',
          },
          {
            title: '注册',
            key: '32',
          }
        ]
      },
    ]
  }
  formatData=(data)=>{
    return data.map(item=>{
      if(item.children){
        return {title:item.title,key:Number(item.key)*2+'',children:this.formatData(item.children)}

      }else{
        return {title:item.title,key:Number(item.key)*2+''}
      }
    })
  }
  handleClick = ({key,keyPath,item}) => {
    const { dispatch } = this.props
    dispatch(switchMenu(item.props.title))
    this.setState({
      currentKey:key
    })
    // console.log(item);
  }
  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig)
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
    this.setState({
      currentKey:currentKey,
      menuTreeNode:menuTreeNode
    })
  }
  renderMenu=(data)=>{
    // return data.map((item)=>{
    //   if(item.children){
    //     return (
    //       <SubMenu title={item.title} key={item.key}>
    //         { this.renderMenu(item.children)}
    //       </SubMenu>
    //     )
    //   }
    //   return <Menu.Item title={item.title} key={item.key}>
    //     <NavLink to={item.key}>{item.title}</NavLink>
    //   </Menu.Item>
    // })
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.name} key={item.path}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.name} key={item.path}>
                <NavLink to={item.path}>{item.name}</NavLink>
            </Menu.Item>
    })
  }
  render(){
      return(
        <div className="">
          <div className='nav-img'><img src="/assets/logo-top.png" alt=""/></div>
          <div className="nav-menu">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[this.props.location.pathname]}
              onClick={this.handleClick}
            >
              {this.state.menuTreeNode}
            </Menu>
          </div>
        </div>
      );
  }
}
export default connect()(withRouter(NavLeft))