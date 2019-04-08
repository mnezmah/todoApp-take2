import React, { Component } from 'react';

 class Todo extends Component {
  render() {
    const {id, imeZadatka, opisZadatka, kreiran } = this.props.todo;

      return (  
      <div>
        <td>{id}</td>
        <td>{imeZadatka}</td>
        <td>{opisZadatka}</td>
        <td>{kreiran}</td>
      </div>
    )
    }
  }

export default Todo;