
import TodoItem from '../TodoItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Incomplete extends Component {
    render() {
        return this.props.todos.filter(todo => todo.completed === false).map((todo) => (
    
            <TodoItem key={todo.id} todo={todo} popup={this.props.popup}  updateTodo={this.props.updateTodo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
          ));
    }
}
Incomplete.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
  }