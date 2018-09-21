import React from 'react'
import _ from 'underscore'
import {genClassName as cns} from '../../utils/cns'
import './FormItem.css'

export default function({inline, label, labelWidth, children, className, required, style, flex}){
  let props = {
    className: cns("xkcpn-form-item", inline && 'inline'),
    style: _.extend({}, style)
  }
  if(flex) props.style.flex = flex
  return <div {...props}>
    <div className={cns("label")} style={labelWidth ? {width: labelWidth} : {}}>
      {label}{required ? <i className="required"/> : ''}
      {label && '：'}
    </div>
    <div className={cns('form-item-content', className)}>{children}</div>
  </div>
}
