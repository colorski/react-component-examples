import _ from 'underscore'

export function lookUp(dict, key, returnBody){
  if(_.isArray(dict) && dict[0] && dict[0].key){
    const item = dict.find(item => item.key === key)
    return item ? (returnBody ? item : item.text) : null
  }else if(_.isObject(dict)){
    return dict[key] || null
  }else{
    return null
  }
}

export function getDictList(data){
  return _.isArray(data) ? data :
    _.map(data, (item, i) => item && item.key ? item : {key: i, text: item})
}