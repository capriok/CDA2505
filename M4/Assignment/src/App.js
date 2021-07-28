import { useState } from 'react'

import './App.css';

import Todos from './components/Todos'

function App() {

  const [todoInput, setTodoInput] = useState('')

  const [todos, setTodos] = useState([
    { name: 'Do homework', done: true },
    { name: 'Go to gym', done: false },
    { name: 'Feed Cats', done: false },
  ])

  function AddTodo(e) {
    e.preventDefault()
    const newTodo = { name: todoInput, done: false }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
      </header>
      <form onSubmit={(e) => AddTodo(e)}>
        <input
          type="text"
          placeholder="Todo name"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
