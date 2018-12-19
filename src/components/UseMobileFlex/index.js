import React, { Component } from 'react';
import Flex, { FlexItem } from '../m/Flex';

export default class extends Component {
  
  render () {
    return (
      <Flex style={{height: '50px', lineHeight: '50px'}}>
        <Flex flex={2}>
          <FlexItem>child</FlexItem>
          <FlexItem>child</FlexItem>
        </Flex>
        <Flex align="center">
          position center
        </Flex>
        <Flex href="/" target="_blank">
          a href
        </Flex>
        <Flex to="/UseIcon">
          Link to /UseIcon
        </Flex>
      </Flex>
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
