/**
 * Created by Ljili on 2020/3/28.
 */
import React from 'react'
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import RichText from  '../../components/RichText'
class Rich extends React.Component {
  constructor(props) {
    super(props)
  }
  state={
    text:''
  }
  initQuill(){
    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // 切换按钮
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // 用户自定义按钮值
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // 上标/下标
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // 减少缩进/缩进
      [{ 'direction': 'rtl' }],                         // 文本下划线

      [{ 'size': ['small', false, 'large', 'huge'] }],  // 用户自定义下拉
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // 主题默认下拉，使用主题提供的值
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                       // 清除格式
      ['link', 'image', 'video']
    ];
    var quill = new Quill('.editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      placeholder:"请输入",
      theme: 'snow',
    });
    quill.on('editor-change',function (value,ss) {
      console.log(ss);
    })
  }
  handleChange=(value)=>{
    this.setState({ text: value })
    console.log(value);
  }
  componentDidMount(){
    // this.initQuill()
  }
  render() {
    return (
      <div>
        {/*<div className="editor" style={{height:'500px'}}></div>*/}
        <RichText text={this.state.text} change={this.handleChange}></RichText>
      </div>
    )
  }
}

export default Rich