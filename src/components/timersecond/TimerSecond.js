import React, { Component } from 'react'

class TimerSecond extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{flex: 1, margin:'2rem 0', textAlign: 'center'}}>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default TimerSecond;
