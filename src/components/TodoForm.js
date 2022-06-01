import React, { Component } from "react";

export class TodoForm extends Component {
  // constructor() {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <form>
          <input type={"text"} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
