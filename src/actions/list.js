//import _ from 'underscore';
import { list } from '../data/list';
export const INIT = 'list/INIT'
export const GET_LIST = 'list/GET_LIST'

export const init = () => (dispatch) => {
  dispatch(getListData())
}

//获取列表信息
export const getListData = () => (dispatch) =>{
  dispatch({type: GET_LIST, data: list || {} })
}



