import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from './Popup'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, completed ,pop} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          {/* <button onClick={this.props.updateTodo.bind(this, id)} style={btnStyle2}>
            Update
          </button> */}
          <button onClick={this.props.popup.bind(this, id)} style={btnStyle2}>Update</button>
          {pop ?
         <Popup
          text='Click "Close Button" to hide popup'
          id={id}
          updateTodo={this.props.updateTodo.bind(this)}
          closePopup={this.props.popup.bind(this,id)}
         />
         : null
       }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            Delete
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  popup: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "20px",
  cursor: "pointer",
  float: "right",
};
const btnStyle2 ={
    background: "blue",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "20px",
  cursor: "pointer",
  float: "right",
}
export default TodoItem;