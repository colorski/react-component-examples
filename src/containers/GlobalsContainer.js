import { connect } from 'react-redux'
import Globals from '../components/Globals'
import {registerMessagers, closePrompt} from '../actions/global'

export default connect(function(state){
  return {
    prompt: state.global.prompt,
  }
}, function(dispatch){
  return {
    onGlobalInit(){
      dispatch(registerMessagers())
    },
    onClosePrompt(){
      dispatch(closePrompt())
    },
  }
})(Globals)
