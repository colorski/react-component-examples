import './Pager.css'
import _ from 'underscore'
import React, { Component } from 'react'
import {genClassName} from '../utils/component'

export default class Pager extends Component{
  state={
    page: ''
  }
  render(){
    const {total, pageSizer} = this.props
    if(!total) return null
    return <div className="xkcpn-pager">
      {pageSizer && this.renderPageSizer()}
      <i>总数 {total}</i>
      {this.renderPages()}
      {this.renderJumper()}
    </div>
  }

  renderPageSizer(){
    const {current, pageSize, pageSizer, onChange, eeid} = this.props
    const options = _.isArray(pageSizer) ? pageSizer : [10, 20, 30, 40, 50]
    return <select
      className="pagesize-select"
      value={pageSize+''}
      onChange={e=>onChange({pageSize: +e.target.value, current})}
      eeid={eeid && `sel_${eeid}_每页条数`}
    >
      {options.map(size =>
        <option key={size} value={size+''}>每页{size}条</option>
      )}
    </select>
  }

  renderPages(){
    const {current, pageSize, total} = this.props
    const totalPage = Math.ceil(total/pageSize)
    let blocks = []
    const start = current - 4 < 1 ? 1 : current-4
    for(var i=start; i<=start+9 && i<=totalPage; i++){
      blocks.push(this.renderPageBlock(i))
    }
    if(totalPage > start+10)
      blocks.push(<span key="endrest"> ... </span>)
    if(totalPage > start+9)
      blocks.push(this.renderPageBlock(totalPage))
    if(start>2)
      blocks.unshift(<span key="frontrest"> ... </span>)
    if(start>1)
      blocks.unshift(this.renderPageBlock(1))
    return blocks
  }

  renderPageBlock(page){
    const {current, onChange, pageSize, eeid} = this.props
    return <i key={page}
      eeid={eeid && `btn_${eeid}-页码`}
      className={genClassName("page-block", page===current && 'current')}
      onClick={()=> page!==current && onChange({pageSize, current: page})}
    >{page}</i>
  }

  renderJumper(){
    const {current, pageSize, total, onChange, eeid} = this.props
    const totalPage = Math.ceil(total/pageSize)
    const {page} = this.state
    if(totalPage <= 11) return null
    return <span className="jumper">
      <input value={page} onInput={e=>this.setState({page: e.target.value})}/>
      <button disabled={!+this.state.page} eeid={eeid && `btn_${eeid}-页码跳转`} onClick={()=>{
        page!==current && onChange({pageSize, current:page})}
      }>跳转</button>
    </span>
  }
}

Pager.defaultProps = {
  eeid: ''
}


//<Pager pageSizer={pageSizer} {...pagination} onChange={onChange} eearg={eearg} eeid={eeid}/>