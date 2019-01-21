import React, { Component } from 'react';
import Icon from '../Icon';

export default class UseIcon extends Component {
  render () {
    return (
      <div className="icon-box">
        <Icon type="info" onClick={()=>{
          window.MESSAGER.alert({
            content: '类似alert的弹出框',
            onOk: ()=>alert('window.MESSAGER.alert()')
          })
        }} /> alert

<br />
<br />
        <Icon type="info" onClick={()=>{
          window.MESSAGER.confirm({
            content: '类似confirm的弹出框',
            onOk: ()=>alert('window.MESSAGER.confirm()')
          })
        }} /> confirm

<br />
<br />
        <Icon type="info" onClick={()=>{
          window.MESSAGER.prompt({
            content: <div>
              <h2>修改备注</h2>
              <p style={{fontSize:'12px', color:'#aaa'}}>请输入备注（提示：最长可输入5个字符）</p>
            </div>,
            initValue: '默认内容',
            rules: [{regx: /^.{0,5}$/, msg: '最多可输入5个字符'}],
            onOk: (con,el)=>{
              console.log(con)
              el.close()
            }
          })
        }} /> prompt

<br />
<br />
        <Icon type="info" onClick={()=>{
          window.MESSAGER.error('你错了！ - window.MESSAGER.error("你错了！")')
        }} /> error

<br />
<br />
        <Icon type="info" onClick={()=>{
          window.MESSAGER.warn('警告！','window.MESSAGER.error("警告！","balabala")')
        }} /> warn

<br />
<br />
        <Icon type="info" onClick={()=>{
          window.MESSAGER.success('window.MESSAGER.success("成功！",2000, "600px")',2000, "600px")
        }} /> success

<br />

      </div>
    )
  }
}
