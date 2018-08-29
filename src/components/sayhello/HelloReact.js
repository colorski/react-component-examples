import React, { Component } from 'react';

class HelloReact extends Component {
  render () {
    return (
      <div className="center">
        Hello, {this.props.name}
      </div>
    )
  }
}

export default HelloReact;

