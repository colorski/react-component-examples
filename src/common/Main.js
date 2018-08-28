import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import List from './List'
import HelloReact from '../components/sayhello/HelloReact'
import TodoList from '../components/todolist/TodoList'
import TimerSecond from '../components/timersecond/TimerSecond'
import './Main.css'

export default class Main extends Component {
  render(){
    return (
      <div className="main-wrapper">
        <Route path="/" exact render={()=><List />}></Route>
        <Route path="/sayhello" render={()=><HelloReact name="React" />}></Route>
        <Route path="/timersecond" render={()=><TimerSecond />}></Route>
        <Route path="/todoList" render={()=><TodoList />}></Route>
      </div>
    )
  }
}
