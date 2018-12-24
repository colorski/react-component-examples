//复制
import React, { Component } from 'react';
export default class CopyButton extends Component{
  constructor(props){
    super(props)
    this.state={
      children: '复制',
      tip: '已复制到剪贴板',
      style: {cursor:'pointer', color:'#55b2d6'}
    }
  }
  render(){
    const { value, children, tip, style } = this.props;
    return <span>
      <textarea value={value} readOnly="true" style={{position: 'absolute', left: '-1000px', width: '500px'}} ref={el=>this.textEl = el}></textarea>
      <span onClick={
          ()=>{
            let copyText = this.textEl
            copyText.readOnly = false;
            copyText.select();
            copyText.setSelectionRange(0, copyText.value.length);
            document.execCommand("copy");
            copyText.readOnly = true;
            alert(tip?tip:this.state.tip)
          }
        }
        style={style?style:this.state.style}
      >
        { children?children:this.state.children }
      </span>
    </span>
  }
}