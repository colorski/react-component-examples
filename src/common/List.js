import React, { Component } from 'react';
import axios from 'axios';
import './List.css';

export default class List extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render () {
    return (
      <div className="list-wrapper">
        <ul>{ this.initListData() }</ul>
        <ul>{ this.initListData() }</ul>
        <ul>{ this.initListData() }</ul>
      </div>
    )
  }

  initListData () {
    const { list } = this.state;
    if(list.length){

      

      return (
        list.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        ))
      )
    }else{
      return (
        <p className="no-tips">暂无内容！</p>
      )
    }
  }

  componentDidMount () {
    axios.get('/api/list')
      .then((res) => 
        {
          const data = [...res.data];
          this.setState({
            list: data
          })
        }
      )
      .catch((err) => console.log(err))
  }
}
