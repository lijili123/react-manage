/**
 * Created by Ljili on 2020/1/2.
 */
import axios from 'axios'
import { message } from 'antd';
axios.defaults.method = 'post';
axios.defaults.baseURL = '/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 300000;
let loading=null
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.method!=='get'){
    loading=message.loading({ content: 'Loading...'},0);
  }
  // if(window.sessionStorage.token){
  //   config.headers.Authorization = `${window.sessionStorage.token}`;
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // message.success({ content: 'Loaded!'})
  setTimeout(loading,1000)
  let {data:{code,msg,data},headers:{total}}=response
  if(code==0){
    if(total){
      return {listTotal:Number(total),data}
    }else{
      return {data}
    }
  }else{
    message.error(msg);
    return Promise.reject({code, msg});
  }
}, function (error) {
  // 对响应错误做点什么
  let res = error.response;
  if (res) {
    switch (parseInt(res.status)) {
      case 403:
        message.error('您没有对应的权限做此操作');
        break;
      case 404:
        message.error('API接口不存在');
        break;
      case 504:
        message.error('服务异常，请稍后重试');
        break;
      case 500:
        message.error(res.data.message);
        break;
      default:
        message.error('服务暂时不可用，请稍后重试');
    }
  } else {
    message.error('网络异常，请稍后重试');
  }
  return Promise.reject(error);
});

const requestAll = (options)=>{
  return new Promise((resolve,reject)=>{
    axios({
      url:options.url,
      method:options.method,
      headers:options.headers
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
const get = (options)=>{
  return new Promise((resolve,reject)=>{
    axios({
      url:options.url,
      method:'get',
      headers:options.headers
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
const post = (options)=>{
  return new Promise((resolve,reject)=>{
    axios({
      url:options.url,
      method:'post',
      headers:options.headers
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
export {requestAll,get,post}