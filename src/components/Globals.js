import React, {Component} from 'react'
import GlobalAlert from '../containers/GlobalAlertContainer'
import Prompt from './Prompt'

export default class extends Component{
  render(){
    const {props} = this
    console.log(props)
    return <div>
      <GlobalAlert />
      {props.prompt && <Prompt {...props.prompt} onDestory={props.onClosePrompt}/>}
    </div>
  }
  
  componentDidMount(){
    this.props.onGlobalInit();
  }
}
