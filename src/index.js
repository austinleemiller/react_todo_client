import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css'
import TodoItem from './Todoitem'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: "",
      todos: []
    }
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: "http://localhost:5000/todo",
      headers: {"content-type": "application/json"},
      data: {
        title: this.state.todo,
        done: false
      }
    })
  }

  componentDidMount() {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          todos: data
        })
      })
      .catch(err => {
        console.log("FetchTodos Error:", err)
      })
  }

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return <TodoItem key={todo.id} todoData={todo} />
    })
  }

  render() {
    return (
      <div className="app">
        <h1>ToDo List</h1>
        <form className="add-todo" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button type="submit">Add</button>
        </form>
        {this.renderTodos()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));