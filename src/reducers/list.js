import { combineReducers } from 'redux'
//import _ from 'underscore'
import cr from '../utils/cr'
import {
  GET_LIST,
} from '../actions/list'

export default combineReducers({
  list: cr(null,{
    [GET_LIST]({data}){
      return data
    }
  }),
})

