import React from 'react'
import _ from 'underscore'

export default function Select(props){
  const {options} = props
  let itemList = _.isArray(options) ? options :
    _.map(options, (item, i) => item && item.key ? item : {key: i, text: item})
  // if(optionallitem){
  //   itemList = [optionallitem].concat(itemList)
  // }

  return <select {...props}>
    {itemList.map(({key, text}) =>
      <option key={key} value={key}>{text}</option>
    )}
  </select>
}

// Select.defaultProps = {
//   options: [],
//   optionallitem: {key: 0, text: '全部'}
// }
