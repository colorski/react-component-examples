import React from 'react'
import _ from 'underscore'
import { getDictList } from '../../utils/dict'
import './RadioGroup.css'

export default function({ options, value, disabled, onChange }){
  options = getDictList(options)
  return <span className="xkcpn-radio-group">
    {options.map(o => {
      if(!o) return null
      const checked = _.isEqual(o.key, value) || o.key === value
      return <label
        className={(disabled || o.disabled) ? 'disabled' : ''}
        key={o.key}
      >
        <input
          type="radio"
          disabled={disabled || o.disabled}
          checked={checked}
          onChange={()=>{ !checked && onChange(o.key, o) }}
         />
        {o.text}
      </label>
    })}
  </span>
}
