import { connect } from 'inferno-redux'
import ErrorReportModal from 'cpn/ErrorReportModal'
import {submit, close, setErrorCoveryType, setContactorId} from 'act/errorReport'

export default connect(function(state){
  return {
    customerName: state.errorReport.customerName,
    waiting: state.errorReport.waiting,
    contacts: state.contacts.data,
    errorRecoveryType:state.errorReport.errorRecoveryType,
    contactorId: state.errorReport.contactorId
  }
}, function(dispatch){
  return {
    onSubmit(typeId, remark){
      dispatch(submit(typeId, remark))
    },
    onCancel(){
      dispatch(close())
    },
    onSetErrorCoveryType(errorRecoveryType){
      dispatch(setErrorCoveryType(errorRecoveryType))
    },
    onSetContactorId(contactorId){
      dispatch(setContactorId(contactorId))
    }
  }
})(ErrorReportModal)
