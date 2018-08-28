import React, { Component } from 'react';

class HelloReact extends Component {
  render () {
    return (
      <div style={{flex: 1, margin:'2rem 0', textAlign: 'center'}}>
        Hello, {this.props.name}
      </div>
    )
  }
}

export default HelloReact;

