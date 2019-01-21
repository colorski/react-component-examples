import './GlobalAlert.css'
import React from 'react'
import Modal from './Modal'
import Icon from './Icon'
import Flex from './m/Flex'

export default function ({data, onClose}){
  const baseTop = 120
  return <div>
    {data.map(({content, subContent, width, top, icon, iconColor='#aaa', onOk}, i) =>
      <Modal className="xkcpn-global-alert" width={width} top={top || (baseTop + 12*i) + 'px'} key={i}>
        <div className="alert-wrapper">
          <div className="alert-body">
            <Flex className="main-text">
              {icon && <Icon type={icon} className="theme-icon" style={{color: iconColor}}/>}
              <Flex className="text">{content}</Flex>
            </Flex>
            {subContent && <Flex className="sub-text">
              {icon && <Icon type={icon} className="theme-icon"/>}
              <Flex className="text">{subContent}</Flex>
            </Flex>}
          </div>
          <div className="alert-footer"><button onClick={
            ()=>{
              onClose()
              if(onOk){
                onOk()
              }
            }}>确定</button></div>
        </div>
      </Modal>
    )}
  </div>
}
