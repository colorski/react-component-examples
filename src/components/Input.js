import React, { Component } from 'react';
import _ from 'underscore';
import Icon from './Icon';
import './Input.css';

const changeEvents = [
  'onChange',
  'onInput',
  'onKeyUp',
  'onKeyDown',
  'onKeyPress'
]

export default class extends Component{
  render(props){
    const inputProps = _.chain(props).omit('clearable').value()
    return <span className="xkcpn-input">
      <input {...inputProps} ref={el=>this.inputEl = el}></input>
      {props.value &&
        <span className="clear-btn">
          <Icon type="close-o" onClick={()=>{
            const event = {target: {value: ''}}
            changeEvents.forEach(name => props[name] && props[name](event))
            this.inputEl.focus()
          }}/>
        </span>
      }
    </span>
  }
}
