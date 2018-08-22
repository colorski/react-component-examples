export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](action, state);
    } else {
      return state;
    }
  }
}

//用法示例 1  wemarketing ->  reducers/addTalk.js
// import { combineReducers } from 'redux';
// import cr from 'utils/cr';
// import {
//     INIT,
//     REQ_SUBMIT_CUSTOMER,
//     SUBMIT_CUSTOMER_SUCCESS,
//     SUBMIT_CUSTOMER_FAIL
//   } from 'act/addCustomer';
  
//   export default combineReducers({
//     waiting: cr(false, {
//       [REQ_SUBMIT_CUSTOMER](){return true},
//       [SUBMIT_CUSTOMER_SUCCESS](){return false},
//       [SUBMIT_CUSTOMER_FAIL](){return false},
//       [INIT](){return false},
//     }),
  
//   })
  
//用法示例 2
// import { combineReducers } from 'redux'
// import cr from 'utils/cr'
// import {
//   OPEN_ADD_MODAL,
//   CLOSE_ADD_MODAL,
//   RECEIVE_SCHOOL_PRODUCTS,
//   REQ_SUBMIT,
//   SUBMIT_SUCCESS,
//   SUBMIT_FAIL,
// } from 'act/attention'

// export default combineReducers({
//   showAdd: cr(false, {
//     [OPEN_ADD_MODAL](){return true},
//     [CLOSE_ADD_MODAL](){return false},
//   }),
//   schoolId: cr(null, {
//     [OPEN_ADD_MODAL]({schoolId}){return schoolId},
//     [CLOSE_ADD_MODAL](){return null},
//   }),
//   schoolName: cr(null, {
//     [OPEN_ADD_MODAL]({ schoolName }) { return schoolName},
//     [CLOSE_ADD_MODAL](){return null},
//   }),
//   products: cr(null, {
//     [RECEIVE_SCHOOL_PRODUCTS]({data}){
//       return data.map(p => {return {key: p.productId, text: p.productName}})
//     },
//     [CLOSE_ADD_MODAL](){return null},
//   }),
//   waiting: cr(false, {
//     [REQ_SUBMIT](){return true},
//     [SUBMIT_SUCCESS](){return false},
//     [SUBMIT_FAIL](){return false},
//     [CLOSE_ADD_MODAL](){return false},
//   }),
//   onSuccess: cr(null, {
//     [OPEN_ADD_MODAL]({onSuccess}){return onSuccess || null},
//     [CLOSE_ADD_MODAL](){return null},
//   })
// })

