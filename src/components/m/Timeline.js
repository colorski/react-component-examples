import './Timeline.css'
import React from 'react'
import moment from 'moment'
import Flex from './Flex'

export default function(props){
  const {time, title, content, dateFormat="YY/MM/DD HH:mm:ss", timeWidth="4rem"} = props
  const m = moment(time)

  return <Flex className="xkcpn-timeline">
    <div className="time-block" style={{width: timeWidth}}>
      {m.format(dateFormat)}
    </div>
    <Flex v className="right-block">
      {title && <Flex className="title-row" flex="0 0 auto">{title}</Flex>}
      {content && <Flex className="content-row" flex="0 0 auto">{content}</Flex>}
      <div className="dot"/>
      <div className="link-line"/>
    </Flex>
  </Flex>
}
