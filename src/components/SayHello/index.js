import React, { Component } from 'react';

class SayHello extends Component {
  render () {
    return (
      <div className="center">
        Hello, {this.props.name}
      </div>
    )
  }
}

export default SayHello;

