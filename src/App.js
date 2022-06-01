import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
import React from "react";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tasks: [
  //       {
  //         id: 1,
  //         taskItem: "Study ReactJs",
  //         taskStatus: true,
  //       },
  //       {
  //         id: 2,
  //         task: "Create Todo Prj",
  //         taskStatus: true,
  //       },
  //       {
  //         id: 3,
  //         task: "Get project from sweeft",
  //         taskStatus: false,
  //       },
  //     ],
  //   };
  // }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoTable />
      </div>
    );
  }
}

export default App;
