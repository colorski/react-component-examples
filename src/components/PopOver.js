import './PopOver.css'
import React, { Component } from 'react'
import {genClassName} from '../utils/component'

export default class PopOver extends Component{
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
    const {content, children, placement, offsetTop, trigger, className} = this.props
    const topOrBottom = /bottom/.test(placement) ? 'bottom' : 'top'

    return <span className={genClassName("xkcpn-popover", className)}
      onMouseOver={this.overHandler}
      onMouseOut={this.outHandler}
      onClick={this.clickHandler}
    >
      {trigger === 'click' && this.state.show &&
        <div className="mask" onClick={()=>this.setState({show: false})}/>
      }
      {children}
      {this.state.show && <div className={"popup " + placement} style={{[topOrBottom]: (-offsetTop)+'px'}}>
        <div className={"popup-inner " + placement}>
          {content}
          <i className={"arrow " + placement} style={{[topOrBottom]: (offsetTop-2)+'px'}}/>
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

PopOver.defaultProps = {
  offsetTop: 8,
  trigger: 'hover',
  placement: 'right',
  timeout: 300,
  hideTimeout: 300,
}
