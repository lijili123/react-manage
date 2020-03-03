import React from 'react'
import {requestAll} from '../../config/api.js'

import {Table} from 'antd'


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
      },
      {
        title: '楼栋',
        dataIndex: 'buildingName',
        key: 'buildingName',
      },
    ]
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
        this is List page.
      </div>
    );
  }
}