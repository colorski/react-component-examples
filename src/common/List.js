import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import './List.css';

export default class List extends Component {

  render () {
    let list = {};
    if(this.props.list!==null){list = this.props.list}
    const { exercise, production, cellection } = list;
    return (
      <div className="list-wrapper">
        <ul>{ this.initExercise(exercise) }</ul>
        <ul>{ this.initProduction(production) }</ul>
        <ul>{ this.initCellection(cellection) }</ul>
      </div>
    )
  }

  initExercise (exercise) {
    if(exercise && exercise.length){
      return (
        exercise.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          </li>
        ))
      )
    }else{
      return (
        <p className="no-tips">暂无内容！</p>
      )
    }
  }

  initProduction (production) {
    if(production && production.length){
      return (
        production.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          </li>
        ))
      )
    }else{
      return (
        <p className="no-tips">暂无内容！</p>
      )
    }
  }

  initCellection (cellection) {
    if(cellection && cellection.length){
      return (
        cellection.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          </li>
        ))
      )
    }else{
      return (
        <p className="no-tips">暂无内容！</p>
      )
    }
  }

  componentDidMount(){
    this.props.onInit()
  }

}
