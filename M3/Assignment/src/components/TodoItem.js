import React from 'react'

const TodoItem = (props) => {
	return (
		<div className="todo-item ">
			{props.todo.done
				? <del>{props.todo.name}</del>
				: <p>{props.todo.name}</p>
			}
			<input type="checkbox" checked={props.todo.done} />
		</div>
	)
}

export default TodoItem
