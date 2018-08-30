import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import List from './List'
import './Main.css'

import SayHello from '../components/SayHello'
import SecondsTimer from '../components/SecondsTimer'
import TodoList from '../components/TodoList'

import UseIcon from '../components/UseIcon'
import UseFormElement from '../components/UseFormElement'
import UseSearchInput from '../components/UseSearchInput'

export default class Main extends Component {
  render(){
    return (
      <div className="main-wrapper">
        {/* 主页面-列表页面 */}
        <Route path="/" exact render={()=><List />}></Route>

        {/* exercise */}
        <Route path="/SayHello" render={()=><SayHello name="React" />}></Route>
        <Route path="/SecondsTimer" render={()=><SecondsTimer />}></Route>
        <Route path="/TodoList" render={()=><TodoList />}></Route>

        {/* production */}
        <Route path="/UseIcon" render={()=><UseIcon />}></Route>
        <Route path="/UseFormElement" render={()=><UseFormElement />}></Route>
        <Route path="/UseSearchInput" render={()=><UseSearchInput />}></Route>

        {/* cellection */}
        
      </div>
    )
  }
}
