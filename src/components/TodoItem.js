import React, { Component } from "react";

class TodoItem extends Component {
  // editHandler = () => {
  //   // unda miigos settodos da daaupdateos state
  //   // setTodos(promptCaller){

  //   // }
  //   const promptCaller = prompt("edit task");
  //   console.log(this.props.name);
  //   return setTodos;
  // };

  render() {
    return (
      <>
        <tr>
          <td>{this.props.todo.task}</td>
          <td>{this.props.todo.taskStatus ? "done" : "In Progress"}</td>
          <td>
            <button onClick={() => this.props.editHandler(this.props.todo)}> Edit</button>
          </td>
          <td>
            <button onClick={() => this.props.deleteHandler(this.props.taskId)}> X</button>
          </td>
        </tr>
      </>
    );
  }
}

// onClick={() => this.props.editVal(prompt("Edit Todo"), this.props.taskId)}

export default TodoItem;
