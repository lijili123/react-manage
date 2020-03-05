import React from 'react'
import {requestAll} from '../../config/api.js'

import {Table,Button} from 'antd'
import moment from 'moment'
import DrawerForm from './DrawerForm'
import './index.less'

const init={
  customerName:"",
  code:'',
  buildingName:'',
  sex:'',
  startDate:'',
  endDate:'',
}
export default class List extends React.Component {
  constructor(props){
    super(props)
  }
  state={
    tableList:[{
      customerName:"张三",
      code:'naskdkml',
      buildingName:'c7-2',
      sex:0,
      startDate:1577836800000,
      endDate:1577836800000,
      key:'1'
    },
      {
        customerName:"李四",
        code:'naskdkml',
        buildingName:'c7-2',
        sex:1,
        startDate:1577836800000,
        endDate:1577836800000,
        key:'2'
      },
      {
        customerName:"王五",
        code:'naskdkml',
        buildingName:'c7-2',
        sex:2,
        startDate:1577836800000,
        endDate:1577836800000,
        key:'3'
      }
    ],
    visible:false,
    clickType:'add',
    formData:Object.assign(init),
    listTotal:0,
    columns :[
      {
        title: '客户姓名',
        dataIndex: 'customerName',
        key: 'customerName',
        align:'center'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align:'center',
        render:(text, record, index)=>{
          if(text==0){
            return '保密'
          }else if(text==1){
            return '女'
          }else{
            return '男'
          }
        }
      },
      {
        title:'协议编号',
        dataIndex:'code',
        key:'code',
        align:'center'
      },
      {
        title: '楼栋',
        dataIndex: 'buildingName',
        key: 'buildingName',
        align:'center'
      },
      {
        title:'开始时间',
        dataIndex:'startDate',
        key:'startDate',
        align:'center',
        render:(text, record, index)=>{
          return moment(text).format('YYYY-MM-DD')
        },
      },
      {
        title: '结束时间',
        dataIndex: 'endDate',
        key: 'endDate',
        align: 'center',
        render: (text, record, index) => {
          return moment(text).format('YYYY-MM-DD')
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align:'left',
        render: (text,record,index) => <div className="btn-list">
          <Button type="primary"size="small" onClick={()=>this.handleWatch(record)}>查看</Button>
          <Button type="primary" size="small" onClick={()=>this.handleEdit(record)}>编辑</Button>
          <Button type="danger" size="small" onClick={()=>this.handleDel(index)}>删除</Button>
        </div>,
      },
    ]
  }
  handleAdd=()=>{
    this.setState({
      visible:true,
      formData:Object.assign(init),
      clickType:'add'
    })
  }
  handleWatch=(record)=>{
    this.setState({
      visible:true,
      formData:record,
      clickType:'watch'
    })
  }
  handleEdit=(record)=>{
    this.setState({
      visible:true,
      formData:record,
      clickType:'edit'
    })
  }
  handleDel=(index)=>{
    this.state.tableList.splice(index,1)
    let arr=[...this.state.tableList]
    this.setState({
      tableList:arr
    })
  }
  handleClose=()=>{
    this.setState({
      visible:false
    })
  }
  handleSave = () => {
    this.setState({
      visible:false
    })
  }
  getList(){
    requestAll({
      url:'/pomp/contract/networks',
      method:'get',
    }).then(res=>{
      console.log(res);
      res.data.forEach((item,index)=>{
        item.key=index
      })
      this.setState({
        tableList:res.data
      })
    })
  }
  componentDidMount(){
    this.getList()
  }

  render() {
    const pagination={
      pageSize:5,
    }
    return (
      <div>
        <Button type="primary"size="small" onClick={this.handleAdd}>添加</Button>
        <Table dataSource={this.state.tableList} columns={this.state.columns} pagination={pagination}/>;
        <DrawerForm visible={this.state.visible} onClose={this.handleClose} formData={this.state.formData} onCloseSave={this.handleSave} clickType={this.state.clickType}></DrawerForm>
      </div>
    );
  }
}