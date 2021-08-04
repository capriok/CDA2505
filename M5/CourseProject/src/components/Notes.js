import React from 'react'
import NoteItem from './NoteItem'

const Notes = ({ notes, setNotes }) => {

	function MarkNote(id) {
		const updatedNotes = notes.map(note => {
			if (note.id !== id) return note
			note.done = true
			return note
		})
		setNotes(updatedNotes)
	}

	function RemoveNote(id) {
		const updatedNotes = notes.filter(note => note.id !== id)
		setNotes(updatedNotes)
	}

	return (
		<main>
			{notes.map((note, index) =>
				!note.pinned && <NoteItem key={index} note={note} mark={MarkNote} remove={RemoveNote} />
			)}
		</main>
	)
}

export default Notes
