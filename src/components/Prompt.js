import './GlobalAlert.css'
import _ from 'underscore'
import React, {Component} from 'react'
import Modal from './Modal'

export default class extends Component{
  state={
    value: '',
    errMsg: null,
    waiting: false
  }
  render (){
    const {content, onOk, onCancel, width='500px', top='96px', showInput=true, placeholder} = this.props
    const {value, errMsg, waiting} = this.state
    return <Modal className="xkcpn-global-alert" width={width} top={top}>
      <div className="alert-wrapper">
        <div className="alert-body">
          {content}
          {showInput && <div className="alert-prompt">
            <input
              placeholder={placeholder}
              value={value}
              onChange={e=>this.setState({value: e.target.value})}
            />
            {errMsg && <div className="err-msg">{errMsg}</div>}
          </div>}
        </div>
        <div className="alert-footer">
          <button disabled={waiting} onClick={()=>{
            if(!this.verify()) return
            const r = onOk(showInput ? this.state.value : this, this)
            if(r && r.then){
              this.setState({waiting: true})
              r.then(()=>{
                this.setState({waiting: false})
                this.close()
              })
            }
          }}>{waiting ? '请稍后...' : '确定'}</button>
          <button disabled={waiting} onClick={()=>{
            onCancel ? onCancel(showInput ? this.state.value : this, this) : this.close()
          }}>取消</button>
        </div>
      </div>
    </Modal>
  }

  verify(){
    const {rules} = this.props
    const {value} = this.state
    this.setState({errMsg: null})
    if(!_.isArray(rules) || !rules.length) return true
    const firstOut = rules.find(r => {
      //if(!_.isRegExp(r.regx)) throw 'Invalid rule when confirm GlobalPrompt'
      return !r.regx.test(value)
    })
    if(!firstOut) return true
    this.setState({errMsg: firstOut.msg || '输入的内容不正确'})
    return false
  }

  close(){
    this.props.onDestory()
  }

  componentWillMount(){
    const {initValue} = this.props
    if(initValue) this.setState({value: initValue})
  }
}
