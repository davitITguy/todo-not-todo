import React from "react";
import { Component } from "react";

class EditToDo extends Component {
  state = {
    updatedTask: this.props.todoToEdit.task,
  };

  handleTodoEdit = el => {
    el.preventDefault();

    this.props.updateEditToDo({
      ...this.props.todoToEdit,
      task: this.state.updatedTask,
    });
  };

  changeHandler = el => {
    el.preventDefault();
    this.setState({ updatedTask: el.target.value });
  };

  render() {
    const { task } = this.props.todoToEdit;
    return (
      <div style={editStyle}>
        <form onSubmit={this.handleTodoEdit} style={formStyle}>
          <label className="" htmlFor="edit">
            Edit Todo
          </label>
          <input onChange={el => this.changeHandler(el)} id="edit" name="edit" defaultValue={task} />
          <button type="submit">Save</button>
          <button onClick={this.props.updateEditToDoUpdated}>X</button>
        </form>
      </div>
    );
  }
}

const editStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(3,3,3,0.4)",
};
const formStyle = {
  backgroundColor: "#ddd",
  padding: "20px",
};

export default EditToDo;
