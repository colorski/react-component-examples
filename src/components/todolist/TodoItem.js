import React, {Component} from 'react';

class TodoItem extends Component {
  constructor (props) {
    super(props);
    this.handleDelClick = this.handleDelClick.bind(this);
  }
  render () {
    const { item } = this.props;
    return <li onClick={this.handleDelClick}>{ item }</li>
  }

  handleDelClick () {
    const {deleteItemEvent, index} = this.props;
    deleteItemEvent(index);
  }
}

export default TodoItem;
