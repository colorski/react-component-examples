import React, { Component } from 'react';
import _ from 'underscore';
import Timeline from '../m/Timeline';

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {addTime: "2018-12-19 11:40:23", tit:'开发过程中遇到的问题', content: "在开发过程之中，随着应用的复杂，状态也越来越多，所以我们会也需要划分多个reducer函数来处理这些状态"},
        {addTime: "2018-12-19 11:40:24", tit:'开发过程中遇到的问题', content: "在开发过程之中，随着应用的复杂，状态也越来越多，所以我们会也需要划分多个reducer函数来处理这些状态"},
        {addTime: "2018-12-19 11:40:25", tit:'开发过程中遇到的问题', content: "在开发过程之中，随着应用的复杂，状态也越来越多，所以我们会也需要划分多个reducer函数来处理这些状态"},
        {addTime: "2018-12-19 11:40:26", tit:'开发过程中遇到的问题', content: "在开发过程之中，随着应用的复杂，状态也越来越多，所以我们会也需要划分多个reducer函数来处理这些状态"},
      ]
    }
  }
  
  render () {
    const { data } = this.state;
    const _dataFormat = 'YY-MM-DD'
    return (
      <div className="m-wrapper">
        {
          _.map(data, (d, i)=><Timeline dateFormat={_dataFormat} time={d.addTime} title={d.tit} content={d.content} key={i} />)
        }
      </div>
    )
  }
}

////////////////////////////// Timeline Modal:

// <Timeline
//   dateFormat={_dataFormat}  - 时间格式 默认：YY/MM/DD HH:mm:ss
//   time={d.addTime} -  时间
//   title={d.tit}    -  标题
//   content={d.content}  -  内容
//   key={i}  -  循环时记得给key
// />

// //注意：
// 也可根据需求加其它属性参数
