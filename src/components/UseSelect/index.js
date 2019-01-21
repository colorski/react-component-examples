import React, { Component } from 'react';
import Select from '../form/Select';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stageVal: 2,
      options: [{key: 1, text: '小学'}, {key: 2, text: '初中'}, {key: 3, text: '高中'}]
    }
  }
  
  render () {
    const { stageVal, options } = this.state
    return (
      <div className="form-element">
        <Select style={{ width: '80px' }}
          value={ stageVal }
          options={ options }
          all = { 1 }
          onChange={e=>{this.setState({stageVal: e.target.value}); console.log(e.target.value)}}
        />
        <hr />
        
      </div>
    )
  }
}

////////////////////////////// Select usage:

// <Select
//   value={ stageVal }
//   options={ options }
//   all = { 1 }
//   onChange={e=>{this.setState({stageVal: e.target.value}); console.log(e.target.value)}}
// />

// //注意：

// all 指的是显示还是不显示全部选项    1：显示  0：不显示
// options 是选项数据，可以是数组或对象，如：
//   options: [
//     {key: 1, text: '小学'}, 
//     {key: 2, text: '初中'}, 
//     {key: 3, text: '高中'}
//   ]
  
//   options: {
//     1: '小学',
//     2: '初中',
//     3: '高中'
//   }
