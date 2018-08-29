import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      iptVal: '',
      listData: []
    }

    this.handleIptChange = this.handleIptChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDeleteItemClick = this.handleDeleteItemClick.bind(this);
  }

  render () {
    return (
      <div style={{margin: '2rem auto'}}>
        <div className="center">
          <label htmlFor="iptArea">输入内容：</label>
          <input type="text" id="iptArea" placeholder="输入内容" value={this.state.iptVal} onChange={this.handleIptChange} />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul className="center todoListem">
          {this.getListItem()}
        </ul>
      </div>
    )
  }

  getListItem () {
    const listData = this.state.listData;
    if(listData.length){
      return (
        listData.map((item, index) => {
          return (
            <TodoItem item={item} index={index} key={index} deleteItemEvent={this.handleDeleteItemClick} />
          );
        })
      );
    }else{
      return (
        <li className="no-pointer">暂无内容</li>
      );
    }
  }

  handleIptChange(e) {
    const v = e.target.value;
    this.setState(() => ({iptVal: v}));
  }

  handleButtonClick() {
    if(this.state.iptVal === ''){
      alert('未填写内容！');
      return false;
    }else{
      this.setState(() => ({
        listData: [...this.state.listData, this.state.iptVal],
        iptVal: ''
      }));
    }
  }

  handleDeleteItemClick (index) {
    const listData = [...this.state.listData];
    listData.splice(index, 1);
    this.setState(() => ({
      listData
    }));
  }
}
