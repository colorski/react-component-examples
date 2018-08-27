import Inferno from 'inferno'
import Component from 'inferno-component'
import Modal from 'cpn/Modal'
import FI from 'cpn/FormItem'
import RadioGroup from 'cpn/RadioGroup'
import Select from 'cpn/Select'
import _ from 'underscore'

export default class extends Component{
  state={
    errorType: 1,
    errorField: null,
    remark: '',
    errTip: '',

    recoveryErrType: 8
  }

  render(){
    const {onCancel, onSubmit, waiting, contactorId, onSetContactorId, errorRecoveryType, onSetErrorCoveryType, contacts} = this.props
    const { errorType, errorField, recoveryErrType} = this.state
    const _contacts = _.map(contacts,(c)=>({key: c.customerId+'',text: c.customer}))
    _contacts.unshift({key:'', text: '选择纠错联系人'})

    const changeHandler = e=>{
      this.setState({remark: e.target.value})
      this.setState({errTip: e.target.value.length > 64 ? '备注内容不得超过64个字' : ''})
    }

    return <Modal title="纠错" onCancel={onCancel}>
      <div style={{margin: '32px 0'}}>
        <FI label="纠错类型">
          <RadioGroup
            options={[{key: 1, text:'学校纠错'}, {key:2, text:'联系人纠错'}]}
            value={errorRecoveryType}
            onChange={v=>onSetErrorCoveryType(v)}
          />
          （<span style={{color:'#f00'}}>只能纠错手机号和座机号</span>）
        </FI>
        {errorRecoveryType == 1 && <FI label="错误类型">
          <RadioGroup
            options={[{key: 1, text:'学校不存在'}, {key:2, text:'学校信息有误'}]}
            value={errorType}
            onChange={v=>this.setState({errorType:v})}
          />
        </FI>}
        {errorRecoveryType ==1 && this.state.errorType == 2 && <FI label="错误信息">
          <RadioGroup
            options={[
              {key: 3, text: '省'},
              {key: 4, text: '市'},
              {key: 5, text: '学校名称'},
              {key: 6, text: '学段'}
            ]}
            value={errorField}
            onChange={v=>this.setState({errorField:v})}
          />
        </FI>}

        {errorRecoveryType == 2 && <div><FI label="联系人" required = {true}>
          <Select
            placeholder="选择纠错联系人"
            emptyItem={false}
            placeholderItem={true}
            value={contactorId}
            options={ _contacts }
            onChange={v=>{onSetContactorId(v.target.value)}}
          />
        </FI>
        <FI label="错误类型">
          <RadioGroup
            options={[{key: 8, text:'号码有误，纠正号码'}, {key:9, text:'号码、联系人失效，无法联系'}, {key:10, text:'其他'}]}
            value={recoveryErrType}
            onChange={v=>this.setState({recoveryErrType:v})}
          />
        </FI></div>}
        <FI label="备注">
          <textarea placeholder="备注内容最多64个字"
            style={{width: '90%', height:'64px'}}
            value={this.state.remark}
            onKeyUp={changeHandler}
            onBlur={changeHandler}
          ></textarea>
          {this.state.errTip && <span style={{color: 'red'}}>{this.state.errTip}</span>}
        </FI>
        <button style={{display: 'block', margin: '12px auto'}} disabled={waiting} onClick={()=>{
          const {errorType, errorField, remark, recoveryErrType} = this.state
          let cId = contactorId, eId = errorRecoveryType, typeId = null
          if(cId && eId ==2){
            typeId = recoveryErrType
          }else if(eId == 1){
            typeId = errorType == 1 ? errorType : errorField;
          }

          if(remark.length > 64) return
          onSubmit(typeId, remark)
        }}>提交{waiting && '中...'}</button>
      </div>
    </Modal>
  }
}
