import React,{Component,useState,useEffect} from 'react';
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
class Map extends Component{
  constructor(props){
    super(props)
  }
  initMap=()=>{
    return new Promise((resolve,reject)=>{
      var script=document.createElement('script');
      script.type='text/javascript';
      script.src='http://api.map.baidu.com/api?v=3.0&ak=jr1A3RlMQpjICtNZmdegpozZELRG2UBw&callback=init'
      document.body.appendChild(script);
      window.init=()=>{
        resolve(window.BMap)
      }
    })
  }
  createMap(){
    this.initMap().then(BMap=>{
      var map = new BMap.Map('container')
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      // var marker = new window.BMap.Marker(point);
      // map.addOverlay(marker);//像地图添加标注
    })
  }
  testWebSocket(){
    let socket=new WebSocket('ws://121.40.165.18:8800')
    socket.onopen=function () {
      socket.send('测试sss')
    }
    socket.onmessage=function (evt) {
      console.log(evt.data);
    }
  }
  componentDidMount(){
    this.initMap()
    this.createMap()
    // this.testWebSocket()
  }
  render(){
    return <div className='map-con'>
      <div className="container" id="container"></div>
    </div>
  }
}

export default class Home extends React.Component {

  render() {
    return (
      <div className="home-con">
        {/*<div className="test">测试less编译生效</div>*/}
        {/*<div>*/}
          {/*<Count></Count>*/}
        {/*</div>*/}
        <Map></Map>
      </div>
    );
  }
}