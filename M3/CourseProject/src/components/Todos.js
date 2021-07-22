import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {

	function mark() {

	}

	return (
		<main>
			{props.list.map((todo, index) =>
				<TodoItem key={index} todo={todo} mark={mark} />
			)}
		</main>
	)
}

export default Todos
