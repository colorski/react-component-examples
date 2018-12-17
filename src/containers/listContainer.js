import { connect } from 'react-redux'
import List from '../common/List'
import { init } from '../actions/list'

export default connect(function(state){
  return {
    list: state.main.list
  }
}, function(dispatch){
  return {
    onInit(){
      dispatch(init())
    }
  }
})(List)
