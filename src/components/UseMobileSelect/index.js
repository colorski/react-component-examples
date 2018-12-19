import React, { Component } from 'react';
import Select from '../m/Select';

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      customerId: 2
    }
  }
  
  render () {
    const _options =  {
      1:'小学',
      2:'初中',
      3:'高中',
      7:'幼儿园',
    }
    return (
      <div className="m-wrapper">
        <Select
          options={_options}
          nullOption={false}
          emptyTip="无可用联系人"
          value={this.state.customerId}
          placeholder="选择联系人"
          onChange={(v)=>console.log(v)}
        />
      </div>
    )
  }
}

////////////////////////////// Flex Modal:

// <Flex
//   v  - 添加ski-cpn-flex-v类，里面也用flex布局且flex-direction: column;
//   flex={3}         -  父宽度/兄弟个数*3
//   align="center"   -  居中显示
//   href="/"         -  有href属性，会使用a标签跳转
//   to="/UseIcon"    -  有to属性，会使用Link标签跳转
//   style={{}}       -  其它样式
// />

// //注意：

// FlexItem 可以作为Flex的子项循环
// 
