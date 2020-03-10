/**
 * Created by Ljili on 2019/12/30.
 */
import React from 'react'
import './admin.css'
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import {connect} from 'react-redux'
import store from './pages/redux/store'
class Admin extends React.Component{
  render(){
    // console.log(store.getState())
    // console.log(this.props);
    return (
      <div className="content">
        <div className="Nav_left">
          <NavLeft/>
        </div>
        <div className="Con_right">
          <Header></Header>
          <div  className="main-con">
            <div className='bread-main'><h2>{store.getState().reducer.menuName}</h2></div>
            {/*<div className="bread"> 通过store.getState()获取状态 {this.props.menuName}</div>*/}
            {/*<div className="bread"> 通过this.props获取状态 {store.getState().menuName}</div>*/}
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateProps =(state)=>{
  return {
    menuName:state.reducer.menuName
  }
}
export  default connect(mapStateProps)(Admin)