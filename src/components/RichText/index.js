/**
 * Created by Ljili on 2020/3/28.
 */
import React from 'react'
import ReactQuill,{ Quill, Mixin, Toolbar } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
class RichText extends React.Component {
  constructor(props) {
    super(props)
  }
  state={
    text:''
  }
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': [1,2,3,4,5] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'font': [] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image', 'video']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  handleChange=(value)=>{
    this.props.change(value)
  }
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <ReactQuill style={{height:'500px'}}
                    modules={this.modules}
                    formats={this.formats}
                    value={this.props.text}
                    onChange={this.handleChange} />
      </div>
    )
  }
}

export default RichText