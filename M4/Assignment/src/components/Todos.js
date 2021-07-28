import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {

	function MarkTodo(todoName) {
		const updatedTodos = props.todos.map((todo, i) => {
			if (todo.name !== todoName) return todo
			todo.done = true
			return todo
		})
		props.setTodos(updatedTodos)
	}

	function RemoveTodo(todoName) {
		const updatedTodos = props.todos.filter(todo => todo.name !== todoName)
		props.setTodos(updatedTodos)
	}

	return (
		<main>
			{props.todos.map((todo, index) =>
				<TodoItem key={index} todo={todo} mark={MarkTodo} remove={RemoveTodo} />
			)}
		</main>
	)
}

export default Todos
