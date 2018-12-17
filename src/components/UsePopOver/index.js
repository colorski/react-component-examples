import React, { Component } from 'react'
import PopOver from '../PopOver';
import PopHover from '../PopHover';

export default class extends Component {
  
  render () {
    return <div style={{display: 'block', width: '100%', paddingTop: '15px'}}>
        <h1>PopOver</h1>
        <p>三角使用的图片</p>
      <hr />

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
          placement='left'
          trigger="click"
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span>鼠标点击</span>
        </PopOver>
      </div>
      
      {/* forth */}
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>forth-trigger="click" placement='top'</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopOver
          trigger='click'
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span style={{cursor: 'pointer', display:'inline-block', width: '200px', height: '300px'}}>鼠标点击</span>
        </PopOver>
      </div>

      <hr />
        <h1>PopHover</h1>
        <p>三角使用的伪类</p>
      <hr />
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>one-placement='right' trigger='click'</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='right'
          trigger='click'
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span style={{cursor: 'pointer'}}>鼠标点击</span>
          {/* <span style={{cursor: 'pointer', display:'inline-block', width: '200px', height: '300px'}}>鼠标点击</span> */}
        </PopHover>
      </div>
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>two-placement='left'</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='left'
          content={<div style={{padding: '10px', width: '120px'}}>
            <p>这是说明文字！</p>
          </div>}
        >
          <span style={{cursor: 'pointer'}}>鼠标移入</span>
        </PopHover>
      </div>
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>three-placement='right' trigger='click' popupTop={40}</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='top'
          popupTop={40}
          popupLeft={70}
          trigger='click'
          content={<div style={{padding: '10px', width: '200px'}}>
            <p>这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！这是说明文字！也可以是任意内容的组件！</p>
          </div>}
        >
          <span style={{cursor: 'pointer', display:'inline-block', width: '200px', height: '200px'}}>鼠标点击</span>
        </PopHover>
      </div>
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>four-placement='top' 上</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='top'
          content={<div style={{padding: '10px', width: '120px'}}>
            <p>这是说明文字！</p>
          </div>}
        >
          <span style={{cursor: 'pointer'}}>鼠标移入</span>
        </PopHover>
      </div>
      
      <h2 style={{height: '40px', lineHeight: '40px', borderBottom: '1px dashed #ccc'}}>four-placement='bottom' popupTop={50} popupLeft={50} 下</h2>
      <div style={{padding: '30px', textAlign: 'center'}}>
        <PopHover
          placement='bottom'
          popupTop={50}
          popupLeft={-150}
          content={<div style={{padding: '10px', width: '120px'}}>
            <p>这是说明文字！</p>
          </div>}
        >
          <span style={{cursor: 'pointer'}}>鼠标移入</span>
        </PopHover>
      </div>


    </div>
  }
}

////////////////////////////// PopOver Modal:   

// <Pophover
//   placement='left'     //left or right 出现在目标的左还是右
//   popupTop={140}       //控制弹出框上下的位置  注意：以此来控制三角的位置，但三角相对弹窗的位置是不能改变的
//   popupLeft={100}      //控制弹出框左右的位置  注意：以此来控制三角的位置，但三角相对弹窗的位置是不能改变的
//   trigger="click"      //默认是hover，如果写了这一项，是点击事件
//   content={<div style={{padding: '10px', width: '200px'}}>
//     <p>这是说明文字！也可以是任意内容的组件！</p>
//   </div>}
// >
//   <span>鼠标点击</span>   //目标元素，也可以是一个图标
// </PopOver> 


// //注意：popOver用了方向图片，只展示左右方向的，没有上下方向        popHover有上下左右方向，没用图片用的伪类，但没法控制三角形的位置，只能控制弹窗位置

// //推荐使用 Pophover组件
