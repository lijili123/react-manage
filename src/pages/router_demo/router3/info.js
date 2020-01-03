import React from 'react'
export default class  extends React.Component {

  render() {
    return (
      <div>
        this is Info page.
        <br/>
        路由参数
        {this.props.match.params.value}
      </div>
    );
  }
}