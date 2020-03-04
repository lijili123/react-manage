import React from 'react'
import {requestAll} from '../../config/api.js'

import {Table,Button} from 'antd'
import moment from 'moment'
import './index.less'


export default class List extends React.Component {
  constructor(props){
    super(props)
  }
  state={
    tableList:[],
    columns :[
      {
        title: '客户姓名',
        dataIndex: 'customerName',
        key: 'customerName',
        align:'center'
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
        }
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align:'left',
        render: (text,record,index) => <div className="btn-list">
          <Button type="primary"size="small" onClick={()=>this.handleWatch(record)}>查看</Button>
          <Button type="primary" size="small">编辑</Button>
          <Button type="danger" size="small">删除</Button>
        </div>,
      },
    ]
  }
  handleWatch=(record)=>{
    console.log(record);
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
    return (
      <div>
        <Table dataSource={this.state.tableList} columns={this.state.columns} />;
      </div>
    );
  }
}