import React from 'react'

const TodoItem = (props) => {
	return (
		<div className="todo-item">
			{props.todo.done
				? <>
					<del>{props.todo.name}</del>
					<p
						className="todo-rem"
						title="Remove"
						onClick={() => props.remove(props.todo.name)}>X</p>
				</>
				: <>
					<p>{props.todo.name}</p>
					<input
						title="Complete"
						type="checkbox"
						checked={props.todo.done}
						onChange={() => props.mark(props.todo.name)} />
				</>
			}
		</div>
	)
}

export default TodoItem
