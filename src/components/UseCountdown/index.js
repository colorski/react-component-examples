import React, { Component } from 'react';
import Countdown from '../Countdown';

export default class UseCountdown extends Component {
  render () {
    return (
      <div style={{marginTop:'30px', paddingLeft:'10px'}}>截至今晚23点还有：
        <p style={{color:'#f00', lineHeight: '30px'}}><Countdown endTo="23:00:00" /></p>
      </div>
    )
  }
}













////////////////////////////// Countdown usage:

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
