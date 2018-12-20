import './Select.css'
import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import _ from 'underscore'
import cns from 'classnames'
import Flex from './Flex'
import Icon from '../Icon'
//import Drawer from './Drawer'
// import Scroll from './Scroll'

export default class Select extends Component{
  constructor(props){
    super(props)
    this.state = {
      showSelector: false,
      rebuildMark: 1,
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }


  render(){
    const {className, children, placeholder, options, value, icon,
      disabled} = this.props
    const {showSelector} = this.state
    const noValue = !value

    return <div className={cns('skicpn-select', showSelector&&'selecting', disabled && 'disabled', className)}
      onClick={()=> {
        if(disabled || this.state.showSelector) return
          setTimeout(()=>{
            //this.renderSelectorInCtn(options)
            this.show()
          },1)
        }
      }
    >
      {children || <Flex>
        <Flex className={cns('sel-text', noValue && 'empty')}>
          {noValue ? placeholder : options.map(item => (item.key===value && item.text))}
        </Flex>
        {icon}
      </Flex>}
    </div>
  }
  
  renderSelectorInCtn(options){
    if(!this.mountedSelectorEl){
      const {getOptionsCtn} = this.props
      const ctnEl = getOptionsCtn ? getOptionsCtn() : window.document.body
      if(!ctnEl) return
      this.mountedSelectorEl = document.createElement('div')
      ctnEl.appendChild(this.mountedSelectorEl)
    }
    //ReactDOM.render(this.renderSelector(options), this.mountedSelectorEl)
  }

  show(){
    const {onShowOptions} = this.props
    onShowOptions && onShowOptions()
    this.setState({
      showSelector: true,
    })
    setTimeout(()=>{
      this.setState({rebuildMark: this.state.rebuildMark+1})
    }, 300)
  }

  hide(){
    this.setState({
      showSelector: false
    })
  }

}

Select.defaultProps = {
  placeholder: '请选择...',
  nullOption: {key: null, text:'全部'}, //空选项，为false时没有空选项
  emptyTip: '无可用选项', //没有任何选项（包括空选项）时的提示
  mask: true,
  icon: <Icon className="sel-arrow" type="down"/>,
  buttonBarPosition: 'top', //'top' | 'bottom'
  onChange: function(){},
  onCancel: function(){},
}
