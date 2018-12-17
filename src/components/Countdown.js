//倒计时
import React, { Component } from 'react';

export default class Countdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      leftTime: null
    }
  }

  toDbl = (n) => n<10?'0'+n:''+n;
  count = () => {
    let endTo = this.props.endTo;

    let _endTo = endTo?"7 7, 2099 "+endTo:"7 7, 2099 24:00:00";
    let endTime=new Date(_endTo);
    let startTime = new Date();
    let leftSecond=parseInt((endTime.getTime()-startTime.getTime())/1000, 10);

    if(leftSecond<0){leftSecond=0;}

    let h=this.toDbl(parseInt((leftSecond/3600)%24, 10));
    let m=this.toDbl(parseInt((leftSecond/60)%60, 10));
    let s=this.toDbl(parseInt(leftSecond%60, 10));
    
    this.setState({
      leftTime: h+'小时'+m+'分'+s+'秒'
    })
  }

  componentDidMount () {
    this.count();
    this.interval = setInterval(() => this.count(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    return <span>{this.state.leftTime}</span>
  }
}