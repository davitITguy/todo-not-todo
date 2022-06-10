import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Study React",
          taskStatus: true,
          taskId: 1,
        },
        {
          task: "Make Todo List",
          taskStatus: true,
          taskId: 2,
        },
      ],
    };
  }
  //იღებს სტეიტს და ცვლის მარტო სტეიტში todoს
  setTodos = todos => {
    this.setState(state => {
      state.todos = todos;
      return state;
    });
  };

  editTodos = (todos, taskId) => {
    const todoItem = this.state.todos.find(todo => {
      return todo.taskId === taskId;
    });
    todoItem.task = todos;

    this.setState(prevState => {
      const updated = prevState.todos.map(todo => {
        if (todo.taskId === taskId) {
          return todoItem;
        }
        return todo;
      });
      return {
        updated,
      };
    });
  };

  editVal = (promptVal, taskId) => {
    console.log(promptVal, taskId);
    return this.editTodos(promptVal, taskId);
  };

  deleteHandler = taskId => {
    // ვეძებთ ინდექსით მასივში ობიექტს და ვადარებთ აიდის
    const todoIndex = this.state.todos.findIndex(todo => {
      return todo.taskId === taskId;
    });
    // ვამოწმებთ რომ ინდექსი სწორად მოდის
    if (todoIndex < 0) {
      return;
    }
    // სპლაისით ვშლით იმ ობიექტს რომელი ინდექსიც მივიდა და ახალ მასივს ვაწერთ ძველ სტეტის მასივს
    const todos = this.state.todos;
    todos.splice(todoIndex, 1);
    this.setTodos(todos);
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(item => {
              return (
                <TodoItem
                  key={item.taskId}
                  taskId={item.taskId}
                  name={item.task}
                  status={item.taskStatus}
                  // გადავცემთ პროპსით ფუნქციას
                  deleteHandler={this.deleteHandler}
                  editVal={this.editVal}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoTable;
