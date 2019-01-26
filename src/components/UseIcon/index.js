import React, { Component } from 'react';
import Icon from '../Icon';
import './UseIcon.css';

export default class UseIcon extends Component {
  render () {
    return (
      <div className="icon-box">
        <Icon type="notice" />

<br />
        <Icon type="tag" />

<br />
        <Icon type="appreciate_light" title="click me!" onClick={()=>alert('good! thank u!')} />

<br />
        <Icon type="favor_fill_light" style={{color: '#f00'}} onClick={()=>{
          window.MESSAGER.alert({
              content: `这里使用了全局的MESSAGER.alert方法`,
              onOk(){
                return console.log('en')
              }
            })
          }} />

<br />
        <Icon type="loading" />

      </div>
    )
  }
}
