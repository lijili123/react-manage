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
    //http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16 百度地图api类参考
    this.initMap().then(BMap=>{
      var map = new BMap.Map('container')
      var point = new BMap.Point(112.378428,34.646351);
      map.centerAndZoom(point, 25);
      map.enableScrollWheelZoom(true);
//           var marker = new BMap.Marker(point);
//           map.addOverlay(marker);//像地图添加标注
      var myIcon = new BMap.Icon("/assets/mark.png", new BMap.Size(27, 40), {
        // 指定定位位置。
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
        // 图标中央下端的尖角位置。
        anchor: new BMap.Size(30, 70),
        // 设置图片偏移。
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。
//            imageOffset: new BMap.Size(0, 0 - 25)   // 设置图片偏移
      });
      // 创建标注对象并添加到地图
      var marker = new BMap.Marker(point, {icon: myIcon});
      map.addOverlay(marker)

      var pointCenter = map.getCenter();
      //创建圆对象
      let  circle = new BMap.Circle(pointCenter, 60, {
        strokeColor: "#1C85E8",
        strokeWeight: 1,
        fillColor: "#E2E8F1",
        fillOpacity: 0.6
      })
      //画到地图上面
      map.addOverlay(circle);
      var content = "洛阳北航科技园招商中心";
      var label = new BMap.Label(content, {       // 创建文本标注
        position: point,                          // 设置标注的地理位置
        offset: new BMap.Size(-100, -110)           // 设置标注的偏移量
      })
      label.setStyle({
        width:'188px',
        height:'32px',
        lineHeight:'32px',
        textAlign:'center',
        color:'#ffffff',
        background:'#1C85E8',
        fontSize:'14px',
        border:'none',
        borderRadius:'2px'
      })
      map.addOverlay(label);
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