import { combineReducers } from 'redux'
import _ from 'underscore'
import cr from '../utils/cr'
import {
  SHOW_ALERT,
  CLOSE_ALERT,
  SHOW_PROMPT,
  CLOSE_PROMPT,
} from '../actions/global'

export default combineReducers({
  alerts: cr([], {
    [SHOW_ALERT](act, state){
      return state.concat(_.omit(act, 'type'))
    },
    [CLOSE_ALERT](action, state){
      return state.slice(0, state.length-1)
    }
  }),
  alert: combineReducers({
    show: cr(false, {
      [SHOW_ALERT](){return true},
      [CLOSE_ALERT](){return false},
    }),
    content: cr('', {
      [SHOW_ALERT]({content}){return content},
      [CLOSE_ALERT](){return ''},
    }),
    subContent: cr('', {
      [SHOW_ALERT]({subContent}){return subContent || ''},
      [CLOSE_ALERT](){return ''},
    }),
    width: cr('480px', {
      [SHOW_ALERT]({width}){return width || '480px'},
      [CLOSE_ALERT](){return '480px'},
    }),
    top: cr('100px', {
      [SHOW_ALERT]({top}){return top || '100px'},
      [CLOSE_ALERT](){return '100px'},
    }),
    icon: cr('', {
      [SHOW_ALERT]({icon}){return icon || ''},
      [CLOSE_ALERT](){return ''},
    }),
    iconColor: cr('#aaa', {
      [SHOW_ALERT]({iconColor}){return iconColor || '#aaa'},
      [CLOSE_ALERT](){return '#aaa'},
    })
  }),

  prompt: cr(null, {
    [SHOW_PROMPT]({properties}){return properties},
    [CLOSE_PROMPT](){return null}
  })
})
