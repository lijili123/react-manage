/**
 * Created by Ljili on 2020/4/15.
 */
import React from 'react'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'


import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/directionality'
// import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/help'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/table'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/wordcount'


import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
class TinyEditor extends React.Component{
constructor(props){
  super(props)
}
state={
  initialValue:'测试'
}

handleEditorChange = (content, editor) => {
  console.log('Content was updated:', content);
}
componentDidMount(){
  tinymce.init({})
}
render(){
 const init={
      language_url: '/tinymce/langs/zh_CN.js',
      language: 'zh_CN',
      skin_url: '/tinymce/skins/ui/oxide',
      min_height: 500,
      plugins: 'advlist image media table textcolor wordcount contextmenu print preview searchreplace autolink directionality fullscreen  link  code codesample  charmap hr pagebreak   insertdatetime   textpattern help lists ',
      toolbar: ['searchreplace undo redo  | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link | alignleft aligncenter alignright alignjustify outdent indent | subscript superscript removeformat | bullist numlist ','styleselect formatselect fontselect fontsizeselect | table image media | charmap  hr pagebreak insertdatetime | print preview fullscreen '],
      insertdatetime_formats: ["%H点%M分", "%Y年%m月%d日"],
      branding: false,
      fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
      font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Verdana=Verdana",
      style_formats: [
      {
        title: '首行缩进',
        block: 'p',
        styles: { 'text-indent': '2em' }
      },
      {
        title: '行高',
        items: [
          {title: '1', styles: { 'line-height': '1' }, inline: 'span'},
          {title: '1.5', styles: { 'line-height': '1.5' }, inline: 'span'},
          {title: '2', styles: { 'line-height': '2' }, inline: 'span'},
          {title: '2.5', styles: { 'line-height': '2.5' }, inline: 'span'},
          {title: '3', styles: { 'line-height': '3' }, inline: 'span'}
        ]
      }
    ],
      menubar: false,
      images_upload_handler: (blobInfo, success, failure) => {
      let formData = new FormData();
      formData.append('group','richText');
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      axios({
        method: 'POST',
        url:'api/frame/files' ,
        data: formData,
      }).then((res) => {
        let link="api/frame/files/"+res.data.data.fileId+"?openType=2";
        success(link)
      })
        .catch(() => {
          failure('上传失败')
        });
    }
  }
  return (
    <div>
      <Editor
        initialValue={this.props.initialValue}
        init={init}
        onEditorChange={this.handleEditorChange}
      />
    </div>
  )
}
}
export default TinyEditor