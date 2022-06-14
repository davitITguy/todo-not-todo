import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      jora: 2,
    };
  }

  inputViewer = val => {
    this.setState({
      inputValue: val,
    });
  };

  shower = () => {
    alert(this.state.inputValue);
  };

  handleSubmit = el => {
    el.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Add Task</label>
          <input
            value={this.state.inputValue}
            id="text"
            type="text"
            onChange={e => this.inputViewer(e.target.value)}
          />
          <button onClick={() => this.shower()}>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
