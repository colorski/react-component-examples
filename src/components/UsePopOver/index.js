import React, { Component } from 'react'
import PopOver from '../PopOver';
import PopHover from '../PopHover';

export default class extends Component {
  
  render () {
    return <div style={{display: 'block', width: '100%'}}>
      {/* first */}
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>first-default</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopOver
          content={<div style={{padding: '10px', width: '320px'}}>
            <p>这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span>鼠标移入</span>
        </PopOver>
      </div>
      
      {/* second */}
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>second-placement="left"</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopOver
          offsetTop={10}
          placement='left'
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span>鼠标移入</span>
        </PopOver>
      </div>
      
      {/* third */}
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>third-trigger="click"</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopOver
          offsetTop={10}
          placement='left'
          trigger="click"
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span>鼠标点击</span>
        </PopOver>
      </div>

      <hr />
        <h1>PopHover</h1>
      <hr />
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>third-placement='top'</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='top'
          offset={40}
          trigger='click'
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span style={{cursor: 'pointer'}}>鼠标点击</span>
        </PopHover>
      </div>
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>third-placement='bottom'</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='bottom'
          offset={40}
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span style={{cursor: 'pointer'}}>鼠标点击</span>
        </PopHover>
      </div>


    </div>
  }
}

////////////////////////////// PopOver Modal:   

{/* 

<PopOver
  offsetTop={10}       //方向图标的上下偏移值
  placement='left'     //left or right 出现在目标的左还是右
  trigger="click"      //默认是hover，如果写了这一项，是点击事件
  content={<div style={{padding: '10px', width: '200px'}}>
    <p>这是说明文字！也可以是任意内容的组件！</p>
  </div>}
>
  <span>鼠标点击</span>   //目标元素，也可以是一个图标
</PopOver> 

*/}

// //注意：用了方向图片，只展示左右方向的，没有上下方向

// //推荐使用 PopupOver组件
