import axios from 'axios'
import requestAll from './../../config/api'
import MD5 from 'md5'
import React from "react";
import './index.css'
import {withRouter} from 'react-router-dom'
import { Card, Form, Input, Button, message, Icon, Checkbox,Row,Col} from "antd";
const FormItem = Form.Item;
class Login extends React.Component{
  state={
    img:'',
  }
  handleSubmit = ()=>{
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo);
    var _this=this
    console.log(_this.props.history);
    window.sessionStorage.setItem('user',true)
    _this.props.history.replace('/')
    // this.props.form.validateFields((err,values)=>{
    //   axios({
    //     url:`/frame/login?lvcode=${userInfo.code}`,
    //     method: 'post',
    //     data: {
    //       loginId:userInfo.loginId,
    //       password:userInfo.password
    //     }
    //   }).then(res=>{
    //     axios({
    //       url:'/frame/users/menus',
    //       method: 'get',
    //     }).then(data=>{
    //       debugger
    //       // console.log(data);
    //       console.log(_this.props);
    //       _this.props.history.replace('/home')
    //       window.sessionStorage.setItem('menus',JSON.stringify(data.data.data))
    //       window.sessionStorage.setItem('user',true)
    //     })
    //   })
    // })
  }
  handleCode=(e)=>{
    let imgs="/frame/slcfg/lvcode" + "?linkTime=" + new Date().getTime()
    this.setState({
      img:imgs
    })
  }
  componentWillMount(){
    let imgs="/frame/slcfg/lvcode" + "?linkTime=" + new Date().getTime()
    this.setState({
      img:imgs
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-con'>
          <div className="login-left">
          </div>
          <div className="login-right">
            <div className="login-title">登录</div>
            <Form >
              <FormItem>
                {
                  getFieldDecorator('loginId',{
                    initialValue:'',
                    rules:[
                      {
                        required:true,
                        message:'用户名不能为空'
                      },
                    ],
                  })(
                    <Input prefix={<Icon type="user"/>} style={{height:'40px'}}  placeholder="请输入用户名" />
                  )
                }
              </FormItem>
              <FormItem >
                {
                  getFieldDecorator('password', {
                    initialValue: '',
                    rules: [ {
                      required:true,
                      message:'密码不能为空'
                    },]
                  })(
                    <Input prefix={<Icon type="lock" />} style={{height:'40px'}}  type="password" placeholder="请输入密码" />
                  )
                }
              </FormItem>
              <FormItem>
                <Row gutter={20}>
                  <Col span={14}>
                    {
                      getFieldDecorator('code', {
                        initialValue: '',
                        rules: [ {
                          required:true,
                          message:'验证码不能为空'
                        },]
                      })(
                        <Input prefix={<Icon type="lock" />} style={{height:'40px'}}  type="text" placeholder="请输入验证码" />
                      )
                    }
                  </Col>
                  <Col span={10} style={{textAlign:'right'}}>
                    <img src={this.state.img} alt="验证码" title="换一张,不区分大小写" style={{width:'120px',height:'40px',verticalAlign:'top'}}
                         onClick={this.handleCode}/>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={this.handleSubmit}>登录</Button>
              </FormItem>
            </Form>
          </div>
      </div>
    );
  }
}
export default withRouter(Form.create()(Login));