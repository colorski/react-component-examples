import React, { Component } from 'react';
import Modal from '../Modal';

import Select from '../form/Select';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      waiting: false,
      
      stageVal: 2
    }
  }
  
  render () {
    const { show, waiting, stageVal } = this.state
    return show && <Modal title="title-选择学段" onCancel={()=> this.setState({show: false})} extra={'extra-额外信息'}>
      <div style={{padding:'10px'}}>
        <Select style={{ width: '80px' }}
          value={ stageVal }
          options={[{key: 1, text: '小学'}, {key: 2, text: '初中'}, {key: 3, text: '高中'}]}
          all = { 1 }
          onChange={e=>{this.setState({stageVal: e.target.value}); console.log(e.target.value)}}
        />

        <button 
          style={{display: 'block', margin: '12px auto 0', cursor: 'pointer'}} 
          disabled={waiting} 
          onClick={()=>{this.setState({waiting: true})}}>提交{waiting && '中...'}
        </button>
      </div>
    </Modal>
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
