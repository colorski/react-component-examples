import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './List.css';

export default class List extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listData: {
        "exercise": [],
        "production": [],
        "cellection": []
      }
    }
  }

  componentDidMount () {
    axios.get('/data/list')
      .then((res) =>
        {
          const data = {...res.data};
          this.setState({
            listData: data
          })
        }
      )
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <div className="list-wrapper">
        <ul>{ this.initExercise() }</ul>
        <ul>{ this.initProduction() }</ul>
        <ul>{ this.initCellection() }</ul>
      </div>
    )
  }

  initExercise () {
    const { exercise } = this.state.listData;
    if(exercise.length){
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

  initProduction () {
    const { production } = this.state.listData;
    if(production.length){
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

  initCellection () {
    const { cellection } = this.state.listData;
    if(cellection.length){
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


}
