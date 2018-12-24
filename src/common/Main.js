import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import List from '../containers/listContainer'
import './Main.css'

import SayHello from '../components/SayHello'
import SecondsTimer from '../components/SecondsTimer'
import TodoList from '../components/TodoList'
import UseCountdown from '../components/UseCountdown'

import UseIcon from '../components/UseIcon'
import UseRadioGroup from '../components/UseRadioGroup'
import UseSelect from '../components/UseSelect'
import UseModal from '../components/UseModal'
import UsePager from '../components/UsePager'
import UsePopOver from '../components/UsePopOver'
import UseCopy from '../components/UseCopy'

import UseMobileFlex from '../components/UseMobileFlex'
import UseMobileTimeline from '../components/UseMobileTimeline'
import UseMobileSelect from '../components/UseMobileSelect'

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
        <Route path="/UseCountdown" render={()=><UseCountdown />}></Route>

        {/* production */}
        <Route path="/UseIcon" render={()=><UseIcon />}></Route>
        <Route path="/UseRadioGroup" render={()=><UseRadioGroup />}></Route>
        <Route path="/UseSelect" render={()=><UseSelect />}></Route>
        <Route path="/UseModal" render={()=><UseModal />}></Route>
        <Route path="/UsePager" render={()=><UsePager />}></Route>
        <Route path="/UsePopOver" render={()=><UsePopOver />}></Route>
        <Route path="/UseCopy" render={()=><UseCopy />}></Route>

        {/* mobile */}
        <Route path="/UseMobileFlex" render={()=><UseMobileFlex />}></Route>
        <Route path="/UseMobileTimeline" render={()=><UseMobileTimeline />}></Route>
        <Route path="/UseMobileSelect" render={()=><UseMobileSelect />}></Route>
        
      </div>
    )
  }
}
