import mac from '../utils/mac'
import _ from 'underscore'

export const SHOW_ALERT = 'global/SHOW_ALERT'
export const CLOSE_ALERT = 'global/CLOSE_ALERT'
export const SHOW_PROMPT = 'global/SHOW_PROMPT'
export const CLOSE_PROMPT = 'global/CLOSE_PROMPT'
export const SET_NAV = 'global/SET_NAV'
export const DROP_NAV = 'global/DROP_NAV'

export const closeAlert = mac(CLOSE_ALERT)

export const showPrompt = mac(SHOW_PROMPT, 'properties')
export const closePrompt = mac(CLOSE_PROMPT)

export const setNav = mac(SET_NAV, 'data')
export const dropNav = mac(DROP_NAV)

/**
 * [showAlert description]
 * @param  {String} content
 * @param  {Number} width
 * @param  {Number} top
 * @param  {Function} onOk
 * @param  {String} icon
 * @param  {String} iconColor
 * @param  {number} wait 多少毫秒后自动关闭
 */
export const showAlert = (content, width, top, onOk, icon, iconColor, wait) => dispatch => {
  if(_.isObject(content) && content.content){
    const params = content
    dispatch(_.extend({type: SHOW_ALERT}, params))
    if(_.isNumber(params.wait)){
      setTimeout(()=>dispatch(closeAlert()), params.wait)
    }
  }else{
    dispatch({ type: SHOW_ALERT, content, width, top, onOk, icon, iconColor})
    if(_.isNumber(wait)){
      setTimeout(()=>dispatch(closeAlert()), wait)
    }
  }
  return {
    close: ()=>dispatch(closeAlert())
  }
}

export const registerMessagers = () => (dispatch) => {
  window.MESSAGER = {
    alert(content, width, top, onOk){
      return dispatch(showAlert(content, width, top, onOk))
    },

    //properties: content, onOk, onCancel, width='500px', top='96px'
    confirm(properties){
      return dispatch(showPrompt(_.extend({}, properties, {showInput: false})))
    },

    //properties: content, onOk, onCancel, width='500px', top='96px'
    prompt(properties){
      return dispatch(showPrompt(properties))
    },
    error(text, subText){
      return dispatch(showAlert({
        content: text,
        subContent: subText,
        icon: 'close-o',
        iconColor: '#d30'
      }))
    },
    warn(text, subText){
      return dispatch(showAlert({
        content: text,
        subContent: subText,
        icon: 'warn',
        iconColor: '#fd0'
      }))
    },
    success(text, wait=600, width="310px"){
      return dispatch(showAlert({
        content: text,
        icon: 'complete',
        iconColor: '#0a0',
        wait,
        width
      }))
    }
  }
}


// <Icon type="info" onClick={()=>{
//   window.MESSAGER.alert({
//     content: '类似alert的弹出框',
//     onOk: ()=>alert('window.MESSAGER.alert()')
//   })
// }} /> alert

// <Icon type="info" onClick={()=>{
//   window.MESSAGER.confirm({
//     content: '类似confirm的弹出框',
//     onOk: ()=>alert('window.MESSAGER.confirm()')
//   })
// }} /> confirm

// <Icon type="info" onClick={()=>{
//   window.MESSAGER.prompt({
//     content: <div>
//       <h2>修改备注</h2>
//       <p style={{fontSize:'12px', color:'#aaa'}}>请输入备注（提示：最长可输入5个字符）</p>
//     </div>,
//     initValue: '默认内容',
//     rules: [{regx: /^.{0,5}$/, msg: '最多可输入5个字符'}],
//     onOk: (con,el)=>{
//       console.log(con)
//       el.close()
//     }
//   })
// }} /> prompt

// <Icon type="info" onClick={()=>{
//   window.MESSAGER.error('你错了！ - window.MESSAGER.error("你错了！")')
// }} /> error

// <Icon type="info" onClick={()=>{
//   window.MESSAGER.warn('警告！','window.MESSAGER.error("警告！","balabala")')
// }} /> warn

// <Icon type="info" onClick={()=>{
//   window.MESSAGER.success('window.MESSAGER.success("成功！",2000, "600px")',2000, "600px")
// }} /> success 

