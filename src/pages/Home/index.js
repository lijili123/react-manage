import React,{useState,useEffect} from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.less'

function Count() {
  const number=10
  const [count,setCount]=useState(0)
  const [disabled,setDisabled]=useState(false)
  const [stock,setStock]=useState(false)
  const handleAdd=()=>{
    if(count<10){
      setCount(count+1)
      setStock(false)
      setDisabled(false)
    }else{
      setStock(true)
    }
  }
  const handleMinus=()=>{
    if(count>0){
      setCount(count-1)
      setStock(false)
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }
  useEffect(()=>{
    // console.log(count);
  })

  return (
 <div className='count'>
   <Button type="primary" disabled={stock} onClick={handleAdd}>加 1</Button>
   <h2>{count}</h2>
   <Button type="primary" disabled={disabled} onClick={handleMinus}>减 1</Button>
 </div>
  )
}
export default class Home extends React.Component {

  render() {
    return (
      <div className="home-con">
        this is Home page.
        <div className="test">测试less编译生效</div>
        <div>
          <Count></Count>
        </div>
      </div>
    );
  }
}