import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';
import './Flex.css';

export function Flex(props) {
    const { align, style, href, to, elRef} = props
    let className = 'ski-cpn-flex'
    if(props.v) className += ' ski-cpn-flex-v'
    if(props.className) className += (' '+props.className)
    const flex = props.flex || 1
    const newStyle = _.extend({
      WebkitBoxFlex: flex,
      WebkitFlex: flex,
      msFlex: flex,
      flex: /^\d+$/.test(flex) ? flex + ' 1 0' : flex
    }, align ? {
      WebkitBoxAlign: align,
      alignItems: align,
      WebkitBoxPack: align,
      justifyContent: align
    } : {}, style)
    props = _.extend(
      _.omit(props, 'v', 'flex', 'align', 'to', 'ref'),
      { className, style: newStyle }
    )
    let Tag = 'div'
    if(href) Tag = 'a'
    if(to){
      return <Link {...props} to={to} />
    }else{
      return <Tag {...props} ref={elRef}/>
    }
    //if(to) props.onClick = function(){SKI_HISTORY.push(to)}
}

export const FlexItem = Flex

Flex.Item = FlexItem

export default Flex
