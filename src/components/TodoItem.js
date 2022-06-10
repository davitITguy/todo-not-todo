import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  editHandler = () => {
    // unda miigos settodos da daaupdateos state
    // setTodos(promptCaller){

    // }
    const promptCaller = prompt("edit task");
    console.log(this.props.name);
    return setTodos;
  };

  render() {
    return (
      <>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.status ? "done" : "In Progress"}</td>
          <td>
            <button onClick={() => this.editHandler()}> Edit</button>
          </td>
          <td>
            <button onClick={() => this.props.deleteHandler(this.props.taskId)}> X</button>
          </td>
        </tr>
      </>
    );
  }
}

export default TodoItem;
