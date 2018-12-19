import './Scroll.css'
import React, { Component } from 'react'
import IScroll from 'iscroll'
import cns from 'classnames'
import GoToTopButton from './GoToTopButton'
import Icon from '../Icon'

export default class Scroll extends Component {

  constructor(props){
    super(props)
    this.scrollStartHandler = this.scrollStartHandler.bind(this)
    this.scrollEndHandler = this.scrollEndHandler.bind(this)
    this.state = {
      satisfyRefresh: false
    }
  }

  render(){
    const {className, children, direction, goToTopButton, onRefresh} = this.props
    return <div className={cns('xkcpn-scroll', 'scroll-' + direction, className)} ref={el => this.bodyEl = el}>
      <div className='scroll-inner'>
        {onRefresh && direction === 'y' && <div className="above-top" ref={el => this.refreshTipEl = el}>
          <Icon type="pulldown" className={cns('pulldown-icon', this.state.satisfyRefresh && 'up')} />
          {this.state.satisfyRefresh ? '释放刷新' : '下拉刷新'}
        </div>}
        {children}
      </div>
      {goToTopButton && <GoToTopButton 
        show={this.state.showGoToTop}
        onClick={()=>this.scrollView.scrollTo(0, 0, 300)}
      />}
    </div>
  }

  componentDidMount(){
    const {direction, scrollbars, mouseWheel, click, tap, scrollTo, onMounted, onRefresh} = this.props
    const scrollView = new IScroll(this.bodyEl, {
      scrollbars: scrollbars,
      mouseWheel: mouseWheel,
      click: click,
      tap: tap,
      scrollX: /x/i.test(direction),
      scrollY: /y/i.test(direction),
    })
    scrollView.on('scrollStart', this.scrollStartHandler)
    scrollView.on('scrollEnd', this.scrollEndHandler)
    scrollTo && scrollView.scrollTo(0, scrollTo)
    this.bodyEl.addEventListener('touchmove', () => {
      if(onRefresh){
        const satisfyRefresh = scrollView.y > this.refreshTipEl.offsetHeight * 1.2
        if(this.state.satisfyRefresh !== satisfyRefresh){
          this.setState({satisfyRefresh})
        }
      }
    })
    this.bodyEl.addEventListener('touchend', () => {
      if(this.state.satisfyRefresh){
        onRefresh()
        setTimeout(()=>scrollView.scrollTo(0, 0, 3000), 200)
        this.setState({satisfyRefresh: false})
      }
    })
    this.scrollView = scrollView
    onMounted && onMounted(this)
  }

  scrollStartHandler(){
    const {onScrollUp, onScrollDown} = this.props
    const scrollView = this.scrollView
    setTimeout(()=>{
      if(scrollView.directionY === 1){
        onScrollUp && onScrollUp(scrollView)
      }else if(scrollView.directionY === -1){
        onScrollDown && onScrollDown(scrollView)
      }
    }, 30)
  }

  scrollEndHandler(){
    const {onScrollEnd, onScrollToBottom, goToTopButton} = this.props
    const e = this.scrollView
    onScrollEnd && onScrollEnd(e)
    if(onScrollToBottom && e.y <= e.wrapperHeight - e.scrollerHeight){
      onScrollToBottom(e)
    }
    this.prepareRefresh = null
    if(goToTopButton){
      const {showGoToTop} = this.state
      const needGoToTop = e.y < -500
      if(needGoToTop !== !!showGoToTop)
        this.setState({showGoToTop: needGoToTop})
    }
  }

  componentDidUpdate(prevProps){
    // if(this.scrollView && this.props.children !== prevProps.children || this.props.rebuildMark !== prevProps.rebuildMark)
    //   this.scrollView && this.scrollView.refresh()
  }

  componentWillUnmount(){
    this.scrollView.destroy()
    this.scrollView = null
  }
}

Scroll.defaultProps = {
  mouseWheel: true,
  click: true,
  tap: false,
  direction: 'y',
  scrollbars: 'custom',
  refreshTip: '下拉释放以刷新',
}
