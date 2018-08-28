import React, { Component } from 'react';
import List from './List'
import './Main.css'

export default class Main extends Component {
  render(){
    return (
      <div className="main-wrapper">
        <List />
      </div>
    )
  }
}