import React from 'react';
import _ from 'underscore';
import './Flex.css';

export function Flex(props) {
    const { position, style, href, elRef} = props
    let className = 'xk-cpn-flex'
    if(props.v) className += ' xk-cpn-flex-v'
    if(props.className) className += (' '+props.className)
    const flex = props.flex || 1
    const newStyle = _.extend({
      WebkitBoxFlex: flex,
      WebkitFlex: flex,
      msFlex: flex,
      flex: /^\d+$/.test(flex) ? flex + ' 1 0' : flex
    }, position ? {
      WebkitBoxAlign: position,
      alignItems: position,
      WebkitBoxPack: position,
      justifyContent: position
    } : {}, style)
    props = _.extend(
      _.omit(props, 'v', 'flex', 'position', 'to', 'ref'),
      { className, style: newStyle }
    )
    let Tag = 'div'
    if(href) Tag = 'a'
    //if(to) props.onClick = function(){XK_HISTORY.push(to)}
    return <Tag {...props} ref={elRef}/>
}

export const FlexItem = Flex

Flex.Item = FlexItem

export default Flex
