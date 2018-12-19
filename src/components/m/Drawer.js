import './Drawer.css'
import React, { Component } from 'react'
import _ from 'underscore'
import cns from 'classnames'

export default class Drawer extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: props.show,
      hiding: false,
    }
  }

  render(){
    const {show, hiding} = this.state
    const {children, className, style, direction, width, height, fullScreen, mask, onCancel} = this.props
    let elStyle = _.extend({}, style)
    if(width) elStyle.width = width
    if(height) elStyle.height = height
    const cls = cns('xkcpn-drawer', className, hiding&&'hiding',
      !show && 'hidden', fullScreen && 'full-screen')
    return <div className={cls} onClick={onCancel} onTouchStart={e=>e.stopPropagation()}>
      {mask && <div className="drawer-background"/>}
      <div className={"drawer-body direction-"+direction} style={elStyle}
        onClick={e=>{e.stopPropagation()}}
      >
        {children}
      </div>
    </div>
  }

  componentWillReceiveProps(newProps){
    if(this.props.show === newProps.show) return
    if(newProps.show){
      clearTimeout(this.hideTimeoutId)
      this.setState({show: true, hiding: false})
    }else{
      this.setState({hiding: true})
      this.hideTimeoutId = setTimeout(()=>this.setState({
        hiding: false,
        show: false
      }), 300)
    }
  }
}

Drawer.defaultProps = {
  show: false,
  direction: 'right',
  onCancel(){},
  mask: true
}
