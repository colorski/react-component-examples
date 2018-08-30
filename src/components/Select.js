import React from 'react'
import _ from 'underscore'

export default function Select(props){
  const {options, emptyitem} = props
  let itemList = _.isArray(options) ? options :
    _.map(options, (item, i) => item && item.key ? item : {key: i, text: item})
  if(emptyitem){
    itemList = [emptyitem].concat(itemList)
  }
  return <select {...props}>
    {itemList.map(({key, text}) =>
      <option key={key} value={key}>{text}</option>
    )}
  </select>
}

Select.defaultProps = {
  options: [],
  emptyitem: {key: '', text: '全部'}
}
