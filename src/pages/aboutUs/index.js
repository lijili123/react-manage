/**
 * Created by Ljili on 2020/3/9.
 */
import React from 'react';
import './index.less'
import {Button} from 'antd'
import { connect } from 'react-redux'
// import {increase,decrease} from './../redux/action/index'
// import {add} from './../redux/add/action'
import store from './../redux/store'

//以下是合并action的做法 bindActionCreators
import * as inCr from './../redux/action/index'
import * as addA from './../redux/add/action'
import { bindActionCreators } from 'redux'
const ValueContent=React.createContext({
  theme:'dddd'
})
function Increase(props) {
  function addF() {
    // let {dispatch}=props
    // dispatch(increase()) //没有mapDispatchToProps

    // props.increase()//mapDispatchToProps的用法

    props.fun.increase() //合并action然后mapDisPatchToProps的用法
  }
  function minus() {
    if(props.count>0){
      // store.dispatch(decrease()) //通过store 分发
      props.fun.decrease()//合并action然后mapDisPatchToProps的用法
    }
  }
  function add1() {
    // let {dispatch}=props
    // dispatch(add()) //没有mapDispatchToProps

    // props.add() //mapDispatchToProps

    props.fun.add() //合并action //合并action然后mapDisPatchToProps的用法
  }
  return (
    <div>
      <div className="btn-con">
        <Button type="primary" onClick={addF}>加1</Button>
        <p>{props.count}</p>
        <Button type="primary" onClick={minus}>减1</Button>
      </div>
      <br/>
      <p>{props.num}</p>
      <Button type="primary" onClick={add1}>加1</Button>
    </div>
  )
}
class AboutUs extends React.Component{
  constructor(props){
    super(props)
  }
  state={
    theme:'关于我们11111'
  }
  render(){
    // console.log(this.props);
    return <div className="about1">
      <ValueContent.Provider value={this.state.theme}>
        <Toolbar ></Toolbar>
      </ValueContent.Provider >
      <Increase {...this.props}></Increase>
      {/*<Toolbar value={this.state.value}></Toolbar>*/}
    </div>
  }
}
function Toolbar (props) {
  return (
    <div>
      <ThemedButton></ThemedButton>
      {/*<ThemedButton value={props.value}></ThemedButton>*/}
    </div>
  )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ValueContent;
  render() {
    return <div>
      {this.context}
    </div>;
  }
}

const mapStateProps =(state)=>{
  return {
    count:state.reducer.count,
    num:state.addReducer.num
  }
}
//matchStateToProps 把state映射到props 通过props获取到state 通过props.add()分发
// const mapDispatchToProps={
//   add
// }

//以下是合并action之后mapDispatchToProps 通过props.fun.add()分发action
const mapDispatchToProps = (dispatch)=>{
return {
  fun:bindActionCreators({...inCr,...addA},dispatch)
}
}
//mapDispatchToProps 其实就是把dispatch映射到props上，可以通过props调用调用函数分发action

// export default connect(mapStateProps)(AboutUs)
export default connect(mapStateProps,mapDispatchToProps)(AboutUs)