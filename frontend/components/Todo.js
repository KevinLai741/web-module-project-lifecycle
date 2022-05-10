import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onclick={this.props.toggleCompleted(this.props.todo.id)}>
          {this.props.todo.name} {this.props.todo.completed ? '--completed--' : ''} 
      </div>
    )
  }
}
