import React, { Component } from 'react';
import CopyButton from '../CopyButton';

export default class extends Component {
  render () {
    const orderValue = "888013"
    return (
      <div>
        <code>{ orderValue }</code>
        <CopyButton value={ orderValue } children="点击复制" tip={`已复制到剪贴板！复制的内容为：${orderValue}`} style={{color: '#f00'}} />
      </div>
    )
  }
}

////////////////////////////// CopyButton usage:

// <CopyButton
//   value={ orderValue } //被复制的内容 - 必填
//   children="点击复制"   //按钮内容，也可以是jsx元素，有默认 复制
//   style={{color: '#f00'}} //按钮样式， 有默认 {cursor:'pointer', color:'#55b2d6'}
//   tip="已复制到剪贴板！" //提示文字， 有默认 '已复制到剪贴板'
// />

// //注意：

// value 是必填项，其它都有默认项
