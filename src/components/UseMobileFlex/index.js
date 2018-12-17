import React, { Component } from 'react';
import Flex from '../m/Flex';

export default class extends Component {
  
  render () {
    return (
      <Flex>
        <Flex style={{height: '30px', lineHeight: '30px'}}>
          <Flex>
            Flex child
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
      </Flex>
    )
  }
}

////////////////////////////// Select Modal:

// <Modal
//   title="title-选择学段"
//   onCancel={()=> this.setState({show: false})}
//   extra={'extra-额外信息'}
//   
// />

// //注意：

// 
// 
// 
// 
// 
// 
// 
// 
// 
