/**
 * Created by Ljili on 2020/3/5.
 */
import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
const { Option } = Select;

class DrawerForm extends React.Component {
  constructor(props){
    super(props)
  }
  state={
    sexList:[
      {
        value:0,
        label:'保密'
      },
      {
        value:1,
        label:'女'
      },
      {
        value:2,
        label:'男'
      }
    ],
    children:[]
  }
  formatSex=()=>{
    let children=[]
    this.state.sexList.forEach(item=>{
      children.push(<Option key={item.value} value={item.value}>{item.label}</Option>)
    })
    this.setState({
      children:children
    })
  }
  componentDidMount(){
    this.formatSex()
  }
  onClose = () => {
    this.props.form.resetFields()
   this.props.onClose()
  };
  onSave = (e) => {
    e.preventDefault();
    var _this=this
    let formData= this.props.form.getFieldsValue()//获取表单值
    _this.props.form.validateFields(function (err) {
      if(err){
        return
      }
      // console.log(formData);
      _this.props.onCloseSave()
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let formData=this.props.formData
    return (
      <div>
        <Drawer
          title="查看"
          width={720}
          onClose={this.onClose}
          visible={this.props.visible}
          // bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={this.onClose}
                style={{ marginRight: 8 }}
              >
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="客户姓名"
                >
                  {
                    getFieldDecorator('customerName',{
                      rules:[
                        {
                          required: true,
                          message: '请输入客户姓名',
                        },
                      ],
                      initialValue:formData.customerName
                    })(<Input placeholder="请输入" disabled={this.props.clickType=='watch'} />)
                  }
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="性别"
                >
                  {getFieldDecorator('sex', {
                    rules: [{ required: true, message: '请选择性别' }],
                    initialValue:formData.sex
                  })(
                    <Select placeholder="请选择性别" disabled={this.props.clickType=='watch'} >
                      {this.state.sexList.map(item => (
                        <Option key={item.value} value={item.value}>{item.label}</Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="楼栋"
                >
                  {
                    getFieldDecorator('buildingName',{
                      rules:[
                        {
                          required: true,
                          message: '请输入楼栋',
                        },
                      ],
                      initialValue:formData.buildingName
                    })(<Input placeholder="请输入" disabled={this.props.clickType=='watch'} />)
                  }
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="协议编号"
                >
                  {
                    getFieldDecorator('code',{
                      rules:[
                        {
                          required: true,
                          message: '请输入协议编号',
                        },
                      ],
                      initialValue:formData.code
                    })(<Input placeholder="请输入" disabled={this.props.clickType=='watch'}  />)
                  }
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Row>
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={this.onClose}
                style={{ marginRight: 8 }}
              >
                取消
              </Button>
              <Button type="primary" onClick={this.onSave}>
                保存
              </Button>
            </div>
          </Row>
        </Drawer>
      </div>
    );
  }
}
export default Form.create({})(DrawerForm)