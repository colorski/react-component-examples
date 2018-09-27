import React, { Component } from 'react';
import Pager from '../Pager';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      //pageSizer: true, 
      pagination: {
        current: 1,
        pageSize: 20,
        total: 383268
      }
    }
  }
  
  render () {
    const { pagination } = this.state
    return (
      <div style={{padding: '20px'}}>
        <Pager {...pagination} onChange={()=>console.log('onChange')} />
      </div>
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
