import React, { Component } from 'react';
import Toast from '../Toast';

export default class extends Component {
  render () {
    return (
      <div style={{padding: '20px', width: '100%'}}>
        <div>
          <span onClick={()=>Toast.info('信息提示！',3000, ()=>Toast.success('成功提示！'))} style={{cursor: 'pointer', marginRight:'20px'}}>info</span>
          <span onClick={()=>Toast.success('成功提示！')} style={{cursor: 'pointer', marginRight:'20px'}}>success</span>
          <span onClick={()=>Toast.warning('警告提示！')} style={{cursor: 'pointer', marginRight:'20px'}}>warning</span>
          <span onClick={()=>Toast.error('错误提示！')} style={{cursor: 'pointer', marginRight:'20px'}}>error</span>
          <span onClick={()=>Toast.loading('加载提示！')} style={{cursor: 'pointer', marginRight:'20px'}}>loading</span>
          <span onClick={() => {
              const hideLoading = Toast.loading('加载中...', 0, () => {
                  Toast.success('加载完成',1500)
              })
              setTimeout(hideLoading, 2000)
            }
          } style={{cursor: 'pointer', marginRight:'20px'}}>loadingCallback</span>
        </div>
      </div>
    )
  }
}

