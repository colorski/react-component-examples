import React, { Component } from 'react';
import Icon from '../Icon';
import './UseIcon.css';

export default class UseIcon extends Component {
  render () {
    return (
      <div className="icon-box">
        <Icon type="send" />

<br />
        <Icon type="warn-o" eeid="功能信息_警示" />

<br />
        <Icon type="good" title="click me!" onClick={()=>alert('good! thank u!')} />

<br />
        <Icon type="star" style={{color: '#f00'}} />

<br />
        <Icon type="loading" />

      </div>
    )
  }
}
