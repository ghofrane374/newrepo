import React, { Component } from "react";

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      userInputs: "",
      items: [],
    };
  }
  onChange(event) {
    this.setState({
      userInputs: event.target.value,
    });
  }
  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInputs: "",
      items: [...this.state.items, this.state.userInputs],
    });
  }
  viewTodo() {
    return this.state.items.map((items) => {
      return (
        <div key={items}>
          {items}|<button onClick={this.deleteTodo.bind(this)}>x</button>
        </div>
      );
    });
  }
  deleteTodo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      items: array,
    });
  }

  render() {
    return (
      <div>
        <h1 className="titre">*ma list to do*</h1>
        <form className="formul">
          <input
            className="form-control"
            value={this.state.userInputs}
            type="text"
            placeholder="tapez quelque chose"
            onChange={this.onChange.bind(this)}
          />
          <button className="btn btn-warning" onClick={this.addTodo.bind(this)}>
            ajouter
          </button>
        </form>
        <div>{this.viewTodo()}</div>
      </div>
    );
  }
}
export default ToDoList;
