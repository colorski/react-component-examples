import { combineReducers } from 'redux'
import cr from 'utils/cr'
import {
  OPEN,
  CLOSE,
  REQ_SUBMIT,
  SUBMIT_SUCCESS,
  SUBMIT_FAIL,
  SET_ERRORE_RECOVERY_TYPE,
  SET_CONTACTOR_ID
} from 'act/errorReport'

export default combineReducers({
  show: cr(false, {
    [OPEN](){return true},
    [CLOSE](){return false}
  }),

  customerId: cr(null, {
    [OPEN]({customerId}){return customerId},
    [CLOSE](){return null}
  }),

  customerName: cr(null, {
    [OPEN]({customerName}){return customerName || null},
    [CLOSE](){return null}
  }),

  errorRecoveryType: cr(1, {
    [SET_ERRORE_RECOVERY_TYPE]({errorRecoveryType}){return errorRecoveryType},
    [CLOSE](){return 1}
  }),

  contactorId: cr(null, {
    [SET_CONTACTOR_ID]({contactorId}){return contactorId},
    [CLOSE](){return null}
  }),

  waiting: cr(false, {
    [REQ_SUBMIT](){return true},
    [SUBMIT_SUCCESS](){return false},
    [SUBMIT_FAIL](){return false},
  })
})
