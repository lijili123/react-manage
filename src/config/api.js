/**
 * Created by Ljili on 2020/1/2.
 */
import axios from 'axios'
axios.defaults.method = 'post';
axios.defaults.baseURL = '/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 300000;
const requestAll = (options)=>{
  return new Promise((resolve,reject)=>{
    axios({
      url:options.url,
      method:options.method,
      headers:options.headers
    }).then(res=>{
      if(res.status==200){
        resolve(res.data)
      }else{
        reject(res)
      }
    })
  })
}
export default requestAll