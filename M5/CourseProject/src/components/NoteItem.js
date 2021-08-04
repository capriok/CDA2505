import React from 'react'

const NoteItem = ({ note, mark, remove }) => {

	return (
		<div className="todo-item">
			{!note.done
				? <>
					<p>{note.name}</p>
					<input
						title="Complete"
						type="checkbox"
						checked={note.done}
						onChange={() => mark(note.id)} />
				</>
				: <>
					<del>{note.name}</del>
					<p
						className="item-rem"
						title="Remove"
						onClick={() => remove(note.id)}>
						X</p>
				</>
			}
		</div>
	)
}

export default NoteItem
