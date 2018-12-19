import './Select.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'underscore'
import cns from 'classnames'
import Flex from './Flex'
import Icon from '../Icon'
import Drawer from './Drawer'
import Scroll from './Scroll'

export default class Select extends Component{
  constructor(props){
    super(props)
    this.state = {
      showSelector: false,
      cascadeValues: [],
      rebuildMark: 1,
    }
    this.scrolls = []
    this.cascading = _.isArray(props.value)
    this.mutiOption = _.isArray(props.options[0]) ||
      (_.isObject(props.options[0]) && !props.options[0].key)
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.getOptionList = this.getOptionList.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.okHandler = this.okHandler.bind(this)
  }


  render(){
    const {className, children, placeholder, options, value, displayValue, icon,
      disabled} = this.props
    const {showSelector} = this.state
    const valueGroup = this.cascading ? value : [value]
    let optionsGroup = this.mutiOption ? options : [options]
    optionsGroup = optionsGroup.map(this.getOptionList)
    const selectedGroup = valueGroup.map((value, i) =>
      optionsGroup[i].find(item =>
        !_.isUndefined(item.key) && !_.isNull(item.key) && item.key === value
      )
    )
    // const colMaxHeight = Math.round(window.document.documentElement.getBoundingClientRect().height*0.6)
    const noValue = !_.any(valueGroup)

    this.renderSelectorInCtn(optionsGroup)

    return <div className={cns('xkcpn-select', showSelector&&'selecting', disabled && 'disabled', className)}
      onClick={()=> {
        if(disabled || this.state.showSelector) return
          setTimeout(()=>this.show(),1)
        }
      }
    >
      {children || <Flex>
        <Flex className={cns('sel-text', noValue && 'empty')}>
          {noValue ? placeholder : (displayValue || selectedGroup.map(item => (item && item.text) || ''))}
        </Flex>
        {icon}
      </Flex>}
    </div>
    // $$('div', {
    //   eeid: eeid ? 'sel-btn_'+eeid : 'null',
    //   eearg,
    //   className: cns('xkcpn-select', showSelector&&'selecting', disabled && 'disabled', className),
    //   onClick: ()=> {
    //     if(disabled || this.state.showSelector) return
    //     setTimeout(()=>this.show(),1)
    //   }
    // },
    //   children || $$(Flex, {},
    //     $$(Flex, {
    //       className: cns('sel-text', noValue && 'empty'),
    //     },
    //       noValue ? placeholder :
    //         (displayValue || selectedGroup.map(item => (item && item.text) || ''))
    //     ),
    //     icon
    //   ),
    //   // !getOptionsCtn && this.renderSelector(optionsGroup)
    // )
  }

  renderSelector(optionsGroup){
    const {optionTitle, value, mask, getOptionsCtn, buttonBarPosition, onCancel} = this.props
    const {showSelector} = this.state
    const valueGroup = this.cascading ? value : [value]
    const optionTitleGroup = optionTitle && (_.isArray(optionTitle) ? optionTitle : [optionTitle])

    return <div className="xkcpn-select-selector">
      <Drawer 
        fullScreen={!getOptionsCtn}
        show={showSelector}
        direction={getOptionsCtn ? 'top' : 'bottom'}
        height="auto"
        onCancel={()=>{
          this.hide()
          onCancel()
        }}
        mask={mask}
      />
      {buttonBarPosition==='top' && this.renderButtonBar()}
      {
        optionTitleGroup && <Flex className="opt-title">
          {
            optionTitleGroup.map(title =><Flex className="title-text" key={title}>{title}</Flex>)
          }
        </Flex>
      }
      <Flex>
        {
          optionsGroup.map((list, i)=>{
            return <Flex className="opt-col-wrapper" key={i}>
              <div className="opt-col">
                {
                  this.renderOptionColumn(
                    i,
                    list,
                    valueGroup[this.cascading ? i : 0],
                    optionTitleGroup && optionTitleGroup[i]
                  )
                }
              </div>
            </Flex>
          })
        }
        {buttonBarPosition!=='top' && this.renderButtonBar()}
      </Flex>
    </div>

    // $$('div', {
    //   className:'xkcpn-select-selector',
    //   // onClick(e){e.stopPropagation()}
    // },
    //   $$(Drawer, {
    //     fullScreen: !getOptionsCtn,
    //     show: showSelector,
    //     direction: getOptionsCtn ? 'top' : 'bottom',
    //     height: 'auto',
    //     onCancel: ()=> {
    //       this.hide()
    //       onCancel()
    //     },
    //     mask: mask
    //   },
    //     buttonBarPosition=='top' && this.renderButtonBar(),
    //     optionTitleGroup && $$(Flex, {className: 'opt-title'},
    //       optionTitleGroup.map(title =>
    //         $$(Flex, {className:"title-text"}, title)
    //       )
    //     ),
    //     $$(Flex, {},
    //       optionsGroup.map((list, i)=>
    //         $$(Flex, {className: "opt-col-wrapper"},
    //           $$('div', {
    //             className: "opt-col",
    //             // style: {maxHeight: colMaxHeight}
    //           },
    //             this.renderOptionColumn(
    //               i,
    //               list,
    //               valueGroup[this.cascading ? i : 0],
    //               optionTitleGroup && optionTitleGroup[i]
    //             )
    //           )
    //         )
    //       )
    //     ),
    //     buttonBarPosition!='top' && this.renderButtonBar(),
    //   )
    // )
  }

  renderButtonBar(){
    const {onCancel, buttonBarPosition, showButtonBar} = this.props
    if(showButtonBar===false) return null
    return this.cascading && <div className={cns('btn-bar', buttonBarPosition==="top" ? 'top' : 'bottom')}>
      <Flex>
        <div className="btn"
          onClick={()=>{
            onCancel && onCancel();
            this.hide()
          }}
        >
          取消
        </div>
        <Flex></Flex>
        <div className="btn active" onClick={this.okHandler}>
          确定
        </div>
      </Flex>
    </div>
    // $$('div', {className: cns('btn-bar', buttonBarPosition=="top" ? 'top' : 'bottom')},
    //   $$(Flex, {},
    //     $$('div', {className: 'btn', onClick: ()=>{
    //       onCancel && onCancel(),
    //       this.hide()
    //     }}, '取消'),
    //     $$(Flex),
    //     $$('div', {
    //       className: 'btn active',
    //       onClick: this.okHandler
    //     }, '确定')
    //   )
    // )
  }

  okHandler(){
    const {onChange} = this.props;
    onChange(...this.state.cascadeValues);
    this.hide()
  }

  renderSelectorInCtn(optionsGroup){
    if(!this.mountedSelectorEl){
      const {getOptionsCtn} = this.props
      const ctnEl = getOptionsCtn ? getOptionsCtn() : window.document.body
      if(!ctnEl) return
      this.mountedSelectorEl = document.createElement('div')
      ctnEl.appendChild(this.mountedSelectorEl)
    }
    ReactDOM.render(this.renderSelector(optionsGroup), this.mountedSelectorEl)
  }

  renderOptionColumn(index, optList, value, title){
    const {onChange, onSelect, emptyTip, eeid} = this.props
    const {cascadeValues} = this.state
    if(!optList.length)
      return <div className="sel-item empty-tip">
        {emptyTip}
      </div>
      //$$(Flex, {className:'sel-item empty-tip'}, emptyTip)
    return <Scroll
      className="opt-col-scroll"
      rebuildMark={this.state.rebuildMark + optList.length}
      onMounted={el => this.scrolls[index] = el}
    >
      {
        optList.map(item => {
          let checked = item.key === (cascadeValues[index] || value)
          if(checked && !item.key)
            checked = _.isUndefined(item.key) || _.isNull(item.key)
          let optEeid = ''
          if(eeid){
            const eeidList = [eeid, title, item.eeid || (_.isString(item.text) ? item.text : item.key)]
            optEeid = eeidList.filter(e=>!!e).join('-')
            optEeid = 'sel-opt_' + optEeid
          }
          
          return <Flex
            className={cns('sel-item', checked && 'checked')}
            onClick={()=>{
              if(this.cascading){
                const newcascadeValues = cascadeValues.slice(0, index).concat(item.key)
                this.setState({
                  cascadeValues: newcascadeValues
                })
                onSelect && onSelect(item.key, item, index, newcascadeValues)
              }else{
                const r = onChange(item.key, item)
                r !== false && this.hide()
              }
            }}
            eeid={optEeid}
            key={optEeid}
          >
            {item.text}
            {item.subText && <span className="sub-text">
              {item.subText}
            </span>}
          </Flex>
        })
      }
    </Scroll>
    // $$(Scroll, {
    //   className: 'opt-col-scroll',
    //   rebuildMark: this.state.rebuildMark + optList.length,
    //   onMounted: el => this.scrolls[index] = el
    // }, optList.map(item => {
    //   let checked = item.key == (cascadeValues[index] || value)
    //   if(checked && !item.key)
    //     checked = _.isUndefined(item.key) || _.isNull(item.key)
    //   let optEeid = ''
    //   if(eeid){
    //     const eeidList = [eeid, title, item.eeid || (_.isString(item.text) ? item.text : item.key)]
    //     optEeid = eeidList.filter(e=>!!e).join('-')
    //     optEeid = 'sel-opt_' + optEeid
    //   }
    //   return $$(Flex, {
    //     eeid: optEeid,
    //     eearg,
    //     className: cns('sel-item', checked && 'checked'),
    //     onClick: () => {
    //       if(this.cascading){
    //         const newcascadeValues = cascadeValues.slice(0, index).concat(item.key)
    //         this.setState({
    //           cascadeValues: newcascadeValues
    //         })
    //         onSelect && onSelect(item.key, item, index, newcascadeValues)
    //       }else{
    //         const r = onChange(item.key, item)
    //         r !== false && this.hide()
    //       }
    //     }
    //   },
    //     item.text,
    //     item.subText && $$('span', {className: 'sub-text'}, item.subText)
    //   )
    // }))
  }

  getOptionList(options, i){
    let {nullOption} = this.props
    if(_.isArray(nullOption) && nullOption.length > i){
      nullOption = nullOption[i]
    }
    const realOptions = _.isArray(options) ? options :
      _.map(options, (text, key)=>{return {key, text}})
    return nullOption ?
      [].concat(nullOption).concat(realOptions) :
      realOptions
  }

  show(){
    const {onShowOptions} = this.props
    onShowOptions && onShowOptions()
    this.setState({
      showSelector: true,
      cascadeValues: this.cascading ? this.props.value.slice() : []
    })
    setTimeout(()=>{
      this.setState({rebuildMark: this.state.rebuildMark+1})
      this.fixScroll()
    }, 300)
  }

  hide(){
    this.setState({
      showSelector: false,
      cascadeValues: []
    })
  }

  clickHandler(){
    if(this.state.showSelector)
      this.hide()
  }

  fixScroll(){
    this.scrolls.forEach(scroll => {
      const {bodyEl} = scroll
      const selEl = bodyEl && bodyEl.querySelector('.sel-item.checked')
      if(selEl)
        scroll.scrollView.scrollToElement(selEl, 200, 0, -Math.round(bodyEl.offsetHeight/3))
    })
  }

  componentDidMount(){
    document.addEventListener('click', this.clickHandler, false)
    const {onMounted} = this.props
    onMounted && onMounted(this)
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.hide, false)
    this.mountedSelectorEl && this.mountedSelectorEl.remove()
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
