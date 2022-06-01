import React, { Component } from "react";

export class TodoTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Todo</th>
            <th>Done</th>
          </tr>
          <tr>
            <td>Study react</td>
            <td>Done</td>
            <td>Edit</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Make Todo List</td>
            <td>Done</td>
            <td>Edit</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Get Project</td>
            <td>To-Do</td>
            <td>Edit</td>
            <td>X</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TodoTable;
