/**
 * Created by Ljili on 2020/4/15.
 */
import React,{Component} from 'react'
import TinyEditor from './../../components/TinyEditor'
class Tiny extends Component{
  constructor(props){
    super(props)
}
state={
  initialValue:''
}
render(){
    return (
      <div>
        <TinyEditor initialValue={this.state.initialValue}></TinyEditor>
      </div>
    )
}
}
export default Tiny
