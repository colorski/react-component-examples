import mac from 'utils/mac'
import {post} from 'act/req'

export const OPEN = 'errorReport/OPEN'
export const CLOSE = 'errorReport/CLOSE'
export const REQ_SUBMIT = 'errorReport/REQ_SUBMIT'
export const SUBMIT_SUCCESS = 'errorReport/SUBMIT_SUCCESS'
export const SUBMIT_FAIL = 'errorReport/SUBMIT_FAIL'
export const SET_ERRORE_RECOVERY_TYPE = 'errorReport/SET_ERRORE_RECOVERY_TYPE'
export const SET_CONTACTOR_ID = 'errorReport/SET_CONTACTOR_ID'


export const openErrorReport = mac(OPEN, 'customerId', 'customerName')
export const close = mac(CLOSE)
export const setErrorCoveryType = mac(SET_ERRORE_RECOVERY_TYPE, 'errorRecoveryType')
export const setContactorId = mac(SET_CONTACTOR_ID, 'contactorId')

export const submit = (typeId, remark) => (dispatch, getState) => {
  const {customerId, contactorId} = getState().errorReport
  dispatch({type: REQ_SUBMIT})
  dispatch(post('/api/school-info-feedback/add', {schoolId: customerId, customerId: contactorId, typeId, remark}, (err)=>{
    if(err){
      window.XK_MESSAGER.error('纠错信息提交失败')
      dispatch({type: SUBMIT_FAIL})
    }else {
      window.XK_MESSAGER.success('纠错信息提交成功')
      dispatch({type: SUBMIT_SUCCESS})
      dispatch(close())
    }
  }))
}
