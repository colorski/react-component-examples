import React, { Component } from 'react';
import Select from '../Select';

export default class extends Component {
  state = {
    contactorId: 1002,
    options: [{key: 1001, text: '张三'}, {key: 1002, text: '李四'}, {key: 1003, text: '王二'}]
  }
  render () {
    const {contactorId, options} = this.state
    return (
      <div className="form-element">
        <Select
          placeholder="选择联系人"
          emptyitem="true"
          value={contactorId}
          options={options}
          onChange={e=>{console.log(e.target.value)}}
        />
      </div>
    )
  }
}