import { connect } from 'react-redux'
import GlobalAlert from '../components/GlobalAlert'
import {closeAlert} from '../actions/global'

export default connect(function(state){
  return {
    data: state.global.alerts
  }
}, function(dispatch){
  return {
    onClose(){
      dispatch(closeAlert())
    }
  }
})(GlobalAlert)
