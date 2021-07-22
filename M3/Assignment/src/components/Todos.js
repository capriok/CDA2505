import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
	return (
		<main>
			{props.list.map((todo, index) =>
				<TodoItem key={index} todo={todo} />
			)}
		</main>
	)
}

export default Todos
