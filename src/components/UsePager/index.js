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
        total: 3268
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

////////////////////////////// Pager:

// //<Pager pageSizer={pageSizer} {...pagination} onChange={onChange} eearg={eearg} eeid={eeid}/>

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
