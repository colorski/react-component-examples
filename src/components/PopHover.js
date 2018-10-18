import './PopHover.css'
import React, { Component } from 'react'
import {genClassName} from '../utils/component'

export default class PopHover extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
    this.overHandler = this.overHandler.bind(this)
    this.outHandler = this.outHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  render(){
    const {content, children, placement, trigger, className, popupTop, popupLeft} = this.props
    const topOrBottom = /bottom/.test(placement) || /left/.test(placement) || /right/.test(placement) ?  'top': 'bottom'

    return <span className={genClassName("xkcpn-pophover", className)}
      onMouseOver={this.overHandler}
      onMouseOut={this.outHandler}
      onClick={this.clickHandler}
    >
      {trigger === 'click' && this.state.show &&
        <div className="mask" onClick={()=>this.setState({show: false})}/>
      }
      {children}
      {this.state.show && <div className={"popup " + placement}  style={{[topOrBottom]: popupTop+'px', left: popupLeft+'px'}}>
        <div className={"popup-inner " + placement}>
          {content}
        </div>

      </div>}
    </span>
  }

  overHandler(){
    if(this.props.trigger !== 'hover') return
    const {timeout} = this.props
    clearTimeout(this.hideTimeoutId)
    this.showTimeoutId = setTimeout(()=>this.setState({show: true}), timeout)
  }

  outHandler(){
    if(this.props.trigger !== 'hover') return
    const {hideTimeout} = this.props
    clearTimeout(this.showTimeoutId)
    this.hideTimeoutId = setTimeout(()=>this.setState({show: false}), hideTimeout)
  }

  clickHandler(){
    if(this.props.trigger !== 'click') return
    !this.state.show && this.setState({show: true})
  }

  componentDidUpdate(prevState){
    const {show} = this.state
    const {onPopup} = this.props
    show && !prevState.show && onPopup && onPopup()
  }

  componentDidMount(){
    const {onLoad} = this.props
    onLoad && onLoad(this)
  }

  hide(){
    this.setState({show: false})
  }
}

PopHover.defaultProps = {
  offsetTop: 8,
  trigger: 'hover',
  placement: 'right',
  timeout: 300,
  hideTimeout: 300,
}


// <PopHover
//   placement='top'     -- 位置，当用到top或bottom时，会用到popupTop, popupLeft去调整位置
//   trigger="click"
//   popupTop={40}
//   popupLeft={40}
//   content={}            
// >
//   <span>鼠标点击</span>
// </PopHover> 
