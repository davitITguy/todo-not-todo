import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";
import React from "react";
import { getValue } from "@testing-library/user-event/dist/utils";

class App extends React.Component {
  /* constructor - სთეითის ინიციალიზაცია */
  constructor() {
    super(); // რომელი კლასიდანაც არის დაექსთენდებული იმის  ფიჩერების წამოღება

    /** state - ის აღწერა  */
    this.state = {
      data: [],
      title: "rame",
      test: {
        testingInfo: ["testing", "info"],
      },
    };
  }
  // ინფუთში ჩაწერილი ჩარებს იღებს და წერს თაითლში სეტსთეითით
  ragacHandler = ragac => {
    this.setState({
      title: ragac.target.value,
    });
  };

  // იღებს სტეიტიდან დატას ახალ ცვლადში წერს მერე ტრიმავს და ააფდეითებს დატას ახალი ცვლადით (+ვალიდაციებით)
  submitHandler = str => {
    let newArr = this.state.data;
    let keyword = str.trim(); // asuftavebs marjvena da marcxena mxares sfeisebisgan

    if (newArr.includes(keyword) || keyword === "") {
      alert("word exists or is blank change it!");
    } else {
      newArr.push(keyword);
    }

    this.setState({
      data: newArr,
    });
  };

  testHandler = test => {
    test[0] = ["mushaobs?"];
    return test;
  };

  render() {
    return (
      <div>
        {/* <TodoForm /> */}

        {/* <TodoTable /> */}
        <form>
          <label htmlFor="name">Type Text</label>

          {/* იღებს შიდა ტექსტს და უწერს რაღაცჰენდლერს პარამეტრში */}
          <input id="name" placeholder="text input" onChange={e => this.ragacHandler(e)} />

          {/* გამოაქვს დაკლიკვისას სტეიტის თაითლი */}
          <button type="button" onClick={() => this.submitHandler(this.state.title)}>
            click me
          </button>
          <div className="form-group">
            <label htmlFor="textarea"></label>
            <textarea
              className="form-control"
              name="textarea"
              id="textarea"
              rows="3"
              value={this.testHandler(this.state.test.testingInfo)}
              onChange={console.log}
            ></textarea>
          </div>
        </form>

        <ul>
          {/* გამოაქვს სტეიტიდან დატა და აგენერირებს ლი ებს */}
          {this.state.data.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <TodoForm />
        <TodoTable />
      </div>
    );
  }
}

export default App;
