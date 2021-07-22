import './App.css';

import Todos from './components/Todos'

function App() {

  const todos = [
    { name: 'Do homework', done: true },
    { name: 'Go to gym', done: false },
    { name: 'Feed Cats', done: false },
  ]

  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
      </header>
      <form>
        <input className="shadow border-inline" type="text" placeholder="Todo name" />
        <button className="shadow border-inline" type="submit">Add</button>
      </form>
      <Todos list={todos} />
    </div>
  );
}

export default App;
