import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
  render () {
    return (
      <div className="list-wrapper">
        <ul>
          <li>
            <h3>标题</h3>
            <p>描述文字</p>
          </li>
          <li>
            <h3>标题</h3>
            <p>描述文字</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>标题</h3>
            <p>描述文字</p>
          </li>
          <li>
            <h3>标题</h3>
            <p>描述文字</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>标题</h3>
            <p>描述文字</p>
          </li>
          <li>
            <h3>标题</h3>
            <p>描述文字</p>
          </li>
        </ul>
      </div>
    )
  }
}
