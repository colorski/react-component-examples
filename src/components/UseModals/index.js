import React, { Component } from 'react';
import Modals from '../Modals';

export default class extends Component {
  render () {
    const { alert, confirm, prompt } = Modals;
    const _alertContent = <div style={{fontSize:'14px'}}><p>确认提示框！</p><p>确认提示框！</p><p>确认提示框！</p></div>
    return (
      <div style={{padding: '20px', width: '100%'}}>
        <div>
          <span onClick={()=>alert({ content: _alertContent })}  style={{cursor: 'pointer', marginRight:'20px'}}>alert</span>
          <span onClick={()=>confirm({
                content: '确定要删除吗？',
                onOk() { console.log('文件已删除！') },
                onCancel() { console.log('用户已取消操作。') },
                //okText: '提交',
                //cancleText: '不提交',
            })} style={{cursor: 'pointer', marginRight:'20px'}}>confirm
          </span>
          <span onClick={()=>prompt({
                content: _alertContent,
                onOk(data) { console.log(`已修改为：${data}`) },
                onCancel() { console.log('用户已取消操作') }
            })} style={{cursor: 'pointer', marginRight:'20px'}}>prompt</span>
        </div>
      </div>
    )
  }
}

