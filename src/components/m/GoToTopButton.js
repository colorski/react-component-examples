import React from 'react'
import './GoToTopButton.css'
import cns from 'classnames'
import Icon from '../Icon'

export default ({show, onClick}) => {
  return <div className={cns("xkcpn-go-to-top-button", show === true && 'show', show === false && 'hide')}>
    <Icon type='top' onClick={onClick} />
  </div>
}
// export default ({show, onClick}) =>
//   $$('div', {
//     className: cns("xkcpn-go-to-top-button", show === true && 'show', show === false && 'hide'),
//     eeid: 'btn_回到顶部'
//   },
//     $$(Icon, {
//       type: 'top',
//       onClick
//     })
//   )